import React from 'react';
import * as moment from 'moment';
import {withRouter} from 'react-router-dom';

import MessageElementComponent from "./MessageElementComponent";
import {inboxMessageOfferStatus, inboxMessageSenderTypes, inboxMessageTypes} from "../../../../../../config/constants";
import PlainTextContainer from "../MessageTypes/PlainText/PlainTextContainer";
import ActivityCountContainer from "../MessageTypes/ActivityCount/ActivityCountContainer";
import BudgetContainer from "../MessageTypes/Budget/BudgetContainer";
import PhotoContainer from "../MessageTypes/Photo/PhotoContainer";
import MessageReadStatusContainer from "../MessageReadStatus/MessageReadStatusContainer";
import MessageReadStatusComponent from "../MessageReadStatus/MessageReadStatusComponent";
import MessageOfferButtonsComponent from "../MessageOfferButtons/MessageOfferButtonsComponent";
import OfferStatus from "../OfferStatus";

/*
    id;
    campaign_activity_id;
    channel_id;
    sender;
    content;
    offer_budget;
    offer_activity_count;
    acceptable;
    accept_reject;
    message_type;
    read_status;
    read_date;
    created_date;
    attachments = [];
*/
class MessageElementContainer extends React.Component
{
    constructor(props) {

        super(props);

        // Object.keys(props.message).forEach(val => {
        //     this[val] = props.message[val];
        // });
    }

    componentDidMount() {

    }



    render() {

        let messageComponent = '';
        let { message } = this.props;

        let messageOfferButtonsComponent = '';

        if(message.sender == inboxMessageSenderTypes.company) {
            messageOfferButtonsComponent = <MessageOfferButtonsComponent message={message}/>;
        }

        switch (parseInt(message.message_type)) {
            case inboxMessageTypes.plainText: {
                messageComponent = (<PlainTextContainer message={message}/>);
                break;
            }
            case inboxMessageTypes.activityCount: {
                messageComponent = (<ActivityCountContainer message={message} buttons={messageOfferButtonsComponent}/>);
                break;
            }
            case inboxMessageTypes.budget: {
                messageComponent = (<BudgetContainer message={message} buttons={messageOfferButtonsComponent}/>);
                break;
            }
            case inboxMessageTypes.file: {
                messageComponent = (<PhotoContainer buttons={messageOfferButtonsComponent}/>);
                break;
            }
            default: {
                break;
            }
        }

        let position = (message.sender == inboxMessageSenderTypes.channel) ? 'right' : 'left';

        let messageProps = {
            position: position,
            disabled: 'disabled',
            userLogo: '',
        }

        let messageReadStatusComponent = <MessageReadStatusComponent message={message}/>;

        switch (parseInt(message.accept_reject)) {
            case inboxMessageOfferStatus.wait: {

                messageProps.disabled = '';
                break;
            }
            default: break;
        }
        
        switch (parseInt(message.sender)) {
            case inboxMessageSenderTypes.channel: {
                messageProps.userLogo = message.channel_logo;
                break;
            }
            case inboxMessageSenderTypes.company: {
                messageProps.userLogo = message.brand_logo;
                break;
            }
            default: {
                break;
            }
        }

        return (
            <React.Fragment>

                <MessageElementComponent
                    message={message}
                    {...messageProps}
                    messageReadStatusComponent={messageReadStatusComponent}
                >
                    { messageComponent }
                </MessageElementComponent>

                <OfferStatus message={message}/>

            </React.Fragment>
        );
    }
}

export default MessageElementContainer;
