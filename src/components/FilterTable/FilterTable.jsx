import './FilterTable.css'
import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { FormControlLabel } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel'
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';

function FilterTable(props) {
    return ( 
        <div>
            <h1>Filter</h1>
            <hr />
            <form onSubmit = {props.handleFormSubmit}>
                <FormLabel>What would you like to filter by</FormLabel>
                <RadioGroup row  value = {props.filterSubject}onChange = {(e) => props.setSubject(e.target.value)}> 
                    <FormControlLabel value = "title"control = {<Radio />} label = "Title" onChange = {props.handleChange}/>
                    <FormControlLabel value = "artist"control = {<Radio />} label = "Artist" onChange = {props.handleChange}/>
                    <FormControlLabel value = "album"control = {<Radio />} label = "Album" onChange = {props.handleChange}/>
                    <FormControlLabel value = "release_date"control = {<Radio />} label = "Release Date" onChange = {props.handleChange}/>
                </RadioGroup>
                <FormLabel>Filter For</FormLabel>
                    <br /><Input placeholder="Value" onChange= {props.handleChange} value = {props.filterValue} /> <br />
                    <Button variant="contained" type = "submit" size = "small">Submit</Button>
            </form>
        </div>
     );
    
}
 
export default FilterTable;