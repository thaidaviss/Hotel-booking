import { Button, Popconfirm, Space, Table } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import RoomModal from "./components/RoomModal";
import './RoomList.scss';


function RoomListPage (props) {
  const [isShowRoomModal, setIsShowRoomModal] = useState(false);
  const [modifyRoomData, setModifyRoomData] = useState({});

  useEffect(() => {

  }, []);

  const roomData = [
    {
      key: '1',
      room: 'Suite Room',
      number: 12,
      price: 200,
    },
    {
      key: '2',
      room: 'Deluxe Room',
      number: 4,
      price: 350,
    },
  ];
  const roomColumns = [
    {
      title: 'Room',
      dataIndex: 'room',
      key: 'room',
    },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
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
      <div className="rooms-list">
        <Button 
          className="add-room-btn"
          type="primary"
          onClick={() => {
            setIsShowRoomModal(true);
            setModifyRoomData({ room: '', number: 0, price: 0 });
          }}
        >
          Add Room
        </Button>
        <Table dataSource={roomData} columns={roomColumns} />
      </div>

      <RoomModal
        isShowRoomModal={isShowRoomModal}
        setIsShowRoomModal={setIsShowRoomModal}
        handleSubmitForm={null}
        modifyRoomData={modifyRoomData}
        categoryList={null}
      />
    </div>
  );
}

export default RoomListPage;