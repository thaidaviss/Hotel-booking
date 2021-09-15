import { Button, DatePicker, Form, Input, InputNumber, Row, Select, Space } from "antd";
import { ROUTER_URL } from "constants/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createUserAction, editUserAction, getUserDetailAction } from "redux/actions";
import history from "utils/history";
import "./AddEditUser.scss";


const dateFormat = 'DD/MM/YYYY';

const AddEditUserPage = (props) => {
  const [uploadImages, setUploadImages] = useState([]);
  const [modifyUserForm] = Form.useForm();

  const { userDetail } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params.id;

  const initialValues = userId ? userDetail.data : {};

  useEffect(() => {
    if (userId) {
      dispatch(getUserDetailAction({ id: userId }));
    }
  }, [userId]);

  useEffect(() => {
    if (userDetail.data.id) {
      modifyUserForm.resetFields();
      // setUploadImages([...userDetail.data.avatar]);
    }
  }, [userDetail.data]);

  function handleSubmitForm(values) {
    // values.birthday = moment(values.birthday).format("DD/MM/YYYY");
    if (userId) {
      dispatch(
        editUserAction({
          id: userId,
          data: values,
        })
      );
    } else {
      dispatch(
        createUserAction({
          data: values,
        })
      );
    }
  }

  // function renderUserImages() {
  //   return uploadImages.map((imageItem, imageIndex) => (
  //     <Col span={6}>
  //       <Image
  //         onClick={(e) => {
  //           e.preventDefault();
  //           e.stopPropagation();
  //         }}
  //         key={`image-${imageIndex}`}
  //         width="100%"
  //         src={imageItem}
  //       />
  //     </Col>
  //   ))
  // }

  return (
    <div className="user-form-container">
      <Row justify="space-between" className="user-form-title">
        <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          {userId ? "Edit User" : "Create User"}
        </h3>
        <Space>
          <Button
            onClick={() =>
              history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.USERS}`)
            }
          >
            Cancel
          </Button>

          <Button
            type="primary"
            onClick={() => modifyUserForm.submit()}
          >
            Save
          </Button>
        </Space>
      </Row>

      <div className="user-form-content">
        <Form
          form={modifyUserForm}
          name="modify-user"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={initialValues}
          onFinish={(values) => handleSubmitForm(values)}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please input full name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Avatar"
            name="avatar"
            rules={[{ required: true, message: "Please input user avatar!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="User Name"
            name="username"
            rules={[{ required: true, message: "Please input username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input user email!" },
              { type: "email", message: "Please input the valid email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter a valid password!" },
              { min: 6, message: "Must be a minimum of 6 characters" },
            ]}
          >
            <Input.Password style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please input user phone number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            // rules={[{ required: true, message: "Please input age of user!" }]}
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
            // rules={[{ required: true, message: "Please input user address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Birthday"
            name="birthday"
          >
            <DatePicker
              format={dateFormat}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please input user status!" }]}
          >
            <Select placeholder="Please select user status!">
              <Select.Option value="active">Active</Select.Option>
              <Select.Option value="inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please input user role!" }]}
          >
            <Select placeholder="Please select user role!">
              <Select.Option value="admin">Admin</Select.Option>
              {/* <Select.Option value="staff">Staff</Select.Option> */}
              <Select.Option value="user">User</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddEditUserPage;
