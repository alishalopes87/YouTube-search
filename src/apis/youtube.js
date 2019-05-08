import axios from 'axios';


const KEY ='AIzaSyBamy3iueA4AN-cfCzd45r20cmHOkNySac';

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params:{
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	}
});