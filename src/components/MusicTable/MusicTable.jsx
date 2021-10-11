import './MusicTable.css'
import React, {useState} from 'react'
import EditSong from '../EditSong/EditSong.jsx';

function MusicTable(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [songClicked, setSongClicked] = useState('')

    function modalHandler(song) {
        setModalIsOpen(true);
        setSongClicked(song)
    }

    function closeModal() {
        setModalIsOpen(false)
    }


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
                    return <tr onClick = {() => modalHandler(song)} key = {song.id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td><td>{song.album}</td><td>{song.release_date}</td>
                    <td><button className = "btn btn-danger" onClick = {() =>props.deleteSong(song.id)}>Delete</button></td></tr>
                })}
                </tbody>
            </table>
            {modalIsOpen && <EditSong song = {songClicked} modalState = {modalIsOpen} closeModal = {closeModal} updateSong = {props.updateSong}/>}
        </div>
    );
}

 
export default MusicTable;