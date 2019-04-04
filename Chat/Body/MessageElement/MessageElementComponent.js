import React from "react";
import IconList from "../../../../../../components/Icon/Icon";

function MessageElementComponent(props) {

    return (
        <div
            className={`Influencer-inbox-message-person n Influencer-inbox-message-person--${props.position}`}
            data-id={props.message.id}
            data-read-status={props.message.read_status}
        >
            <div className="Influencer-inbox-message-person__avatar">
                <img src={props.userLogo} alt="" />
            </div>
            <div className={`Influencer-inbox-message-person-comments ${props.disabled}`}>

                <div className="Influencer-inbox-message-person-comments__text">
                    {props.children}
                </div>

                {props.messageReadStatusComponent}
            </div>
        </div>
    );
}

export default MessageElementComponent;
