import React from 'react';
import NewContentComponent from "./NewContentComponent";

class NewContentContainer extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            activeTab: 'link',
            link: '',
            files: []
        };
    }

    removeFile = (file) => {

        this.setState((state) => {

            const index = state.files.indexOf(file);
            const newFiles = state.files.slice();

            newFiles.splice(index, 1);

            return {
                files: newFiles,
            };
        });
    };

    addFile = (file) => {

        this.setState(state => ({
            files: [
                ...state.files,
                file
            ],
        }));
    };

    onTabChange = (key) => {

        this.setState({
            activeTab: key
        });
    }

    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    onLinkChange = (e) => {
        this.setState({
            link: e.target.value
        });
    };

    render() {
        console.log(this.state);
        return (
            <NewContentComponent
                {...this.props}
                removeFile={this.removeFile}
                addFile={this.addFile}
                onTabChange={this.onTabChange}
                onTextChange={this.onTextChange}
                onLinkChange={this.onLinkChange}
            />
        );
    }

}

export default NewContentContainer;
