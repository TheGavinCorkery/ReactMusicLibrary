import React, { Component } from 'react';
import { Modal } from 'react-modal';

class EditSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            artist: "",
            album: "",
            release_date: ""
         }
    }

    handleSubmit = () => {
        pass
    }
    

    render() { 
        return ( 
            <Modal>
                <form className = "my-auto" onSubmit={(event) => this.handleSubmit(event)} method = "post">
                    <label htmlFor= "title">Title: </label>
                    <input type="text" name = "title" value = {this.state.title} onChange = {this.handleChange}/>
                    <br />
                    <label htmlFor= "artist">Artist: </label>
                    <input type="text" name = "artist" value = {this.state.artist} onChange = {this.handleChange}/>
                    <br />
                    <label htmlFor= "album">Album: </label>
                    <input type="text" name = "album" value = {this.state.album} onChange = {this.handleChange}/>
                    <br />
                    <label htmlFor= "releaseDate">Release Date: </label>
                    <input type="date" name = "release_date" value = {this.state.releaseDate} onChange = {this.handleChange}/>
                    <br />
                    <br />
                    <button className = "btn btn-success"type = "submit">Create Song</button>
                </form>
            </Modal>
         );
    }
}
 
export default EditSong;