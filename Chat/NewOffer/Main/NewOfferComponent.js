import {Button, Input, Popover, Tooltip, Upload} from "antd";
import React from "react";
const { TextArea } = Input;
import Keypress from "react-keypress";
import NewCountComponent from "../NewCount/NewCountComponent";
import NewBudgetComponent from "../NewBudget/NewBudgetComponent";
import NewContentContainer from "../NewContent/NewContentContainer";

function NewOfferComponent(props) {

    return (
        <div className="Influencer-inbox-message-footer">
            <div className="Influencer-inbox-message-footer__left">
                <TextArea
                    value={props.messageText}
                    onInput={props.handleMessageChange}
                    onKeyPress={Keypress("ctrl enter", props.handleKeyDown)}
                    placeholder="Enter Your Message"
                    autosize={{ minRows: 1, maxRows: 4 }}
                    className="input input--sample resize Influencer-inbox-message-footer__input"
                />
            </div>
            <div className="Influencer-inbox-message-footer__right">

                <NewCountComponent {...props}/>

                <NewBudgetComponent {...props}/>

                <NewContentContainer {...props}/>

                <div className="vertical-divider"></div>
                <Button onClick={props.handleMessageSubmit} type="button" htmlType="submit" className="Influencer-inbox-message-footer__submit button--sample">
                    Sent Message
                </Button>
            </div>
        </div>
    );
}

export default NewOfferComponent;
