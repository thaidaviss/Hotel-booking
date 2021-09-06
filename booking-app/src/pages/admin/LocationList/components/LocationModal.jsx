import {
  Form, Input, Modal
} from "antd";
import { useEffect } from 'react';

function ModifyLocationModal({
  isShowLocationModal,
  setIsShowLocationModal,
  modifyLocationData,
}) {
  const [modifyLocationForm] = Form.useForm();

  useEffect(() => {
    if (isShowLocationModal) {
      modifyLocationForm.resetFields();
    }
  }, [isShowLocationModal]);

  return (
    <Modal
      title={isShowLocationModal === "create" ? "Create Location" : "Edit Location"}
      visible={!!isShowLocationModal}
      onOk={() => modifyLocationForm.submit()}
      onCancel={() => setIsShowLocationModal('')}
    >
      <Form
        form={modifyLocationForm}
        name="modify-location"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={modifyLocationData}
        onFinish={(values) => console.log(values)}
      >
        <Form.Item
          label="Location"
          name="name"
          rules={[{ required: true, message: "Please input new location!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModifyLocationModal;
