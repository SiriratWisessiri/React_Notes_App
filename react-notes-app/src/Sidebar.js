function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}){ // You can put "props" as parameter or Object Destructuring like here. Props is an object. This take "notes" out off the object and create the local varialble
    //The variable below will sort the note according to lastest modifies
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add</button> 
                {/*We can't write the logic for "onAddNote inside this Sidebar fiel as the data is store inside the App.js"  
                We can write the function in App.js and pass here as props*/}
            </div>
            <div className="app-sidebar-notes-container">
                {sortedNotes.map((note) => ( //This .map function will loop through each of the notes 
                // Give condition to the class name to triger the CSS style.
                <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)}>
                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                        {/* OnDeleteNote we will need to refer to the id of the note we want to delete */}
                        {/* Why we have have make it a function? To prevent it from auto run everytime the page get rendered*/}
                        <button className="delete-button" onClick={() => onDeleteNote(note.id)}>Delete</button>
                    </div>
                    {/* match the property name with the "newNote" object property in App.js*/}
                    {/* conditional rendering, if there is a note body, will take the first 100 character and display  */}
                    <p>{note.body && note.body.substr(0, 100) + "..."}</p> 
                    <small className="note-meta">
                        Last Modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit"
                        })}
                    </small>
                </div>
                ))}     
            </div>
        </div>
    )
}

export default Sidebar;