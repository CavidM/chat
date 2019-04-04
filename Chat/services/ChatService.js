import axios from "axios";
import bearer from "../../../../../utilities/bearer";
import {API_KEY, API_URL} from "../../../../../config/constants";

let rootPath = 'inbox/channel';

class ChatService
{
    static getMessage(channel_id, campaign_activity_id, params) {

        let options = bearer();

        options.headers = {
            Authorization: `Bearer 25007c12087b27a5b7080e1fec72b498`
        }

        return axios.get(`${API_URL}/${rootPath}/messages/${campaign_activity_id}/${channel_id}?api_key=${API_KEY}&offset=${params.offset}&limit=${params.limit}`, options);
    }

    static sendMessage(channel_id, campaign_activity_id, message) {

        let options = bearer();

        options.headers =
            {
            Authorization: `Bearer 25007c12087b27a5b7080e1fec72b498`
        };

        return axios.post(`${API_URL}/${rootPath}/send-message/${campaign_activity_id}/${channel_id}?api_key=${API_KEY}`, message, options)
            .then(response => {
                return response;
            });
    }

    static setMessageOfferStatus(channel_id, campaign_activity_id, message_id, status) {

        let options = bearer();

        options.headers =
            {
                Authorization: `Bearer 25007c12087b27a5b7080e1fec72b498`
            };

        let body = {
            accept: status
        }

        return axios.post(`${API_URL}/${rootPath}/accept-reject-offer/${campaign_activity_id}/${channel_id}/${message_id}?api_key=${API_KEY}`, body, options)
            .then(response => {
                return response;
            });
    }

    static setMessageReadStatus(channel_id, campaign_activity_id, message_id) {

        let options = bearer();

        options.headers =
            {
                Authorization: `Bearer 25007c12087b27a5b7080e1fec72b498`
            };

        let body = {
            status: 1
        }

        return axios.post(`${API_URL}/${rootPath}/message-reading-status/${campaign_activity_id}/${channel_id}/${message_id}?api_key=${API_KEY}`, body, options)
            .then(response => {
                return response;
            });
    }
}

export default ChatService;
