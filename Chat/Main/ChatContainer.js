import React, { Component } from "react";
import { Input, Tooltip, Button, Popover } from "antd";
import {Scrollbars} from "react-custom-scrollbars";
import IconList from "../../../../../components/Icon/Icon";
import ChatComponent from "./ChatComponent";
const count = <span>Set Share Count</span>;
const { TextArea } = Input;
import { connect } from 'react-redux';

class ChatContainer extends Component
{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

  render() {
    return (
        <ChatComponent/>
    );
  }
}

const mapS = (state) => {
    return {
        message: state.chat
    }
}

export default connect(mapS, null)(ChatContainer);
