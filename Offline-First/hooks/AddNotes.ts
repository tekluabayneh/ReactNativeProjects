import { fetch } from "@react-native-community/netinfo";
import * as SQLite from 'expo-sqlite';
import { Alert } from "react-native";
import axios from "axios"



export interface Note {
  title: string,
  note: string,
  tag1: string,
  tag2: string
}

class NotesTakingManager {
  title: string = ""
  note: string = ""
  id: number = 0
  tag1: string = ""
  tag2: string = ""
  netType: string = "wifi"
  isConnected: boolean = false
  isSyncAvilable: "yes" | "no"
  Reason: any
  private DB: SQLite.SQLiteDatabase | null = null


  constructor(Note: Partial<Note> = {}, id: number = 0, isConnected: boolean, netType: string, isSyncAvilable: "yes", Reason: any) {
    this.isConnected = isConnected || false
    this.netType = netType || "wifi"
    this.title = Note.title || ""
    this.note = Note.note || ""
    this.tag1 = Note.tag1 || ""
    this.tag2 = Note.tag2 || ""
    this.isSyncAvilable = isSyncAvilable || "yes"
    this.id = id
    this.Reason = Reason || {}
    this.InitizeDB()
    this.CheckNetworkStablity()
  }

  async InitizeDB() {
    try {
      this.DB = await SQLite.openDatabaseAsync("offline_first_note")
      // if table does not exist create it 
      await this.DB.execAsync(` 
      CREATE TABLE IF NOT EXISTS NoteTaking (
      id INTEGER PRIMARY KEY,
      note TEXT,
      title TEXT,
      tag1 TEXT,
      tag2 TEXT
)`)
      console.log("Database and tables initialized successfully!");
    } catch (error) {
      console.log("failed create db and table", error)
    }
  }


  // first check if there is local files that need to be sync and sync after that pull all the data form remote server
  async GetAllNote() {
    try {
      if (this.isSyncAvilable == "yes" && this.isConnected && (await this.isRemoteUpAndRunning())?.res.isConnected) {
        this.SyncDataWithoutConflict()
      }

      if (this.isConnected && (await this.isRemoteUpAndRunning())?.res.isConnected) {
        const { data: notes } = await axios.get((await this.isRemoteUpAndRunning())?.baseUrl! + "/notes")
        this.isSyncAvilable = "no"
        return notes
      }
    } catch (error) {
      console.log(error)
    }
    const localNotes = await this.DB?.getAllAsync("SELECT * FROM NoteTaking")
    return localNotes
  }

  async GetSingleNoteByTitleName(value: string) {

    return ""
  }
  async CheckNetworkStablity(): Promise<void> {
    try {
      fetch().then(state => {
        this.isConnected = state.isConnected ?? false
        this.netType = state.type
      })
    } catch (error) {
      console.log("error while checking if phone is connected to network", error)
    }

  }

  // TODO 
  //  - check if remote server is  up and running
  //   - check if net is available 
  //    - shol't not fail if remote server is not running or if net is not connected it must return flags to endicate weather to sotre in lcoa or remote 
  //
  async isRemoteUpAndRunning() {
    const BASEURL = "https://6a0c8d2f5aa893e1015c0f4d.mockapi.io"
    if (!this.isConnected) {
      this.isConnected = false
      return { res: { "isConnected": false }, baseUrl: BASEURL }
    }
    try {
      const res = await axios.get(BASEURL)
      return { res: res.status == 200 ? { "isConnected": true } : { "isConnected": false }, baseUrl: BASEURL }
    } catch (error) {
      this.isConnected = false
      console.log("failed chihng if remote server is up and running", error)
    } finally {
      console.log("finally flags updated")
    }
  }

  async SyncDataWithoutConflict(Note?: Note) {
    console.log("reached herer syncing....")
    const baseUrl = (await this.isRemoteUpAndRunning())?.baseUrl
    try {
      const AllLocalData = await this.DB?.getAllAsync(`SELECT * FROM NoteTaking`)
      if (AllLocalData != undefined && AllLocalData?.length > 0) {
        for (const note of AllLocalData) {
          console.log("notes man", note)
          // sync local files form local to remote 
          const res = await axios.post(`${baseUrl}/notes`, note);
          if (res.status >= 500 || res.status in [400, 404, 401]) {
            Alert.alert("Fail", "failed syncing files")
            break
          }
          console.log("sync completed....")
        }
      }

      console.log("delteting local fiels...")
      await this.DB?.runAsync("DELETE FROM NoteTaking");
      Alert.alert("Success", "loca files are sync to remove frutfully")
    } catch (error) {
      console.log(error)
    }
  }

  // NOTE 
  // steps 
  //  - check if net is available 
  //    - in case of net is not available i must store the current note to local db
  //    - and update isSyncAvilable to yes flag
  //  - check if remote server is up and running 
  //    - in case of remote server are not running i just have to try again later on as re-try method can help here 
  //  - check if there is any local files i first need to sync 
  //    - if not local data are presented i can just skip it
  //  - sync or upload current note  
  //    - if any error occur during update or sync we have to have fault tolerance where i need to have re-try or try after some amount of time  like after 10Mins 
  //  - update or remove local files 
  //     - if update or sync are success i can safely remove local data 
  //  - update isSyncAvilable 
  //  - fault tolerance if any error occur during syncing or uploading note i should taken care of that too  
  //     - should implement try-catch with best method of fault tolerance and notify user about it briefly

  async AddNote(Note: Note) {
    if (!Note.title || !Note.note) {
      Alert.alert("Data inconsistency", "note should contain atlist title and note")
      return
    }

    try {
      if (!this.isConnected || (await this.isRemoteUpAndRunning())?.res.isConnected == false) {
        const res = await this.DB?.runAsync(`INSERT INTO NoteTaking(note, title, tag1, tag2) VALUES(?, ?, ?, ?) `, [Note.note, Note.title, Note.tag1, Note.tag2])
        console.log("response of local store", res)
        console.log("uploading to loacla....")
        this.isSyncAvilable = "yes"
        Alert.alert("Success", "note is uploaded in local fils")
        return
      }

      if (this.isSyncAvilable == "yes" && (await this.isRemoteUpAndRunning())?.res.isConnected == true) {
        await this.SyncDataWithoutConflict(Note)
        this.isSyncAvilable = "no"
      }

      if ((await this.isRemoteUpAndRunning())?.res.isConnected) {
        const baseUrl = (await this.isRemoteUpAndRunning())?.baseUrl
        const res = await axios.post(`${baseUrl}/notes`, Note);
        if (res.status >= 500 || res.status == 400) {
          Alert.alert("Failed", "Failed to upload current note to remote db")
        }
        Alert.alert("Success", "note uploaded to remote server.")
      }

      // remove any local files 
      // await this.DB?.runAsync("DELETE FROM NoteTaking");
      this.isSyncAvilable = "no"
    } catch (error) {
      console.log("failed uploading ", error)
    }

  }




  // first alway check if we have local files we need to sync if so sync them
  // and then update the note for remote server



  // if the device is offline update note from local  
  async UpdateNote(id: number, NoteData: Omit<Note, "tag1" | "tag2">) {
    if (!id || NoteData) {
      Alert.alert("Warning", "to update note you have to have update version of note")
      return
    }
    const baseUrl = (await this.isRemoteUpAndRunning())?.baseUrl

    try {
      if (this.isConnected && (await this.isRemoteUpAndRunning())?.res.isConnected) {
        this.SyncDataWithoutConflict()
      }

      const res = await axios.post(`${baseUrl}` + "/notes", [id, NoteData])
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }


    const res = await this.DB?.runAsync(`UPDATE NoteTaking SET note = ?, title = ? WHERE id = ?`, [NoteData.note, NoteData.title, id]);
    console.log(res)
  }

  async DeleteNote(id: number) {
    if (!id) {
      Alert.alert("Warning", "to delte specify note id is required")
      return
    }
    const baseUrl = (await this.isRemoteUpAndRunning())?.baseUrl

    try {
      if (this.isConnected && (await this.isRemoteUpAndRunning())?.res.isConnected) {
        this.SyncDataWithoutConflict()
      }

      const res = await axios.delete(`${baseUrl} + "/notes:${id}"`)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
}

// @ts-ignore
export const ManageNonte = new NotesTakingManager()

