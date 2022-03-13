import { render } from '@testing-library/react';
import { Paper, TextField } from '@material-ui/core';
import React from 'react';
class SearchBar extends React.Component{

    state={
        searchTerm:"",
    }
handelChange =(event)=>{

    this.setState({searchTerm: event.target.value })
}
handelSubmit=(event)=>{
    const {searchTerm}=this.state;
    const {onFormSubmit}=this.props;
    onFormSubmit(searchTerm);
    event.preventDefault();
}
    render(){
        return(<Paper elevation={6} style={{padding:"25px"}}>


            <form onSubmit={this.handelSubmit}>
                <TextField fullWidth label="Search..." onChange={this.handelChange}/>
            </form>
        </Paper>)
    }
}export default SearchBar;