import './MusicTable.css'
import React, { Component } from 'react';
import axios from 'axios';

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
    console.log(this.state.songs)
    }

    deleteSong = (song) => {
        // http://127.0.0.1:8000/music/3/
        try {
            axios.delete(`http://127.0.0.1:8000/music/${song}/`)
        }catch (ex) {

        }
    }

    render() { 
        return ( 
            <div className="row">
                <div className= "col-lg-3"></div>
                <div className= "col-lg-6 table" align = "center">
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
                <div className= "col-lg-3"></div>
            </div>
         );
    }
}
 
export default MusicTable;