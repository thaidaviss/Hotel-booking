import { Button, Popconfirm, Space, Table } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import RoomModal from "./components/RoomModal";
import './RoomList.scss';


function RoomListPage (props) {
  const [isShowRoomModal, setIsShowRoomModal] = useState("");
  const [modifyRoomData, setModifyRoomData] = useState({});
  const locationList = [
    {
      locationId: 1,
      name: "Da Nang"
    },
    {
      locationId: 2,
      name: "Ho Chi Minh"
    },
    {
      locationId: 3,
      name: "Quang Nam"
    },
  ];

  useEffect(() => {

  }, []);

  const roomData = [
    {
      key: '1',
      room: 'Suite Room',
      number: 12,
      locationId: 1,
      price: 200,
    },
    {
      key: '2',
      room: 'Deluxe Room',
      number: 4,
      locationId: 2,
      price: 350,
    },
  ];
  const roomColumns = [
    {
      title: 'Room',
      dataIndex: 'room',
      width: 200,
      fixed: "left",
      key: 'room',
    },
    { title: 'Number', dataIndex: 'number', key: 'number' },
    { 
      title: 'Location', 
      dataIndex: 'locationId', 
      key: 'locationId',
      render: (value) => {
        const locationData = locationList.find((item) => item.locationId === value);
        if (locationData) return locationData.name;
      }, 
    },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
      title: 'Create At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value) => value && moment(value).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Update At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (value) => value && moment(value).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 200,
      fixed: "right",
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <Button
              className="room-btn"
              type="primary"
              ghost
              onClick={() => {
                setIsShowRoomModal("edit");
                setModifyRoomData(record);
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this room?"
              onConfirm={() => null}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button className="room-btn" danger>Delete</Button>
            </Popconfirm>
          </Space>
        )
      }
    },
  ];

  return (
    <div>
      <div className="room-title">
        <Button 
          className="add-room-btn"
          type="primary"
          onClick={() => {
            setIsShowRoomModal("create");
            setModifyRoomData({ room: '', number: 0, price: 0 });
          }}
        >
          Add Room
        </Button>
      </div>
      <div className="room-list">
        <Table dataSource={roomData} columns={roomColumns} scroll={{x: 1000}} />
      </div>

      <RoomModal
        isShowRoomModal={isShowRoomModal}
        setIsShowRoomModal={setIsShowRoomModal}
        modifyRoomData={modifyRoomData}
        locationList={locationList}
        handleSubmitForm={null}
      />
    </div>
  );
}

export default RoomListPage;