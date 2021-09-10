import { Button, Popconfirm, Space, Table } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import history from "utils/history";
import './RoomList.scss';
import { getRoomListAction, getTypeListAction } from "redux/actions";
import { ROUTER_URL } from "constants/index";
// import { ROUTER_URL } from "constants/index";


function RoomListPage (props) {

  const { roomList } = useSelector((state) => state.roomReducer);
  const { typeList } = useSelector((state) => state.typeReducer);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getTypeListAction());
    dispatch(getRoomListAction());
  }, []);


  const roomData = roomList.data.map((roomItem, roomIndex) => {
    return {
      key: roomIndex,
      ...roomItem,
    }
  });
  const roomColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 100,
      fixed: "left",
      key: 'name',
    },
    {
      title: 'Type Room',
      dataIndex: 'typeRoomId',
      key: 'typeRoomId',
      render: (value) => {
        const typeData = typeList.data.find((item) => item.id === value);
        if (typeData) return typeData.name;
      }
    },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (value) => value.toLocaleString(),
    },
    { title: 'Max Guest', dataIndex: 'maxGuest', key: 'maxGuest' },
    { title: 'Rating', dataIndex: 'rating', key: 'rating' },
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
              className="edit-room-btn"
              type="primary"
              ghost
              onClick={() => history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.ROOMS}/${record.id}${ROUTER_URL.EDIT}`)}
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
          size="large"
          icon={<PlusOutlined />}
          onClick={() => history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.CREATE_ROOM}`)}
        >
          New Room
        </Button>
      </div>
      <div className="room-list">
        <Table 
          dataSource={roomData} 
          columns={roomColumns} 
          scroll={{x: 1000}} 
          loading={roomList.load}
        />
      </div>

    </div>
  );
}

export default RoomListPage;