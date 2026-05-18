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
  }

  async InitizeDB() {
    this.DB = await SQLite.openDatabaseAsync("offline_first_note")

    // if table does not exist create it 
    await this.DB.execAsync(` 
      CREATE TABLE IF NOT EXISTS NoteTaking (
      id TEXT PRIMARY KEY NOT NULL,
      note TEXT,
      title TEXT,
      tag1 TEXT,
      tag2 TEXT
     `)
    this.isSyncAvilable = "yes"
  }


  async CheckNetworkStablity(): Promise<void> {
    try {
      fetch().then(state => {
        console.log(state.isConnected)
        this.isConnected = state.isConnected ?? false
        this.netType = state.type
        console.log(state.type)
      })
    } catch (error) {
      console.log(error)
    } finally {
      console.log("checking net is faling ")
    }

  }

  async isRemoteUpAndRunning() {
    // check if remote server are up and running 
    const BASEURL = "http://localhost:3001"
    const res = await fetch(BASEURL)
    return { res: res, baseUrl: BASEURL }
  }

  async SyncDataWithoutConflict(Note: Note) {
    const baseUrl = (await this.isRemoteUpAndRunning()).baseUrl
    try {
      const AllLocalData = await this.DB?.getAllAsync(`SELECT * FROM offline_first_note`)
      if (AllLocalData != undefined && AllLocalData?.length > 0) {
        for (const note of AllLocalData) {
          // sync local files form local to remote 
          const res = await axios.post(`${baseUrl}/posts`, note);
          if (res.status != 200) {
            // if fail just upload the current note to local and return 
            await this.DB?.runAsync(`INSERT INTO NoteTaking(note, title, tag1, tag2) VALUES(${Note.note},${Note.title},${Note.tag1},${Note.tag2}) `)
            Alert.alert("Fail", "fail syncing fils")
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
      if (!this.isConnected || (await this.isRemoteUpAndRunning()).res.isConnected) {
        await this.DB?.runAsync(`INSERT INTO NoteTaking(note, title, tag1, tag2) VALUES(${Note.note},${Note.title},${Note.tag1},${Note.tag2}) `)
        this.isSyncAvilable = "yes"
        Alert.alert("Success", "note is uploaded in local fils")
        return
      }

      if (this.isSyncAvilable && (await this.isRemoteUpAndRunning()).res.isConnected) {
        const baseUrl = (await this.isRemoteUpAndRunning()).baseUrl
        // sync local to remote 
        await this.SyncDataWithoutConflict(Note)
        // upload current note to remote 
        const res = await axios.post(`${baseUrl}/posts`, Note);
        if (res.status != 200) {
          Alert.alert("Failed", "Failed to upload current note to remote db")
        }
        // at the end upload the current note
        this.isSyncAvilable = "no"
        Alert.alert("Success", "note is uploaded remot db")
      }

      // remove any local files 
      await this.DB?.runAsync("DELETE FROM offline_first_note");
      this.isSyncAvilable = "no"
    } catch (error) {
      console.log(error)
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

