import React,{useEffect, useState} from 'react';
import VideoItem from '../VideoItem';
import './youtube.css';
const VideoList=(props)=>{
//const forceUpdate = useForceUpdate();
const [urlselected2,setUrlsetected]=useState();
const [video,setVideo]=useState([]);
const {videos,sendUrl2}=props;


const sendUrl=(url)=>{
setUrlsetected(url);
console.log("the url is here", urlselected2);
}  
useEffect(()=>{
    //forceUpdate();
    setVideo(videos) ;
    console.log('videos in the list component',videos)
   
    })
useEffect(()=>{
 sendUrl2(urlselected2);
})
return(<div className='list-video'>
{videos?.map((e)=><VideoItem 
 URL={e.snippet.thumbnails.default.url} 
 title={e.snippet.title} sendUrl={sendUrl}/>)}
</div>)
}
export default VideoList;