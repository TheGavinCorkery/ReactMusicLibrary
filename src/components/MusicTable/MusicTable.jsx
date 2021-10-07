import './MusicTable.css'
import React, { Component } from 'react';
import axios from 'axios';
import SongForm from '../SongForm/SongForm'

class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }

    componentDidMount() {
        this.getAllSongs()
    }

    async getAllSongs() {
        try {
            let response = await axios.get('http://127.0.0.1:8000/music/')
            this.setState({
                songs: response.data
            })
        }catch(ex){
            console.log('Error in API Call!')
        }
    }

    async deleteSong(song) {
        let tempSongs = this.state.songs
        try {
            axios.delete(`http://127.0.0.1:8000/music/${song}/`)
            tempSongs = await axios.get('http://127.0.0.1:8000/music/')
            this.setState({
                songs: tempSongs
            })
        }catch (ex) {
            console.log('Error in API Call')
        }
    }

    createSong = (newSong) => {
        try{
            axios.post('http://127.0.0.1:8000/music/', newSong)
        }catch (er) {
            console.log("Error in Post Call")
        }
        
    }

    render() { 
        return ( 
            <div className="row">
                <div className= "col-sm-3">
                    <SongForm createSong = {this.createSong}/>
                </div>
                <div className= "col-sm-6 table" align = "center">
                    <h1>All Songs</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Album</th>
                                <th>Release Date</th>
                            </tr>
                        </thead>
                        {this.state.songs.map((song) => {
                            return <tr><td>{song.id}</td><td>{song.title}</td>
                            <td>{song.artist}</td><td>{song.album}</td><td>{song.release_date}</td>
                            <td><button className = "btn-danger" onClick = {this.deleteSong(song.id)}>Delete</button></td></tr>
                        })}
                    </table>
                </div>
                <div className= "col-sm-3"></div>
            </div>
         );
    }
}
 
export default MusicTable;