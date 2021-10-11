import React from 'react';

function EditSong(props) {

        return (
            <div>
                <p>Title: {props.song.title}</p>
                <br />
                <p>Artist: {props.song.artist}</p>
                <br />
                <p>Album: {props.song.album}</p>
                <br />
                <p>Release Date: {props.song.release_date}</p>
            </div>
        )
    }

export default EditSong;