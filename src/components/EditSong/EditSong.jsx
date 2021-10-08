import React, {ReactModal} from 'react';

function EditSong(props) {
     
    this.title = "";
    this.artist = "";
    this.album = "";
    this.release_date =  "";
    
    function handleChange(event){
        [event.target.name] = event.target.value
    }
    

        return (
                <ReactModal>
                <ReactModal.Header closeButton>
                    <ReactModal.Title>{props.song.title}</ReactModal.Title>
                </ReactModal.Header>
                <ReactModal.Body>
                    <form className = "my-auto" onSubmit={(event) => this.handleSubmit(event)}>
                        <label htmlFor= "title">Title: </label>
                        <input type="text" name = "title" value = {props.song.title} onChange = {handleChange()}/>
                        <br />
                        <label htmlFor= "artist">Artist: </label>
                        <input type="text" name = "artist" value = {props.song.artist} onChange = {handleChange()}/>
                        <br />
                        <label htmlFor= "album">Album: </label>
                        <input type="text" name = "album" value = {props.song.album} onChange = {handleChange()}/>
                        <br />
                        <label htmlFor= "releaseDate">Release Date: </label>
                        <input type="date" name = "release_date" value = {props.song.release_date} onChange = {handleChange()}/>
                        <br />
                        <br />
                        <button className = "btn btn-success"type = "submit">Create Song</button>
                    </form>
                </ReactModal.Body>
                <ReactModal.Footer> <button className = "btn btn-primary">Close</button> </ReactModal.Footer>
            </ReactModal>
        )
    }

export default EditSong;