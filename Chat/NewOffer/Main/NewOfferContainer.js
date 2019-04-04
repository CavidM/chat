import React from 'react';
import NewOfferComponent from "./NewOfferComponent";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {
    sendMessage,
    getMessages,
    setNewMessageLoader
} from "../../redux/chatAction";
import {withRouter} from "react-router-dom";
import {inboxLoadMessageDispatchers} from "../../../../../../config/constants";
import ChatComponent from "../../Main/ChatComponent";

class NewOfferContainer extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            messageText: '',
            visible: false,
            visible1: false,
            visible3: false,
        };

        let {
            channel_id,
            campaign_activity_id
        }
            = this.props.match.params;

        this.channel_id = channel_id;
        this.campaign_activity_id = campaign_activity_id;
    }

    handleMessageChange = (event) => {
        this.setState({
            messageText: event.target.value
        });
    }

    handleMessageSubmit = () => {

        if(this.state.messageText.length === 0) {
            return false;
        }

        this.sendMessage({
            content: this.state.messageText
        });

        this.setState({
            messageText: ''
        });
    }

    sendMessage = (message) => {

        this.props.setNewMessageLoader({
            newMessage: true
        }, inboxLoadMessageDispatchers.sendMessage);

        this.props.sendMessage(
            this.channel_id,
            this.campaign_activity_id,
            message
        )
            .then((res) => {
                this.props.getMessages(
                    this.channel_id,
                    this.campaign_activity_id,
                    {
                        offset: 0,
                        limit: 10
                    },
                    inboxLoadMessageDispatchers.sendMessage
                );
            });

        this.hide();
    }

    handleKeyDown = () => {
        this.handleMessageSubmit();
    }

    hide = () => {
        this.setState({
            visible: false,
            visible1: false,
            visible3: false,
        });
    }

    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }

    handleVisibleChange1 = (visible1) => {
        this.setState({ visible1 });
    }

    handleVisibleChange3 = (visible3) => {
        this.setState({ visible3 });
    }

    render() {
        return (
            <NewOfferComponent
                {...this.props}
                handleMessageChange={this.handleMessageChange}
                handleMessageSubmit={this.handleMessageSubmit}
                messageText={this.state.messageText}
                handleKeyDown={this.handleKeyDown}
                sendMessage={this.sendMessage}
                visible={this.state.visible}
                visible1={this.state.visible1}
                visible3={this.state.visible3}
                hide={this.hide}
                handleVisibleChange={this.handleVisibleChange}
                handleVisibleChange1={this.handleVisibleChange1}
                handleVisibleChange3={this.handleVisibleChange3}
            />
        );
    }
}

const mapD = (dispatch) => {
    return bindActionCreators({
        sendMessage,
        getMessages,
        setNewMessageLoader
    }, dispatch);
}

const mapS = (state) => {
    return {
        inbox: state.chat
    }
}

export default withRouter(connect(mapS, mapD)(NewOfferContainer));
