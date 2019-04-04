import {notification} from "antd"
import InboxService from "../services/ChatService";
import * as actions from "../../../../../actions/actionTypes";
import {inboxLoadMessageDispatchers} from "../../../../../config/constants";

export const getMessages = (
    channel_id,
    campaign_activity_id,
    params,
    dispatcher
) => {

    return async dispatch => {

        try {
            let res = await InboxService.getMessage(channel_id, campaign_activity_id, params);

            return dispatch({
                type: actions.GET_INBOX_MESSAGES,
                payload: {
                    messages: res.data.data,
                    params,
                    dispatcher
                }
            });
        }
        catch (e) {
            notification.destroy();
            notification.error({
                message: 'Error',
                description: e.message
            })
        }
    };
};

export const sendMessage = (
    channel_id,
    campaign_activity_id,
    message
) => {

    return async dispatch => {

        try {
            let res = await InboxService.sendMessage(channel_id, campaign_activity_id, message);

            return dispatch({
                type: actions.SEND_INBOX_MESSAGE,
                payload: {
                    message: message.content
                }
            });
        }
        catch (e) {
            notification.destroy();
            notification.error({
                message: 'Error',
                description: e.message
            })
        }
    };
}

export const setNewMessageLoader = (loader, dispatcher) => {

    return dispatch => {

        dispatch({
            type: actions.INBOX_MESSAGE_LOADER,
            payload: {
                loader,
                dispatcher
            }
        });
    }
}

export const setOfferStatus = (
    channel_id,
    campaign_activity_id,
    message_id,
    status
) => {

    return async dispatch => {

        try {

            let res = await InboxService.setMessageOfferStatus(channel_id, campaign_activity_id, message_id, status);

            dispatch({
                type: actions.SET_INBOX_MESSAGE_OFFER_STATUS,
                payload: {
                    message_id,
                    status
                }
            });

            return res;
        }
        catch (e) {
            notification.destroy();
            notification.error({
                message: 'Error',
                description: e.message
            })
        }
    }
}

export const setMessageReadStatus = (
    channel_id,
    campaign_activity_id,
    message_id
) => {
    return async dispatch => {

        let res = await InboxService.setMessageReadStatus(channel_id, campaign_activity_id, message_id);

        dispatch({
            type: actions.SET_INBOX_MESSAGE_READ_STATUS,
            payload: {
                message_id
            }
        });
    }
}

export const reset = () => {
    return dispatch => {
        dispatch({
            type: actions.RESET
        });
    }
}
