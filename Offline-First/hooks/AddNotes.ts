// idea 
// note addng class whrer user can edit with ull CRUD opration 
// so we also need offline SqlLite  storage and when net is stable we have to upload notes 
// so if net is not stable we have to store them to local SqlLite storage 
// first try to upload if not store them in local storage 
//
// i need class of NotesTakingManager 
// within the class i need add remove update delte 
// when user add or do CRUD opration we have to first check if net is stable if so upload direcly to remote otherwise in local 

// import NetInfo from "@react-native-community/netinfo";
import { fetch } from "@react-native-community/netinfo";
import * as SQLite from 'expo-sqlite';
import { Alert } from "react-native";
import axios from "axios"


interface Note {
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
    // this.InitizeDB()
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
    if (this.isSyncAvilable == "yes") {
      this.SyncDataWithoutConflict()
      this.isSyncAvilable = "no"
    }

    const res = await this.DB?.getAllAsync("SELECT * FROM NoteTaking")
    console.log("note", res)
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

  async isRemoteUpAndRunning() {
    try {
      // check if remote server are up and running 
      // const BASEURL = "http://localhost:3001"
      const BASEURL = "https://6a0c8d2f5aa893e1015c0f4d.mockapi.io"
      const res = await axios.get(BASEURL)
      console.log(res.status)
      return { res: res.status == 200 ? { "isConnected": true } : { "isConnected": false }, baseUrl: BASEURL }
    } catch (error) {
      console.log("failed chihng if remote server is up and running", error)
    }
  }

  async SyncDataWithoutConflict(Note?: Note) {
    const baseUrl = (await this.isRemoteUpAndRunning())?.baseUrl
    try {
      const AllLocalData = await this.DB?.getAllAsync(`SELECT * FROM NoteTaking`)
      if (AllLocalData != undefined && AllLocalData?.length > 0) {
        for (const note of AllLocalData) {
          console.log("notes man", note)
          // sync local files form local to remote 
          const res = await axios.post(`${baseUrl}/notes`, note);
          console.log("hrere,", res)
          if (res.status != 200) {
            // if fail just upload the current note to local and return 
            const res = await this.DB?.runAsync(`INSERT INTO NoteTaking(note, title, tag1, tag2) VALUES(?, ?, ?, ?) `, [Note?.note, Note?.title, Note?.tag1, Note?.tag2])
            console.log(res)
            Alert.alert("Fail", "failed syncing files")
            break
          }
          Alert.alert("Success", "loca files are sync to remove frutfully")
        }
      }
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
      console.log(this.isConnected, (await this.isRemoteUpAndRunning())?.res.isConnected)


      if (!this.isConnected || (await this.isRemoteUpAndRunning())?.res.isConnected == false) {
        const res = await this.DB?.runAsync(`INSERT INTO NoteTaking(note, title, tag1, tag2) VALUES(?, ?, ?, ?) `, [Note.note, Note.title, Note.tag1, Note.tag2])
        console.log(res)
        this.isSyncAvilable = "yes"
        Alert.alert("Success", "note is uploaded in local fils")
        console.log("Success", "note is uploaded in local fils")
        return
      }


      if (this.isSyncAvilable == "yes" && (await this.isRemoteUpAndRunning())?.res.isConnected) {
        const baseUrl = (await this.isRemoteUpAndRunning())?.baseUrl

        console.log("uploading to reote .....")
        console.log(baseUrl)
        // sync local to remote 
        // await this.SyncDataWithoutConflict(Note)
        // upload current note to remote 
        console.log("note data man", Note)
        const res = await axios.post(`${baseUrl}/notes`, Note);

        if (res.status != 200) {
          Alert.alert("Failed", "Failed to upload current note to remote db")
        }
        // at the end upload the current note
        this.isSyncAvilable = "no"
        Alert.alert("Success", "note uploaded to remote server.")
      }

      // remove any local files 
      // await this.DB?.runAsync("DELETE FROM NoteTaking");
      this.isSyncAvilable = "no"
    } catch (error) {
      console.log("failed uploading ", error)
    }

  }


  UpdateNote(id: number, NoteData: Omit<Note, "tag1" | "tag2">): string {
    // first always check if data need to be sync 
    /// again here check if remote server are reachable if so update from there and also from lcoal storage  to free from conflict/override 

    return "update note id 2"
  }

  DeleteNote(id: number): string {

    // first always check if data need to be sync 
    /// again here check if remote server are recahble if so update from there and also from lcoal storage  to free from conflict/overide 
    return "delte note id 1"
  }
}


export const ManageNonte = new NotesTakingManager()

