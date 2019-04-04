import {Button, Input, Popover, Tabs, Tooltip, Upload} from "antd";
import React from "react";
import NewFileForm from "../NewFile/NewFileForm";
const { TextArea } = Input;
const TabPane = Tabs.TabPane;

function NewContentComponent(props) {

    return (
        <Popover
            content={
                <div className="Influencer-inbox-message-footer-popover__content">
                  <span onClick={props.hide} className="Influencer-inbox-message-footer-popover__close">
                    <i className="icon icon-x"></i>
                  </span>
                    <div className="Influencer-inbox-message-footer-popover__body">
                        <h4 className="Influencer-inbox-message-footer-popover__title">Kontent teklif et:</h4>
                        <TextArea
                            placeholder="Enter text here"
                            rows={4}
                            className="textarea mt10"
                            onChange={props.onTextChange}
                        />
                        <Tabs defaultActiveKey="link" onChange={props.onTabChange} type="card" className="Dashboard-settings-tabs Tabs Tabs--half">
                            <TabPane tab="Link" key="link">
                                <Input
                                    placeholder="Link paste here"
                                    className="input"
                                    onChange={props.onLinkChange}
                                />
                            </TabPane>
                            <TabPane tab="File" key="file">

                                <NewFileForm {...props}/>

                            </TabPane>
                        </Tabs>
                        <Button className="button button--line button--block mt20">Teklif et</Button>
                    </div>
                </div>
            }
            title={false}
            trigger="click"
            visible={props.visible3}
            onVisibleChange={props.handleVisibleChange3}
            overlayClassName={"Popover Popover--arrow Popover--middle Influencer-inbox-message-footer-popover"}
        >
            <Tooltip placement="top" title={'Send content'}>
                <Button className="button--sample">
                    <i className="icon icon-clip"></i>
                </Button>
            </Tooltip>
        </Popover>
    );
}

export default NewContentComponent;
