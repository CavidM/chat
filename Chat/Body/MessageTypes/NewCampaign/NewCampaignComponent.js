import {Button} from "antd";
import IconList from "../../../../../../../components/Icon/Icon";
import React from "react";

function NewCampaignComponent({position}) {

    return (
        <div className={`Influencer-inbox-message-person Influencer-inbox-message-person--${position}`}>
            <div className="Influencer-inbox-message-person__avatar">
                <img src={require("../../../../../../../assets/img/user.jpg")} alt="" />
            </div>
            <div className="Influencer-inbox-message-person-comments">
                <div className="Influencer-inbox-message-person-comments__text">
                    <div className="Influencer-inbox-message-person-comments__item">
                        <div className="Influencer-inbox-message-person-comments__content Influencer-inbox-message-person-comments-offer__media">
                            <h4 className="Influencer-inbox-message-person-comments-offer__title">Kampanya Açıklaması:</h4>
                            <div className="Influencer-inbox-message-person-comments-offer__text">Video blogger E-Pul tətbiqinin texniki incələmə videosunu çəkəcək. Mikro influencerlər isə tətbiqi yükləyərək real təcrübə və təəssüratlarını bölüşəcəklər.</div>
                        </div>
                    </div>
                    <div className="Influencer-inbox-message-person-comments__item">
                        <div className="Influencer-inbox-message-person-comments__content Influencer-inbox-message-person-comments-offer__media">
                            <h4 className="Influencer-inbox-message-person-comments-offer__title">Kampanya Resimleri:</h4>
                            <div className="media-groups">
                                <div className="media-groups__thumb">
                                    <img src={require("../../../../../../../assets/img/user.jpg")} alt="" />
                                </div>
                                <div className="media-groups__thumb">
                                    <img src={require("../../../../../../../assets/img/user.jpg")} alt="" />
                                </div>
                                <div className="media-groups__thumb">
                                    <img src={require("../../../../../../../assets/img/user.jpg")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Influencer-inbox-message-person-comments-offer">
                        <h4 className="Influencer-inbox-message-person-comments-offer__title">Kampanyayı onayla:</h4>
                        <div className="button-groups">
                            <Button className="button button--line">Iptal et</Button>
                            <Button className="button">Kabul et</Button>
                        </div>
                    </div>
                </div>
                <div className="Influencer-inbox-message-person-comments__details">
                    <span className="Influencer-inbox-message-person-comments__date">2 saat once</span>
                    <div className="Influencer-inbox-message-person-comments__status">
                        <IconList icon={'checkFull'}/>
                        <span>Oxundu</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewCampaignComponent;
