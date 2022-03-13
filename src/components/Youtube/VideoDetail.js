import React from 'react';
import {Paper, Typography} from '@material-ui/core';
const VideoDetail=(video)=>{
if(!video) return <div>loading...</div>
//const videoSRC=`https://www.youtube.com/embed/${video.is.videoID}`
    return(<React.Fragment>
<Paper elevation={6} style={{height:"60vh"}}>
   
<iframe width="100%" height="100%" 
src="https://www.youtube.com/embed/inPtRWtvDaM" 
title="YouTube video player" frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowFullScreen></iframe>
 
</Paper>
<Paper elevation={6} style={{height:"70%"}}>
    
<Typography variant='subtitle1'></Typography>
<Typography variant='subtitle2'></Typography>

</Paper>


    </React.Fragment>)
}
export default VideoDetail;