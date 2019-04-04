import React from 'react';
import {Form, InputNumber, Button} from "antd";

function NewBudgetForm(props) {

    const handleSubmit = (e) => {

        e.preventDefault();

        props.form.validateFields((err, values) => {

            if (!err) {

                props.sendMessage({
                    offer_budget: values.budget
                });

                props.form.resetFields();
            }
        });
    }

    const { getFieldDecorator } = props.form;

    return (
        <Form onSubmit={handleSubmit} layout='horizontal'>
            <div className="input-group">

                <Form.Item>
                    {getFieldDecorator('budget', {
                        rules: [
                            {
                                required: true,
                                min: 1,
                                max: 10000,
                                type: "number",
                                message: 'budget must be between 1 and 10000'
                            }
                        ],
                    })(
                        <InputNumber
                            className="input"
                        />
                    )}
                </Form.Item>

                <div className="input-group__text">azn</div>
            </div>
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

export default Form.create()(NewBudgetForm);
