import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, InputNumber, Rate, Row, Space, Button } from "antd";
import "./AddEditRoom.scss";
import history from "utils/history";
import { createRoomAction, editRoomAction, getRoomDetailAction, getRoomListAction, getTypeListAction } from "redux/actions";



const AddEditRoomPage = ({ match }) => {
  const [modifyRoomForm] = Form.useForm();

  const roomId = match.params.id;
  const { typeList } = useSelector((state) => state.typeReducer);
  const { roomDetail } = useSelector((state) => state.roomReducer);
  const dispatch = useDispatch();

  const initialValues = roomId ? roomDetail.data : {};

  useEffect(() => {
    dispatch(getTypeListAction());
    dispatch(getRoomListAction());
  }, []);

  useEffect(() => {
    if (roomId) {
      dispatch(getRoomDetailAction({ id: roomId }));
    }
  }, [roomId]);

  useEffect(() => {
    if (roomDetail.data.id) {
      modifyRoomForm.resetFields();
    }
  }, [roomDetail.data.id]);

  function handleSubmitForm(values) {
    if (roomId) {
      dispatch(editRoomAction({
        id: roomId,
        data: values,
      }));
    } else {
      dispatch(createRoomAction({
        data: values,
      }));
    }
  };

  function renderTypeOptions() {
    return typeList.data.map((typeItem, typeIndex) => (
      <Select.Option value={typeItem.id} key={`type-${typeItem.id}`}>
        {typeItem.name}
      </Select.Option>
    ));
  }

  return (
    <div>
      <Row justify="space-between" className="room-form-title">
        <h3>{roomId ? "Edit Room" : "Create Room"}</h3>
        <Space>
          <Button onClick={() => history.push("/admin/rooms")}>Cancel</Button>
          <Button onClick={() => modifyRoomForm.submit()} type="primary">Save</Button>
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
            rules={[{ required: true, message: "Please input code of room!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Type Room"
            name="type"
            rules={[{ required: true, message: "Please input type of room!" }]}
          >
            <Select placeholder="Please select your type room!">
              {renderTypeOptions()}
            </Select>
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input description of room!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input the price of room!" },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
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
            label="Rating"
            name="rating"
          >
            <Rate disabled defaultValue={0} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddEditRoomPage;
