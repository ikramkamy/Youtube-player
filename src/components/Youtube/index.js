import React,{useState,useEffect} from 'react';
import './youtube.css';
import axios from 'axios';
import {Grid} from '@material-ui/core';
import VideoDetail from './VideoDetail';
import SearchBar from './SearchBar';
import youtube from '../../api/youtube';
import VideoList from './VideoList';
const Youtube=()=>{
const [vid,setVid]=useState([]);
/** 
const handelSubmit = async (searchTerm)=>{
const response =await youtube.get('serach', {
    params: {
    part:'snippet',
    maxResults:5,
    key:'AIzaSyCHphw9xFloISSaIGnDEjx0DrA1BEu5MaQ',
    q:searchTerm,
}
})
console.log("the response is here",response)
    }
*/

/** 
const getData=()=>
  fetch("video.json", {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json())
  useEffect(()=>{
    getData().then((data)=> {
      console.log("the data from the package json",data); 
      setVid(data.video)
    })
    
   console.log("vid",vid);
   },[])
*/
const getdata2=()=>{
    axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA9l3r22ExG22iz2M3HZQbl_jlEebl23AY')
    .then(res => {
      const data=res.data.items;
      console.log("data from youtube API",data);
      //setVid(data);
      console.log("item",vid);
    },[]) 
    .catch(function (error) {
        console.log(error);
        }) 
}
/*
useEffect(() => {
  axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA9l3r22ExG22iz2M3HZQbl_jlEebl23AY')
  .then(res => {
    const data=res.data;
    console.log("data from youtube API",data);
},[]) 
  .catch(function (error) {
      console.log(error);
  }) 
   })
*/
   const [selectedvid,setSelectedvid]=useState();
    return(
<Grid  justifyContent='center' container spacing={10}>
 <Grid item xs={12}>
    <Grid container spacing={10}>
        <Grid item xs={12}><SearchBar onFormSubmit={getdata2}/></Grid>
        <Grid item xs={8}><VideoDetail video={selectedvid}/></Grid>
        <Grid item xs={4}><VideoList videos={vid}/></Grid>
    </Grid>
</Grid>
</Grid>)
}
export default Youtube;
/**
 <iframe width="560" height="315" src="https://www.youtube.com/embed/9OJLxDxyNg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */