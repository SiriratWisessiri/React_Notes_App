import ReactMarkdown from 'react-markdown'

function Main({activeNote, onUpdateNote}){
    //This if statement fixed the bug of "activeNote" that has function of "getActivenote"
    //which contain .find funcion, that will look for matching id to return true
    //causing the first render of empty note breaking the page as there is no note, therefore no matching id and will return false!
    if (!activeNote) 
        return 
            <div className="no-active-note">
                No Note Selected
            </div>;
    
    function onEditField(key, value) {
        onUpdateNote ({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        })
    }
    
    return(
        <div className="app-main">
            <div className="app-main-note-edit">
                <input 
                    type="text"
                    id="title"
                    autoFocus
                    value={activeNote.title}
                    onChange={(event) => onEditField("title", event.target.value)}
                />
                <textarea
                    id="body"
                    placeholder="Write your note here"
                    value={activeNote.body}
                    onChange={(event) => onEditField("body", event.target.value)}
                />
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview ">
                    {activeNote.body}
                </ReactMarkdown>
            </div>

        </div>
    )
}

export default Main;