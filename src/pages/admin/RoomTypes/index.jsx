import { PlusOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Table } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTypeAction, deleteRoomAction, editTypeAction, getTypeListAction } from 'redux/actions/index';
import RoomTypesModal from './components/RoomTypesModal';
import './RoomTypes.scss';



const RoomTypesPage = () => {
  // "", "create", "edit"
  const [isShowTypeModal, setIsShowTypeModal] = useState('');
  const [modifyTypeData, setModifyTypeData] = useState({});

  const { typeList } = useSelector((state) => state.typeReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTypeListAction());
  }, []);

  function handleSubmitForm(values) {
    if (isShowTypeModal === 'create') {
      dispatch(createTypeAction({
        data: values,
      }));
    } else {
      dispatch(editTypeAction({
        id: modifyTypeData.id,
        data: values,
      }));
    }
    setIsShowTypeModal('');
  }

  const roomTypesColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 250,
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
      width: 230,
      fixed: "right",
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <Button
              className="edit-roomType-btn"
              type="primary"
              ghost
              onClick={() => {
                setIsShowTypeModal('edit');
                setModifyTypeData(record);
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this type?"
              onConfirm={() => dispatch(deleteRoomAction({ id: record.id }))}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Space>
        )
      }
    },
  ];

  const roomTypesData = typeList.data.map((roomTypeItem, roomTypeIndex) => {
    return {
      key: roomTypeIndex,
      ...roomTypeItem,
    }
  });

  return (
    <div>
      <div className="roomType-title">
        <Button 
          className="add-roomType-btn"
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => {
            setIsShowTypeModal("create");
            setModifyTypeData({ name: "" });
          }}
        >
          New Room Type
        </Button>
      </div>
      <div className="roomType-list">
        <Table dataSource={roomTypesData} columns={roomTypesColumns} loading={typeList.load} />
      </div>

      <RoomTypesModal
        isShowTypeModal={isShowTypeModal}
        setIsShowTypeModal={setIsShowTypeModal}
        modifyTypeData={modifyTypeData}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}

export default RoomTypesPage;
