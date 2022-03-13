import axios from 'axios';
export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3/search',

});
//
/**
 GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=9OJLxDxyNg4&channelType=any&forDeveloper=true&location=Algeria&maxResults=10&order=date&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json
 AIzaSyA9l3r22ExG22iz2M3HZQbl_jlEebl23AY

 */