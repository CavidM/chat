import IconList from "../../../../../../../components/Icon/Icon";
import React from "react";

function PlainTextComponent(props) {

    return (
            <React.Fragment>

                <div className="Influencer-inbox-message-person-comments__item">
                    <div className="Influencer-inbox-message-person-comments__content">
                        {props.message.content}
                    </div>
                </div>
            </React.Fragment>
    );
}

export default PlainTextComponent;
