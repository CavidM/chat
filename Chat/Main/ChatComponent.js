
import IconList from "../../../../../components/Icon/Icon";
import {Button, Input, Popover, Tooltip, Upload} from "antd";
import React from "react";
import BodyContainer from "../Body/BodyContainer";
import NewOfferContainer from "../NewOffer/Main/NewOfferContainer";
const { TextArea } = Input;


function ChatComponent(props)
{
        return (
            <div className="Influencer-inbox-message">

                <div className="Influencer-inbox-message-body">

                    <BodyContainer/>

                </div>

                <NewOfferContainer {...props}/>

            </div>
        );
}

export default ChatComponent;
