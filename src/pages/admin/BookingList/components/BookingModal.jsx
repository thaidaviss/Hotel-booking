import { Modal, Form, Input, Select, InputNumber, Rate } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BookingModal.scss";

const BookingModal = ({
  isShowBookingModal,
  setIsShowBookingModal,
  modifyBookingData,
  handleSubmitForm,
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

  return (
    <Modal
      title={isShowBookingModal === "create" ? "New Booking" : "Edit Booking"}
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
          name="typeRoomId"
          rules={[{ required: true, message: "Please input type of room!" }]}
        >
          <Select placeholder="Please select your type room!">
            {renderTypeOptions()}
          </Select>
        </Form.Item>

        <Form.Item label="Rating" name="rating">
          <Rate defaultValue={5} value={5} style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BookingModal;
