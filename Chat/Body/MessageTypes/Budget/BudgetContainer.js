import React from 'react';
import BudgetComponent from "./BudgetComponent";

class BudgetContainer extends React.Component
{
    render() {
        return (
            <BudgetComponent {...this.props}/>
        );
    }
}

export default BudgetContainer;
