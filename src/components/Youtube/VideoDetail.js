import React, { useEffect, useState } from 'react';
import {Paper, Typography} from '@material-ui/core';
import useForceUpdate from 'use-force-update';
const VideoDetail=(video,urlSelected)=>{
    const forceUpdate=useForceUpdate();
    const [urlstrg,setUrlstrg]=useState('');
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setUrlstrg(localStorage.getItem("urlstrg"));
        setCount(localStorage.getItem("count"))   
        forceUpdate(); 
    })
return(<React.Fragment>
<Paper elevation={6} style={{height:"60vh"}}>
<img src={urlstrg} />
<iframe width="100%" height="100%" 
src={urlSelected}
title="YouTube video player" frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen>
</iframe>
 
</Paper>
{/*
<Paper elevation={6} style={{height:"70%"}}>
<Typography variant='subtitle1'></Typography>
<Typography variant='subtitle2'></Typography>
</Paper>
*/}


    </React.Fragment>)
}
export default VideoDetail;