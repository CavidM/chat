import {Button} from "antd";
import IconList from "../../../../../../../components/Icon/Icon";
import React from "react";

function PhotoComponent(props) {

    return (
        <React.Fragment>
            <div className="Influencer-inbox-message-person-comments-offer">
                <h4 className="Influencer-inbox-message-person-comments-offer__title">Yeni Fotoğraf teklifi:</h4>
                <div className="media-groups__thumb media-groups__one">
                    <img src={require("../../../../../../../assets/img/user.jpg")} alt="" />
                </div>

                { props.buttons }

            </div>
        </React.Fragment>
    );
}

export default PhotoComponent;
