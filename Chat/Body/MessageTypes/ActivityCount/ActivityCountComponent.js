import {Button} from "antd";
import IconList from "../../../../../../../components/Icon/Icon";
import React from "react";

function ActivityCountComponent(props) {

    return (
        <React.Fragment>
            <div className="Influencer-inbox-message-person-comments-offer">
                <h4 className="Influencer-inbox-message-person-comments-offer__title">Yeni Paylaşım Sayı Teklifi:</h4>
                <div className="Influencer-inbox-message-person-comments-offer__content">
                    <i className="icon icon-edit"></i>
                    <span className="Influencer-inbox-message-person-comments-offer__count">
                        {props.message.offer_activity_count} defa
                    </span>
                </div>

                { props.buttons }

            </div>
        </React.Fragment>
    );
}

export default ActivityCountComponent;
