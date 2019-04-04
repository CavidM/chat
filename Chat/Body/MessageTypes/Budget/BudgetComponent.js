import {Button} from "antd";
import IconList from "../../../../../../../components/Icon/Icon";
import React from "react";

function BudgetComponent(props) {

    return (
        <React.Fragment>
            <div className="Influencer-inbox-message-person-comments-offer">
                <h4 className="Influencer-inbox-message-person-comments-offer__title">Yeni Bütçe teklifi:</h4>
                <div className="Influencer-inbox-message-person-comments-offer__content">
                    <i className="icon icon-currency-dollar"></i>
                    <span className="Influencer-inbox-message-person-comments-offer__count">{props.message.offer_budget} USD</span>
                </div>

                { props.buttons }

            </div>
        </React.Fragment>
    );
}

export default BudgetComponent;
