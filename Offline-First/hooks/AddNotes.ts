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


  async SyncDataWithoutConflict() {
    try {

      // first check if we have data to sync 
      // if (local data does not exist sync is available){ 
      // return 
      // }
      if (!this.isConnected || !this.DB) {
        this.Reason = {
          "typeOfProblem": "network is not available"
        }
        return
      }

      // check if remote server is awake and available for request 
      await fetch("http://localhost:3001")
        .then(res => {
          console.log("resof", res)
        })

    } catch (error) {
      console.log(error)
    }
    // TDDO 
    // we need way to sync data to remote server and update isSyncAvilable flag if success
    //
    // first check if net is working or available 
    // check if we have data in loca that is not synced 
    // sync data if avliable if not just return falg 
    // anc check if remote server is up and runnig before pushing sync 

    if (!this.isConnected) {
      // net is not connect so store form local 
      this.Reason = {
        "typeOfProblem": "network is not available"
      }
      return
    }

    if (this.isSyncAvilable != "no") {
      // here sync are avliable so first finishe syncing 
      // if sync are not 200OK  
      this.isSyncAvilable = "yes" // still we have to sync data so sync is avliable retry 
    }

    this.isSyncAvilable = "no"


  }


  // we need way to add Note 
  async AddNote(Note: Note) {
    // Note 
    // first always check if data need to be sync 
    if (!this.CheckNetworkStablity()) {
      // net is not connect so store form local 
      await this.DB?.runAsync(`INSERT INTO NoteTaking(note, title, tag1, tag2) VALUES(${Note.note},${Note.title},${Note.tag1},${Note.tag2}) `)
    }
    // before create to local check i remote server is rachable 
    // if (remote is rechable) {
    //   // add note to there
    // }


    return "yay it work"
  }
  UpdateNote(id: number, NoteData: Omit<Note, "tag1" | "tag2">): string {
    // first always check if data need to be sync 
    /// again here check if remote server are recahble if so update from there and also from lcoal storage  to free from conflict/overide 

    return "update note id 2"
  }

  DeleteNote(id: number): string {

    // first always check if data need to be sync 
    /// again here check if remote server are recahble if so update from there and also from lcoal storage  to free from conflict/overide 
    return "delte note id 1"
  }
}


export const ManageNonte = new NotesTakingManager()

