import './App.css';
import MusicTable from './components/MusicTable/MusicTable';
import React, { Component } from 'react';
import axios from 'axios';
import SongForm from './components/SongForm/SongForm.jsx'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      songs: []
   }
  }

  componentDidMount() {
    this.getAllSongs()
  }

  async createSong(newSong) {
    try{
        await axios.post('http://127.0.0.1:8000/music/', newSong)
        this.getAllSongs()
    }catch (er) {
        console.log("Error in Post Call")
    }
  }
  deleteSong= async(song)=> {
    try {
        await axios.delete(`http://127.0.0.1:8000/music/${song}/`)
        
    }catch (ex) {
        console.log('Error in API Call')
    }
    this.getAllSongs()
  }

  getAllSongs= async()=>{
    try {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs: response.data
        })
    }catch(ex){
        console.log('Error in API Call!')
    }
  }

  render(){
    return(
      <div className="container-fluid">
        <div className = "row">
          <div className = "col-md-6" align = "center">
            <SongForm createSong = {this.createSong} updateList = {this.getAllSongs}/> 
          </div>
          <div className= "col-md-6" align = "center">
            <MusicTable deleteSong = {this.deleteSong} songs = {this.state.songs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
