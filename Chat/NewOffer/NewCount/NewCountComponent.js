import {Button, Input, Popover, Tooltip} from "antd";
import React from "react";
import NewCountForm from "./NewCountForm";
import { connect } from 'react-redux';

function  NewCountComponent(props) {
    return (
        <Popover
            content={
                <div className="Influencer-inbox-message-footer-popover__content">
                  <span onClick={props.hide} className="Influencer-inbox-message-footer-popover__close">
                    <i className="icon icon-x"></i>
                  </span>
                    <div className="Influencer-inbox-message-footer-popover__body">
                        <h4 className="Influencer-inbox-message-footer-popover__title">Yeni paylasim sayi teklif et</h4>

                        <NewCountForm {...props}/>

                    </div>
                    <div className="Influencer-inbox-message-footer-popover__footer">
                        <div className="Influencer-inbox-message-footer-popover__note">
                            <span className="red">*</span>
                            Yeni paylaşım sayını buradan teklif verebilirsiniz.
                        </div>
                    </div>
                </div>
            }
            title={false}
            trigger="click"
            visible={props.visible}
            onVisibleChange={props.handleVisibleChange}
            overlayClassName={"Popover Popover--arrow Influencer-inbox-message-footer-popover"}
        >
            <Tooltip placement="top" title={ <span>Set Share Count</span>}>
                <Button className="button--sample">
                    <i className="icon icon-edit"></i>
                </Button>
            </Tooltip>
        </Popover>
    );
}

export default connect(null,null)(NewCountComponent);
