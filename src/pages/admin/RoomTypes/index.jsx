import { PlusOutlined } from '@ant-design/icons';
import { Button, Image, Popconfirm, Space, Table } from 'antd';
import { ROUTER_URL } from 'constants/index';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTypeAction, getTypeListAction } from 'redux/actions';
import history from 'utils/history';
import ImageSliderItem from './components/ImageSliderItem';
import './RoomTypes.scss';



const RoomTypesPage = (props) => {
  
  const { typeList } = useSelector((state) => state.typeReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTypeListAction());
  }, []);


  const roomTypesColumns = [
    {
      title: 'Type of Room',
      dataIndex: 'name',
      key: 'name',
      fixed: "left",
      width: 250,
      render: (value, record) => {
        return (
          <ImageSliderItem 
            images={record?.images ? record.images : []} 
            value={value}
          />
        );
      }
    },
    { title: 'Description', dataIndex: 'description', key: 'description', width: 650 },
    { title: 'Type of View', dataIndex: 'view', key: 'view', width: 200 },
    { title: 'Max Guest', dataIndex: 'maxGuest', key: 'maxGuest', width: 150 },
    { title: 'Services', dataIndex: 'services', key: 'services', width: 350,
      render: (value) => `${value}, `   
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 150,
      render: (value) => value?.toLocaleString(),
    },
    {
      title: 'Create At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 150,
      render: (value) => value && moment(value).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Update At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 150,
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
              className="edit-roomType-btn"
              type="primary"
              ghost
              onClick={() => {
                // dispatch(editTypeAction(record.id));
                history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.ROOMS}/${record.id}${ROUTER_URL.EDIT}`);
                // setIsShowTypeModal('edit');
                // setModifyTypeData(record);
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this type?"
              onConfirm={() => dispatch(deleteTypeAction({ id: record.id }))}
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
            // setIsShowTypeModal("create");
            // setModifyTypeData({ name: "" });
            history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.CREATE_ROOM}`);
          }}
        >
          New Room Type
        </Button>
      </div>
      <div className="roomType-list">
        <Table 
          dataSource={roomTypesData} 
          columns={roomTypesColumns} 
          loading={typeList.load} 
          scroll={{x: 2500}}
        />
      </div>

      {/* <RoomTypesModal
        isShowTypeModal={isShowTypeModal}
        setIsShowTypeModal={setIsShowTypeModal}
        modifyTypeData={modifyTypeData}
        handleSubmitForm={handleSubmitForm}
      /> */}
    </div>
  );
}

export default RoomTypesPage;
