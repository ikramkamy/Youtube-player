import React, { useEffect, useState } from 'react';
import {Grid, Typography,Paper} from '@material-ui/core';

const VideoItem=(props)=>{
    const {URL,title,sendUrl}=props;
 const [urlsetected,setUrlsetected]=useState("");

 const callsetURL=()=>{
    localStorage.setItem(`urlstrg`, URL );
      
    }

    return(<div className='video-bloc'>
<Paper style={{ display:"flex", alignItems:"center" }}></Paper>

<img style={{marginRight:"20px"}} 
alt="thumbnail" src={URL} height="150px" width="150px"
onClick={()=>(callsetURL())}/>
<div variant="subtitle1"><b>{title}</b></div>
<iframe width="100%" height="100%" 

title="YouTube video player" frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowFullScreen>
      </iframe>

    </div>)
}
export default VideoItem;