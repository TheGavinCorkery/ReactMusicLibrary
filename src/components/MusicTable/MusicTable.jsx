import './MusicTable.css'
import React from 'react'

function MusicTable(props) {

    return ( 

        <div>
            <h1>All Songs</h1>
            <hr />
            <table className = "table-responsive musicTable">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th />
                    </tr>
                </thead>
                {props.songs.map((song) => {
                    return <tr><td>{song.title}</td>
                    <td>{song.artist}</td><td>{song.album}</td><td>{song.release_date}</td>
                    <td><button className = "btn btn-primary" onClick = {() =>props.deleteSong(song.id)}>Delete</button></td></tr>
                })}
            </table>
        </div>
    );
}

 
export default MusicTable;