// idea 
// note addng class whrer user can edit with ull CRUD opration 
// so we also need offline SqlLite  storage and when net is stable we have to upload notes 
// so if net is not stable we have to store them to local SqlLite storage 
// first try to upload if not store them in local storage 
//
// i need class of NotesTakingManager 
// within tha class i need add rmeove update delte 
// when user add or do CRUD opration we have to first check if net is stable if so upload direcly to remote otherwise in local 

import NetInfo from "@react-native-community/netinfo";
import { useNetInfoInstance, useNetInfo } from "@react-native-community/netinfo";
const { type, isConnected } = useNetInfo()


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

  constructor(Note: Note, id: number = 0) {
    this.title = Note.title
    this.note = Note.note
    this.tag1 = Note.tag1
    this.tag2 = Note.tag2
    this.id = id
  }


  CheckNetworkStablity(): boolean {
    console.log(isConnected)
    // here we first check if user is offline or offline and if the user is up and running to accept rquest 
    return false
  }


  // we need way to add Note 
  AddNote(Note: Note): string {
    // before create to local check i remote server is rachable 
    // if (remote is rechable) {
    //   // add note to there
    // }


    return "yay it work"
  }
  UpdateNote(id: number, NoteData: Omit<Note, "tag1" | "tag2">): string {
    /// again here check if remote server are recahble if so update from there and also from lcoal storage  to free from conflict/overide 

    return "update note id 2"
  }

  DeleteNote(id: number): string {
    /// again here check if remote server are recahble if so update from there and also from lcoal storage  to free from conflict/overide 
    return "delte note id 1"
  }
}

const note = { tag1: "", tag2: "", title: "", note: "" }
export const ManageNonte = new NotesTakingManager(note, 1)

