import './MusicTable.css'
import React from 'react'
import EditSong from '../EditSong/EditSong';

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
                <tbody>
                {props.songs.map((song) => {
                    return <tr onClick = {() => {<EditSong song = {song}/>; console.log('Row clicked')}} key = {song.id}><td>{song.title}</td>
                    <td>{song.artist}</td><td>{song.album}</td><td>{song.release_date}</td>
                    <td><button className = "btn btn-danger" onClick = {() =>props.deleteSong(song.id)}>Delete</button></td></tr>
                })}
                </tbody>
            </table>
        </div>
    );
}

 
export default MusicTable;