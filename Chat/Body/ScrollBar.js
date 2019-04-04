import React from 'react';
import {Scrollbars} from "react-custom-scrollbars";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMessages, setNewMessageLoader} from "../redux/chatAction";
import {inboxLoadMessageDispatchers} from "../../../../../config/constants";

const ScrollBar = (WrappedComponent) => {

    class ScrollBarClass extends React.Component {

        constructor(props) {
            super(props);

            this.scrollBar = React.createRef();

            let {
                channel_id,
                campaign_activity_id
            }
                = this.props.match.params;

            this.channelId = channel_id;
            this.campaign_activity_id = campaign_activity_id;

            //scroll before load data
            this.prevScrollHeight = 0;
        }

        componentDidUpdate() {

            //move scrollBar depend on new data and action
            switch (this.props.dispatcher) {
                case inboxLoadMessageDispatchers.scrollTop: {

                    //don't scroll if loader is show
                    if(this.props.loader.newMessage || this.props.loader.scrollTop) {
                        return true;
                    }

                    //scroll to last position when user load prev messages
                    this.scrollBar.current.scrollTop(this.scrollBar.current.getScrollHeight() - this.prevScrollHeight);

                    break;
                }
                case inboxLoadMessageDispatchers.sendMessage:
                case inboxLoadMessageDispatchers.chatBodyContainerDidMount: {

                    //scroll to bottom for view new messages
                    this.scrollBar.current.scrollToBottom();

                    break;
                }
                default: {
                    break;
                }
            }
        }

        componentDidMount() {
            this.prevScrollHeight = this.scrollBar.current.getScrollHeight();
        }

        onScrollStop = (e) => {

            if(this.scrollBar.current.viewScrollTop < 1) {

                this.props.setNewMessageLoader({
                    scrollTop: true
                }, inboxLoadMessageDispatchers.scrollTop);

                this.prevScrollHeight = this.scrollBar.current.getScrollHeight();

                this.props.getMessages(
                    this.channelId,
                    this.campaign_activity_id,
                    {
                        offset: this.props.params.offset + 10,
                        limit: this.props.params.limit,
                    },
                    inboxLoadMessageDispatchers.scrollTop
                );
            }
        }

        render() {

            return (
                <Scrollbars
                    ref={this.scrollBar}
                    onScrollStop={this.onScrollStop}
                    autoHide={false} className="Influencer-inbox-message-body__scroll"
                >
                    <WrappedComponent {...this.props}/>
                </Scrollbars>
            );
        }
    }

    const mapS = state => {
        return {
            loader: state.chat.loader,
            params: state.chat.params,
            dispatcher: state.chat.dispatcher
        }
    }

    const mapD = dispatch => {
        return bindActionCreators({
            getMessages,
            setNewMessageLoader
        }, dispatch);
    }

    return connect(mapS, mapD)(ScrollBarClass);

}

export default ScrollBar;
