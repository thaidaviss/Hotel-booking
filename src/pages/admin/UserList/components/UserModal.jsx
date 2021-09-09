import { Modal, Form, Input, Select, InputNumber, DatePicker } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './UserModal.scss';
import moment from 'moment';


const dateFormat = 'DD/MM/YYYY';


const UserModal = ({
  isShowUserModal,
  setIsShowUserModal,
  modifyUserData,
}) => {
  // console.log("🚀 ~ file: UserModal.jsx ~ line 13 ~  modifyUserData",  modifyUserData)
  const [modifyUserForm] = Form.useForm();
  const dispatch = useDispatch();



  useEffect(() => {
    if (isShowUserModal) {
      modifyUserForm.resetFields();
    }
  }, [isShowUserModal]);

  return (
    <Modal
      title={isShowUserModal === "create" ? "Create User" : "Edit User"}
      visible={!!isShowUserModal}
      onOk={() => modifyUserForm.submit()}
      onCancel={() => setIsShowUserModal("")}
    >
      <Form
        form={modifyUserForm}
        name="modify-user"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{...modifyUserData,birthday:()=>moment(modifyUserData.birthday, dateFormat)}}
        onFinish={(values) => console.log(values)}
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please input username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input age of user!" }]}
          >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please input user gender!" }]}
        >
          <Select placeholder="Please select user gender!">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input user address!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Day of birth"
          name="birthday"
          rules={[{ required: true, message: "Please input user birthday!" }]}
        
        >    
        <DatePicker format={dateFormat} style={{ width: "100%" }} />
         
        </Form.Item>
    
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please input user role!" }]}
        >
          <Select placeholder="Please select user role!">
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="staff">Staff</Select.Option>
            <Select.Option value="user">User</Select.Option>
          </Select>
        </Form.Item>
        
      </Form>
    </Modal>
  );
}

export default UserModal;
