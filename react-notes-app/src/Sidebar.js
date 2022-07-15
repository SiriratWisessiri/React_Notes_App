function Sidebar(){
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button>Add</button>
            </div>
            <div className="app-sidebar-notes-container">
                <div className="app-sidebar-note">
                    <div className="sidebar-note-title">
                        <strong>TITLE</strong>
                        <button className="delete-button">Delete</button>
                    </div>
                    <p>Note Preview</p>
                    <small className="note-meta">
                        Last Modified [date]
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;