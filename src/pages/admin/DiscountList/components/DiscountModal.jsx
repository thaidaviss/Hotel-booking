import { DatePicker, Form, Input, InputNumber, Modal } from 'antd';
import React, { useEffect } from 'react';
import './DiscountModal.scss';


const dateFormat = 'DD/MM/YYYY';

const DiscountModal = ({
  isShowDiscountModal,
  setIsShowDiscountModal,
  modifyDiscountData,
  handleSubmitForm,
}) => {
  console.log("🚀 ~ file: DiscountModal.jsx ~ line 15 ~  modifyDiscountData",  modifyDiscountData)
  const [modifyDiscountForm] = Form.useForm();


  useEffect(() => {
    if (isShowDiscountModal) {
      modifyDiscountForm.resetFields();
    }
  }, [isShowDiscountModal,modifyDiscountForm]);

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
        initialValues={modifyDiscountData}
        onFinish={(values) => handleSubmitForm(values)}
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
          rules={[
            { required: true, message: "Please input your discount value!" },
          ]}
        >
          <InputNumber 
            style={{ width: "100%" }}
            formatter={value => `% ${value}`}
            min={0} max={90} 
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default DiscountModal;