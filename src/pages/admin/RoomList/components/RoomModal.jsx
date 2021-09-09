import { Modal, Form, Input, Select, InputNumber } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './RoomModal.scss';

const RoomModal = ({
  isShowRoomModal,
  setIsShowRoomModal,
  locationList,
  modifyRoomData,
}) => {
  const [modifyRoomForm] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isShowRoomModal) {
      modifyRoomForm.resetFields();
    }
  }, [isShowRoomModal]);

  function renderTypeOptions() {
    return locationList.map((locationItem, locationIndex) => (
      <Select.Option value={locationItem.id} key={`location-${locationItem.id}`}>
        {locationItem.name}
      </Select.Option>
    ));
  }

  return (
    <Modal
      title={isShowRoomModal === "create" ? "Create Room" : "Edit Room"}
      visible={!!isShowRoomModal}
      onOk={() => modifyRoomForm.submit()}
      onCancel={() => setIsShowRoomModal("")}
    >
      <Form
        form={modifyRoomForm}
        name="modify-room"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={modifyRoomData}
        onFinish={(values) => console.log(values)}
      >
        <Form.Item
          label="Room"
          name="room"
          rules={[{ required: true, message: "Please input name of room!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Number"
          name="number"
          rules={[{ required: true, message: "Please input the number of room!" }]}
          >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

          <Form.Item
            label="Location"
            name="locationId"
            rules={[{ required: true, message: "Please input your location!" }]}
          >
            <Select placeholder="Please select your location!">
              {renderTypeOptions()}
            </Select>
          </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input your price!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default RoomModal;
