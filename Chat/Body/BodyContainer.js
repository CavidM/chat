import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import NewCampaignContainer from "./MessageTypes/NewCampaign/NewCampaignContainer";
import { getMessages, setMessageReadStatus, reset } from '../redux/chatAction';
import MessageElementContainer from "./MessageElement/MessageElementContainer";
import ScrollBar from './ScrollBar';
import {inboxLoadMessageDispatchers} from "../../../../../config/constants";
import Loader from "./Loader";
import { isInViewport } from "../../../../../utilities/Dom";

class BodyContainer extends React.Component
{
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        let {
            channel_id,
            campaign_activity_id
        }
        = this.props.match.params;

        let params = this.props.inbox.params;

        this.getMessages(
            channel_id,
            campaign_activity_id,
            params
        );
    }

    getMessages = async (channel_id, campaign_activity_id, params) => {

        await this.props.getMessages(channel_id, campaign_activity_id, {
                offset: params.offset,
                limit: params.limit
            },
            inboxLoadMessageDispatchers.chatBodyContainerDidMount
        );

        setTimeout(() => {

            let searchElemClass = '.Influencer-chatReducer-message-person.Influencer-chatReducer-message-person--left';

            let messageElems = document.querySelectorAll(searchElemClass);

            if(!messageElems.length) {
                return;
            }

            let lastMessage = messageElems[messageElems.length - 1];
            let messageId = lastMessage.dataset.id;


            if(isInViewport(lastMessage) && parseInt(lastMessage.dataset.readStatus) === 0) {

                this.props.setMessageReadStatus(
                    channel_id,
                    campaign_activity_id,
                    messageId
                );
            }

        }, 1000);
    };

    messageView = (messages) => messages.map((message) => {

        return (<MessageElementContainer message={message} key={message.id}/>)

    });

    componentWillUnmount() {
        this.props.reset();
    }

    render() {

        let { messages } = this.props.inbox;

        return (
            <React.Fragment>

                {/*<NewCampaignContainer position={"left"}/>*/}

                {
                    this.props.inbox.loader.scrollTop && <Loader/>
                }

                { this.messageView(messages) }

                {
                    this.props.inbox.loader.newMessage && <Loader/>
                }

            </React.Fragment>
        );
    }
}

const mapD = {
    getMessages,
    setMessageReadStatus,
    reset
}

const mapS = (state) => {
    return {
        inbox: state.chat
    }
}

export default withRouter(connect(mapS, mapD)(ScrollBar(BodyContainer)));
