import React from 'react';
import ActivityCountComponent from "./ActivityCountComponent";

class ActivityCountContainer extends React.Component
{
    render() {
        return (
            <ActivityCountComponent {...this.props} />
        );
    }
}

export default ActivityCountContainer;
