import { Form, Modal, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BookingModal.scss";
import { checkVariable } from "redux/constants";
import { getBookingListAction, getRoomListAction } from "redux/actions";

const BookingModal = ({
  isShowBookingModal,
  setIsShowBookingModal,
  modifyBookingData,
}) => {
  const [modifyBookingForm] = Form.useForm();
  
  // const { typeList } = useSelector((state) => state.typeReducer);
  const { bookingList } = useSelector((state) => state.bookingReducer);
  const { roomList } = useSelector((state) => state.roomReducer);
  const dispatch = useDispatch();

  const checkIn = modifyBookingData.checkIn;
  const checkOut = modifyBookingData.checkOut;
  const typeRoomId = modifyBookingData.typeRoomId;

  const listVariable = checkVariable(checkIn, checkOut, bookingList, roomList) || {};


  useEffect(() => {
    dispatch(getRoomListAction());
    dispatch(getBookingListAction());
  }, [dispatch]);

  useEffect(() => {
    if (isShowBookingModal) {
      modifyBookingForm.resetFields();
    }
  }, [isShowBookingModal]);

  // function renderTypeOptions() {
  //   return typeList.data.map((typeItem, typeIndex) => (
  //     <Select.Option value={typeItem.id} key={`type-${typeItem.id}`}>
  //       {typeItem.name}
  //     </Select.Option>
  //   ));
  // }
  function renderRoomCode() {
    if (listVariable) {
      const list = listVariable[Object.keys(`${typeRoomId}`)] || [];
      return list.map((roomItem, roomIndex) => (
        <Select.Option value={roomItem.name} key={`choose-${roomItem.id}`}>
          {roomItem.name}
        </Select.Option>
      ));
    }
  }

  return (
    <Modal
      title={isShowBookingModal === true && "Change Room"}
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
