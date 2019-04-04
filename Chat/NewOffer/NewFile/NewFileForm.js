import React from 'react';
import {Button, Upload} from "antd";
import {allowedFileTypes} from "../../../../../../config/constants";

const fileProps = {
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange({ file, fileList }) {
    },
};

class NewFileForm extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        }
    }

    /*handleUpload = () => {
        const {fileList} = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });

        for (var pair of formData.entries()) {
            console.log(pair[1]);
        }
        this.setState({
            uploading: true,
        });
    }*/

    render() {

        const { uploading } = this.state;
        const props = {
            onRemove: (file) => {

                this.props.removeFile(file);
            },
            beforeUpload: (file) => {
                console.log(file);

                if(!allowedFileTypes.includes(file.type)) {

                    this.setState({
                        error: 'Please upload only image, video and pdf type'
                    });

                    return;
                }

                if(file.size / 1024 / 1024 > 5) {

                    this.setState({
                        error: 'Please upload files less than 5MB'
                    });

                    return;
                }

                this.props.addFile(file);

                this.setState({
                    error: ''
                });

                return false;
            },
            multiple: true,
        };

        return(
            <React.Fragment>
                <Upload {...props}>
                    <Button className="button button--line button--block button--upload mt10">
                        Dosya ekle…
                        <div className="button-icon">
                            <i className="icon icon-upload"></i>
                        </div>
                    </Button>
                </Upload>
                <span className={'error'}>{this.state.error}</span>
            </React.Fragment>
        )
    }
}

export default NewFileForm;
