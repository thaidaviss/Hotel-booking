import { Modal, Form, Input, Select, InputNumber, DatePicker } from 'antd';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './DiscountModal.scss';

const dateFormat = 'DD/MM/YYYY';

const DiscountModal = ({
  isShowDiscountModal,
  setIsShowDiscountModal,
  modifyDiscountData,
}) => {
  const [modifyDiscountForm] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isShowDiscountModal) {
      modifyDiscountForm.resetFields();
    }
  }, [isShowDiscountModal]);

  return (
    <Modal
      title={isShowDiscountModal === "create" ? "Create Discount" : "Edit Discount"}
      visible={!!isShowDiscountModal}
      onOk={() => modifyDiscountForm.submit()}
      onCancel={() => setIsShowDiscountModal("")}
    >
      <Form
        form={modifyDiscountForm}
        name="modify-discount"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{
          ...modifyDiscountData, 
          start: () => moment(modifyDiscountData.start, dateFormat),
          end: () => moment(modifyDiscountData.end, dateFormat)
        }}
        onFinish={(values) => console.log(values)}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name of discount!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Start Date"
          name="start"
          rules={[{ required: true, message: "Please input the start date of discount!" }]}
          >
          <DatePicker format={dateFormat} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="End Date"
          name="end"
          rules={[{ required: true, message: "Please input the end date of discount!" }]}
          >
          <DatePicker format={dateFormat} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Value"
          name="value"
          rules={[{ required: true, message: "Please input your value discount!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default DiscountModal;
