import Modal from 'react-bootstrap/Modal';
import React from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

function EditSong(props) {
    const handleClose = () => props.setModalState

        return (
            <div>
                <Modal show = {props.modalState} backdrop="static" onHide={handleClose}>
                    <ModalHeader closeButton>
                        <ModalTitle>Edit Song: {props.song.title}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        Title: {props.song.title}
                        Artist:{props.song.artist}
                        Album: {props.song.album}
                        Release Date: {props.song.release_date}
                    </ModalBody>
                    <ModalFooter>
                        <button className = 'btn btn-light' onClick={handleClose}>Close</button>
                        <button className = 'btn btn-submit' onClick={() => handleClose}>Submit Changes</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    // <div>
    //     <p>Title: {props.song.title}</p>
    //     <br />
    //     <p>Artist: {props.song.artist}</p>
    //     <br />
    //     <p>Album: {props.song.album}</p>
    //     <br />
    //     <p>Release Date: {props.song.release_date}</p>
    // </div>

export default EditSong;