import { PlusOutlined } from '@ant-design/icons';
import { Button, Image, Popconfirm, Space, Table } from 'antd';
import { ROUTER_URL } from 'constants/index';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTypeAction, getTypeListAction } from 'redux/actions';
import history from 'utils/history';
import './RoomTypes.scss';



const RoomTypesPage = (props) => {
  const [ visible, setVisible ] = useState(false);
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              className="typeRoom-images"
              preview={{ visible: false }}
              width={50}
              src={record.images[0]}
            />
            <p style={{ paddingLeft: "1rem" }}>{value}</p>
            <div style={{ display: "none" }}>
              <Image.PreviewGroup
                preview={{ visible, onVisibleChange: (boolean) => setVisible(boolean) }}
              >
                <Image src={record.images[0]} />
                <Image src={record.images[1]} />
                <Image src={record.images[2]} />
                <Image src={record.images[3]} />
              </Image.PreviewGroup>
            </div>
          </div>
        );
      }
    },
    { title: 'Description', dataIndex: 'description', key: 'description', width: 650 },
    { title: 'Type of View', dataIndex: 'view', key: 'view', width: 200 },
    { title: 'Max Guest', dataIndex: 'maxGuest', key: 'maxGuest', width: 150 },
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
