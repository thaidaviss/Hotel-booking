import { Modal, Form, Input, Select, InputNumber, Rate } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BookingModal.scss";

const BookingModal = ({
  isShowBookingModal,
  setIsShowBookingModal,
  modifyBookingData,
}) => {
  const [modifyBookingForm] = Form.useForm();
  const { typeList } = useSelector((state) => state.typeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isShowBookingModal) {
      modifyBookingForm.resetFields();
    }
  }, [isShowBookingModal]);

  function renderTypeOptions() {
    return typeList.data.map((typeItem, typeIndex) => (
      <Select.Option value={typeItem.id} key={`type-${typeItem.id}`}>
        {typeItem.name}
      </Select.Option>
    ));
  }
  function renderRoomCode() {

  }

  return (
    <Modal
      title={isShowBookingModal === true && "Edit Booking"}
      visible={isShowBookingModal}
      onOk={() => modifyBookingForm.submit()}
      onCancel={() => setIsShowBookingModal("")}
    >
      <Form
        form={modifyBookingForm}
        name="modify-room"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={modifyBookingData}
        onFinish={(values) => console.log(values)}
      >
        <Form.Item
          label="Type Room"
          name="typeRoomId"
          rules={[{ required: true, message: "Please input type of room!" }]}
        >
          <Select placeholder="Please select a type room!">
            {renderTypeOptions()}
          </Select>
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input code of room!" }]}
        >
          <Select placeholder="Please select a room code!">
            {renderRoomCode()}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BookingModal;