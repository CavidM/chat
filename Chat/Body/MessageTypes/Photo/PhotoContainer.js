import React from 'react';
import PhotoComponent from "./PhotoComponent";

class PhotoContainer extends React.Component
{
    render() {
        return (
            <PhotoComponent {...this.props}/>
        );
    }
}

export default PhotoContainer;
