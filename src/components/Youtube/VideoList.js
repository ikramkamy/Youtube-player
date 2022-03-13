import React from 'react';
import {Grid, Typography,Paper} from '@material-ui/core';
import VideoItem from '../VideoItem';
const VideoList=(props)=>{
    const {videos}=props;
console.log('videos in the list component',videos)
    return(<Grid container spacing={10}>{videos?.map((e)=><VideoItem key={e.id} URL={e.src}/>)}</Grid>)
}
export default VideoList;