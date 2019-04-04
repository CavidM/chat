import {Button} from "antd";
import React, {useState} from "react";
import { connect } from 'react-redux';
import { setOfferStatus, getMessages } from "../../redux/chatAction";
import {inboxLoadMessageDispatchers, inboxMessageOfferStatus} from "../../../../../../config/constants";

function MessageOfferButtonsComponent(props) {

    const [disabled, setDisableButtons] = useState(false);

    const setOfferStatus = (status) => {

        setDisableButtons(true);

        if(props.message.accept_reject != 0) {
            return;
        }

        props.setOfferStatus(
            props.message.channel_id,
            props.message.campaign_activity_id,
            props.message.id,
            status
        ).then(res => {

            let {
                offset,
                limit
            } = props.inbox.params;

            props.getMessages(props.message.channel_id, props.message.campaign_activity_id, {
                    offset: 0,
                    limit: offset + limit
                },
                inboxLoadMessageDispatchers.changeOfferStatus
            );
        });
    }

    return (
        <div className="button-groups">

            <Button
                className="button button--line"
                disabled={disabled}
                onClick={
                    () => setOfferStatus(inboxMessageOfferStatus.reject)
                }
            >
                Iptal et
            </Button>

            <Button
                className="button"
                disabled={disabled}
                onClick={
                    () => setOfferStatus(inboxMessageOfferStatus.accept)
                }
            >
                Kabul et
            </Button>
        </div>
    );
}

const mapS = state => {
    return {
        inbox: state.chat
    }
}

const mapD = {

    setOfferStatus,
    getMessages
}

export default connect(mapS, mapD)(MessageOfferButtonsComponent);
