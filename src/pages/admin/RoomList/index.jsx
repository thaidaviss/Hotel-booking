import { Button, Popconfirm, Space, Table } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import history from "utils/history";
import './RoomList.scss';
import { createRoomAction, deleteRoomAction, editRoomAction, getFilterRoomListAction, getFilterTypeListAction, getRoomListAction, getTypeListAction } from "redux/actions";
import { ROUTER_URL } from "constants/index";
import RoomModal from "./components/RoomModal";


function RoomListPage (props) {
  // "" "edit" "create"
  const [isShowRoomModal, setIsShowRoomModal] = useState('');
  const [modifyRoomData, setModifyRoomData] = useState({});

  const { roomList } = useSelector((state) => state.roomReducer);
  const { typeList } = useSelector((state) => state.typeReducer);
  const dispatch = useDispatch();
 
  const [page,setPage] = useState({...roomList.pagination})
  useEffect(() => {
    dispatch(getFilterTypeListAction({params:page}));
    dispatch(getFilterRoomListAction({params:page}));
  }, [page._page]);
  const handleTableChange=(pagination, filters, sorter) => {
    setPage({...page,_page:pagination.current})
  }
  

  function handleSubmitForm(values) {
    if (isShowRoomModal === 'create') {
      dispatch(createRoomAction({
        data: values,
      }));
    } else {
      dispatch(editRoomAction({
        id: modifyRoomData.id,
        data: values,
      }));
    }
    setIsShowRoomModal('');
  }

  const roomData = roomList.data.map((roomItem, roomIndex) => {
    return {
      key: roomIndex,
      ...roomItem,
    }
  });
  const roomColumns = [
    { title: 'No.', dataIndex: 'id', key: 'id', width: 80 },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
      fixed: "left",
      key: 'name',
    },
    {
      title: 'Type Room',
      dataIndex: 'typeRoomId',
      key: 'typeRoomId',
      render: (id) => {
        const typeData = typeList.data.find((item) => item.id === id);
        if (typeData) return typeData.name;
      }
    },
    { title: 'Rating', dataIndex: 'rating', key: 'rating', width: 100 },
    {
      title: 'Create At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 200,
      render: (value) => value && moment(value).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Update At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 200,
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
      
              onClick={() => 
                {
                  // history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.ROOMS}/${record.id}${ROUTER_URL.EDIT}`);
                  setIsShowRoomModal('edit');
                  setModifyRoomData(record);
                }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this room?"
              onConfirm={() => dispatch(deleteRoomAction({ id: record.id }))}
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
          onClick={() => 
            {
              // history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.CREATE_ROOM}`);
              setIsShowRoomModal("create");
              setModifyRoomData({ name: "", rating: 0 });
            }
          }
        >
          New Room
        </Button>
      </div>
      <div className="room-list">
        <Table 
          // style={{height:"80vh"}}
          pagination={{current:page._page,pageSize:page._limit,total:((Math.ceil(page._totalRows/page._limit))*10)}}
          dataSource={roomData} 
          columns={roomColumns} 
          loading={roomList.load}
          scroll={{x: 1000,y:"60vh"}}
          onChange={handleTableChange}
        />
      </div>
      <RoomModal 
        isShowRoomModal={isShowRoomModal}
        setIsShowRoomModal={setIsShowRoomModal}
        modifyRoomData={modifyRoomData}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}

export default RoomListPage;