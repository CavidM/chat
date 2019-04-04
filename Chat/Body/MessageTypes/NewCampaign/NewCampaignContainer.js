import React from 'react';
import NewCampaignComponent from "./NewCampaignComponent";

class NewCampaignContainer extends React.Component
{
    render() {
        return (
            <NewCampaignComponent {...this.props}/>
        );
    }
}

export default NewCampaignContainer;
