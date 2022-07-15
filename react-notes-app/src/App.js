import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import uuid from 'react-uuid'; //install external id creator "react-uuid"


function App() {
  // set the state for note function
  // Send this state as a prop to Sidebar
  // JSON.parse(localStorage.notes) will has initial state of your note base on what stored in the local strage
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || [])

  // Send this state as a prop to Main and Sidebar
  const [activeNote, setActiveNote] = useState(false) //default state is no avtive note

  // use useEffect to store and fetch the data from local storage. Also can use with API if avaliable
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);  
 

  //function to Add new note
  function onAddNote() {
     console.log("add")
    const newNote = {
      id: uuid(), //install external id creator "react-uuid to create random id"
      title: "Untitle Note",
      body: "",
      lastModified: Date.now()
    }
    setNotes([newNote, ...notes]) //new array where we add new object, and copy the existing array to put on new array
  };

  //function to delete note
  // Use ES6 filter function to check the current loop of "note id" and compare with the "note id" that coming in (idToDelete)
  //if the note.id !== idToDelete, then it's "true", then it will stay in the array.
  function onDeleteNote(idToDelete) {
    setNotes(notes.filter(function(note) {
      return note.id !== idToDelete
    }))
  };

  //function to add active note to main area
  //get the current stored id and find it in the array and then return the entire object
  // ES6 .find loop through each note, the id found return true and return as an object
  function getActiveNote() {
    return notes.find((note) => {
      return note.id === activeNote})
  };

  //function to edit note
  function onUpdateNote(UpdateNote) {
    const updateNoteArray = notes.map(
      (note) => {
        if (note.id === activeNote) {
          return UpdateNote
        }
        return note
      }
    );
    setNotes(updateNoteArray)
  };


  return (
    <div className="App">
      {/* // Send "notes" state as a prop to Sidebar */}
      <Sidebar 
        notes = {notes}
        onAddNote = {onAddNote} 
        onDeleteNote = {onDeleteNote} 
        activeNote = {activeNote}  
        setActiveNote = {setActiveNote}
      />   
      <Main 
        activeNote = {getActiveNote()} //pass the runing function in as a props
        onUpdateNote = {onUpdateNote}
      />     
    </div>
  );
}

export default App;
