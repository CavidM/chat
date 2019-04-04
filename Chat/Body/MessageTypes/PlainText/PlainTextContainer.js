import React from 'react';
import PlainTextComponent from "./PlainTextComponent";

class PlainTextContainer extends React.Component
{
    render() {
        return (
            <PlainTextComponent {...this.props}/>
        );
    }
}

export default PlainTextContainer;
