import { Modal, Form, Input, Upload, message, Rate, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import './ReviewModal.scss';


const { TextArea } = Input;
const { Dragger } = Upload;

const ReviewModal = ({ isShowReviewModal ,setIsShowReviewModal }) => {
  const [reviewForm] = Form.useForm();
  const [reviewData, setReviewData] = useState({});

  useEffect(() => {
    if (isShowReviewModal) {
      reviewForm.resetFields();
    }
  }, [isShowReviewModal]);

  return (
    <Modal
      title={isShowReviewModal === true && "Write your review here"}
      visible={!!isShowReviewModal}
      width={900}
      onOk={() => reviewForm.submit()}
      onCancel={() => setIsShowReviewModal(false)}
    >
      <Form
        className="review-modal"
        form={reviewForm}
        name="create-review"
        labelCol={{ span: 24 }}
        initialValues={reviewData}
        onFinish={(values) => console.log(values)}
      >
        <Form.Item
          label="Overall Rating"
          name="overall"
          rules={[{ required: true, message: "Please input overall rating!" }]}
        >
          <Rate allowHalf />
        </Form.Item>

        <Form.Item
          label="Title of your review"
          name="title"
          rules={[
            { required: true, message: "Please input your title review!" },
          ]}
        >
          <Input placeholder="Enter your title review here ..." />
        </Form.Item>

        <Form.Item
          label="Details of your review"
          name="detail"
          rules={[
            { required: true, message: "Please input your detail review!" },
          ]}
        >
          <TextArea
            rows={5}
            placeholder="Tell people about your experience: your room, location, ..."
          />
        </Form.Item>

        <Row>
          <Col span={6}>
            <Form.Item
              label="Service"
              name="serviceRating"
              rules={[
                { required: true, message: "Please input service rating!" },
              ]}
            >
              <Rate allowHalf />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="Room"
              name="roomRating"
              rules={[{ required: true, message: "Please input room rating!" }]}
            >
              <Rate allowHalf />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="Cleanliness"
              name="cleanlinessRating"
              rules={[
                { required: true, message: "Please input cleanliness rating!" },
              ]}
            >
              <Rate allowHalf />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="Food"
              name="foodRating"
              rules={[{ required: true, message: "Please input food rating!" }]}
            >
              <Rate allowHalf />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Do You have photos to share? (Optional)"
          name="photoReview"
        >
          <Dragger maxCount={4}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Drag or drop to your image assets or browse
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Maximum 4 photos.
            </p>
          </Dragger>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ReviewModal;
