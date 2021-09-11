import { Button, Select, Form, Input, InputNumber, Row, Space } from "antd";
import { ROUTER_URL } from "constants/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createTypeAction, editTypeAction, getTypeDetailAction, getTypeListAction } from "redux/actions";
import history from "utils/history";
import "./AddEditRoom.scss";

const { TextArea } = Input;

const AddEditTypePage = (props) => {
  const [modifyRoomForm] = Form.useForm();
  
  const { typeDetail } = useSelector((state) => state.typeReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const typeRoomId = params.id;

  const initialValues = typeRoomId ? typeDetail.data : {};

  useEffect(() => {
    if (typeRoomId) {
      dispatch(getTypeDetailAction({ id: typeRoomId }));
    }
  }, [typeRoomId]);

  useEffect(() => {
    if (typeDetail.data.id) {
      modifyRoomForm.resetFields();
    }
  }, [typeDetail.data.id]);

  function handleSubmitForm(values) {
    if (typeRoomId) {
      dispatch(editTypeAction({
        id: typeRoomId,
        data: values,
      }));
    } else {
      dispatch(createTypeAction({
        data: values,
      }));
    }
  };

  return (
    <div>
      <Row justify="space-between" className="room-form-title">
        <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          {typeRoomId ? "Edit Room Type" : "Create Room Type"}
        </h3>
        <Space>
          <Button onClick={() => history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.ROOM_TYPES}`)}>
            Cancel
          </Button>

          <Button 
            type="primary"
            loading={typeDetail.load}
            onClick={() => modifyRoomForm.submit()}
          >
            Save
          </Button>
        </Space>
      </Row>

      <div className="room-form-content">
        <Form
          form={modifyRoomForm}
          name="modify-room"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={initialValues}
          onFinish={(values) => handleSubmitForm(values)}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name of type room!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input description of room!" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Type of View"
            name="view"
            rules={[{ required: true, message: "Please input type of view!" }]}
          >
            <Select placeholder="Please select type of view">
              <Select.Option value="lake">Lake View</Select.Option>
              <Select.Option value="mountain">Mountain View</Select.Option>
              <Select.Option value="garden">Garden View</Select.Option>
              <Select.Option value="front">Front View</Select.Option>
              <Select.Option value="top">Top View</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Max Guest"
            name="maxGuest"
            rules={[
              { required: true, message: "Please input the number of room!" },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input the price of room!" },
            ]}
          >
            <InputNumber 
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddEditTypePage;
