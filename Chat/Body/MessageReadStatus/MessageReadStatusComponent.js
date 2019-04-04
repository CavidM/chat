import IconList from "../../../../../../components/Icon/Icon";
import React from "react";
import * as moment from "moment";
import {inboxMessageSenderTypes} from "../../../../../../config/constants";

function MessageReadStatusComponent(props) {

    let message = props.message;

    let createdDate = moment(message.created_date).fromNow();
    let readIcon = '';
    let readText = '';

    if(parseInt(message.read_status)) {
        readText = 'Oxundu';
        readIcon = 'checkFull';
    }
    else {
        readText = 'Oxunmayib';
        readIcon = 'checkEmpty';
    }

    return (
        <div className="Influencer-inbox-message-person-comments__details">
            <span className="Influencer-inbox-message-person-comments__date">{createdDate}</span>
            {
                message.sender == inboxMessageSenderTypes.channel
                &&
                <div className="Influencer-inbox-message-person-comments__status">
                    <IconList icon={readIcon}/>
                    <span>{readText}</span>
                </div>
            }
        </div>
    );
}

export default MessageReadStatusComponent;
