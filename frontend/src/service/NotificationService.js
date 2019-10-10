import axios from 'axios';
const API_URL = 'http://localhost:5000';

export default class NotificationService{

    constructor(){}
    
	async getNotifications(){
        console.log("get notifications");
		const url = `${API_URL}/api/notifications/`;
		return await axios.get(url).then(response => response.data);
	}
}