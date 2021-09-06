import { Form, Button, Row, Input } from "antd";
import React from "react";

const ReviewPage = () => {
  return (
    <div className="review">
      <div className="review__container">
        <h3>Write your review here</h3>
        <Form
          form={modifyRoomForm}
          name="modify-review"
          // labelCol={{ span: 4 }}
          // wrapperCol={{ span: 20 }}
          initialValues={{}}
          onFinish={(values) => console.log(values)}
        >
          <Form.Item
            label="Overall Rating"
            name="overall"
            rules={[{ required: true, message: "Please input your rating!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Title of your review"
            name="title"
            rules={[
              { required: true, message: "Please input your title!" },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Details of your review"
            name="detail"
            rules={[{ required: true, message: "Please input your idea!" }]}
          >
            <Select placeholder="Please select your location!">
              
            </Select>
          </Form.Item>

          <Form.Item
            label="Your photos"
            name="photos"
            rules={[{ required: true, message: "Please input your photos!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Row>
            <Button type="primary">Submit Your Review</Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ReviewPage;
