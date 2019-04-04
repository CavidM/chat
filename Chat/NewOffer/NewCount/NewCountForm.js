import React from 'react';
import {Form, Button, InputNumber } from "antd";

function NewCountForm(props) {

    const handleSubmit = (e) => {

        e.preventDefault();

        props.form.validateFields((err, values) => {

            if (!err) {

                props.sendMessage({
                    offer_activity_count: values.count
                });

                props.form.resetFields();
            }
        });
    }

    const { getFieldDecorator } = props.form;

    return (
        <Form onSubmit={handleSubmit} layout='horizontal'>

            <Form.Item>
                {getFieldDecorator('count', {
                    rules: [
                        {
                            required: true,
                            min: 1,
                            max: 100,
                            type: "number",
                            message: 'count must be between 1 and 100'
                        }
                    ],
                })(
                    <InputNumber
                        className="input"
                    />
                )}
            </Form.Item>

            <Form.Item>
                <Button
                    className="button button--line button--block"
                    htmlType="submit"
                >
                    Teklif et
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Form.create()(NewCountForm);
