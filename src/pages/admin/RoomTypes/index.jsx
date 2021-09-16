import { PlusOutlined } from "@ant-design/icons";
import { Button, Tag, Image, Popconfirm, Space, Table } from "antd";
import { ROUTER_URL } from "constants/index";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTypeAction, getFilterTypeListAction, getTypeListAction } from "redux/actions";
import history from "utils/history";
import ImageSliderItem from "./components/ImageSliderItem";
import UtilityItem from "./components/UtilityItem";
import "./RoomTypes.scss";

const RoomTypesPage = (props) => {
  const { typeList } = useSelector((state) => state.typeReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState({...typeList.pagination});


  useEffect(() => {
    dispatch(getFilterTypeListAction({ params: page }));
  }, [page._page]);

  const handleTableChange = (pagination, filters, sorter) => {
    setPage({ ...page, _page: pagination.current });
  };

  const roomTypesColumns = [
    { title: "No.", dataIndex: "id", key: "id", width: 30, fixed: "left" },
    {
      title: "Type of Room",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 170,
      render: (value, record) => {
        return <ImageSliderItem images={record.images} value={value} key={`image-${record.id}`} />;
      },
    },
    { title: "Description", dataIndex: "description", key: "description", width: 200 },
    {
      title: "Type of View",
      dataIndex: "view",
      key: "view",
      width: 60,
      render: (_, record) => {
        return (
          <div>
            {record.utilities.map((item) => {
              if (item.view) return item.view;
            })}
          </div>
        );
      },
    },
    { title: "Max Guest", dataIndex: "maxGuest", key: "maxGuest", width: 80 },
    {
      title: "Utilities",
      dataIndex: "utilities",
      key: "utilities",
      width: 120,
      render: (value, record) => {
        return <UtilityItem value={value} key={`utility-${record.id}`} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 50,
      render: (value) => `$ ${value}`,
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 60,
      render: (value) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Update At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 60,
      render: (value) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Action",
      dataIndex: "action",
      width: 100,
      fixed: "right",
      key: "action",
      render: (_, record) => {
        return (
          <Space>
            <Button
              className="edit-roomType-btn"
              type="primary"
              ghost
              onClick={() => {
                history.push(
                  `${ROUTER_URL.ADMIN}${ROUTER_URL.ROOMS}/${record.id}${ROUTER_URL.EDIT}`
                );
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
        );
      },
    },
  ];
  const roomTypesData = typeList.data.map((roomTypeItem, roomTypeIndex) => {
    return {
      key: roomTypeIndex,
      ...roomTypeItem,
    };
  });

  return (
    <div>
      <div className="roomType-title">
        <Button
          className="add-roomType-btn"
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.CREATE_ROOM}`);
          }}
        >
          New Type
        </Button>
      </div>
      <div className="roomType-list">
        <Table
          size="small"
          dataSource={roomTypesData}
          columns={roomTypesColumns}
          loading={typeList.load}
          scroll={{ x: 1500, y: "60vh" }}
          pagination={{
            current:page._page,pageSize:page._limit,
            total:((Math.ceil(page._totalRows/page._limit))*10)
          }}
          onChange={handleTableChange}
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
};

export default RoomTypesPage;
