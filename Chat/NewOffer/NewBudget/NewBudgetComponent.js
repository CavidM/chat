import {Button, Input, Popover, Tooltip} from "antd";
import React from "react";
import NewBudgetForm from "./NewBudgetForm";

function  NewBudgetComponent(props) {

    return (
        <Popover
            content={
                <div className="Influencer-inbox-message-footer-popover__content">
                  <span onClick={props.hide} className="Influencer-inbox-message-footer-popover__close">
                    <i className="icon icon-x"></i>
                  </span>
                    <div className="Influencer-inbox-message-footer-popover__body">
                        <h4 className="Influencer-inbox-message-footer-popover__title">Yeni budce teklif et</h4>

                        <NewBudgetForm {...props}/>

                    </div>
                    <div className="Influencer-inbox-message-footer-popover__footer">
                        <div className="Influencer-inbox-message-footer-popover__note">
                            <span className="red">*</span>
                            Eğer brandin verdiği bütçe azsa yeni bütçe teklif edebilirsiniz.
                        </div>
                    </div>
                </div>
            }
            title={false}
            trigger="click"
            visible={props.visible1}
            onVisibleChange={props.handleVisibleChange1}
            overlayClassName={"Popover Popover--arrow Influencer-inbox-message-footer-popover"}
        >
            <Tooltip placement="top" title={ <span>Set Share Count</span>}>
                <Button className="button--sample">
                    <i className="icon icon-currency-dollar"></i>
                </Button>
            </Tooltip>
        </Popover>
    );
}

export default NewBudgetComponent;
