import React from 'react';
import {Grid, Typography,Paper} from '@material-ui/core';

const VideoItem=(props)=>{
    const {URL}=props;
    return(<Grid item xs={12}>
<Paper style={{ display:"flex", alignItems:"center" }}></Paper>
<img style={{marginRight:"20px"}} alt="thumbnail" src={URL}/>
<Typography variant="subtitle1"><b>title</b></Typography>
<iframe width="100%" height="100%" 
src={URL}
title="YouTube video player" frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowFullScreen>

 </iframe>
    </Grid>)
}
export default VideoItem;