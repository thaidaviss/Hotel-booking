import React, { useEffect, useState } from 'react';
import { Button, Popconfirm, Space, Table } from "antd";
import moment from "moment";
import DiscountModal from "./components/DiscountModal";
import './DiscountList.scss';

const DiscountListPage = () => {
  const [isShowDiscountModal, setIsShowDiscountModal] = useState("");
  const [modifyDiscountData, setModifyDiscountData] = useState({});

  useEffect(() => {

  }, []);

  const discountData = [
    {
      key: '1',
      name: 'MG01-30',
      start: "12/05/2021",
      end: "13/06/2021",
      value: 5,
    },
    {
      key: '2',
      name: 'MG02-15',
      start: "12/07/2021",
      end: "27/07/2021",
      value: 12,
    },
  ];
  const discountColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 200,
      fixed: "left",
      key: 'name',
    },
    { 
      title: 'Start Date', 
      dataIndex: 'start', 
      key: 'start',
    },
    { 
      title: 'End Date', 
      dataIndex: 'end', 
      key: 'end',
    },
    { title: 'Value', dataIndex: 'value', key: 'value' },
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
              className="discount-btn"
              type="primary"
              ghost
              onClick={() => {
                setIsShowDiscountModal("edit");
                setModifyDiscountData(record);
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this discount?"
              onConfirm={() => null}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button className="discount-btn" danger>Delete</Button>
            </Popconfirm>
          </Space>
        )
      }
    },
  ];

  return (
    <div>
      <div className="discount-title">
        <Button 
          className="add-discount-btn"
          type="primary"
          onClick={() => {
            setIsShowDiscountModal("create");
            setModifyDiscountData({ 
              name: '', 
              start: "01/01/2015",
              end: "02/01/2015", 
              value: 0 
            });
          }}
        >
          Add Discount
        </Button>
      </div>
      <div className="discount-list">
        <Table dataSource={discountData} columns={discountColumns} scroll={{x: 1000}} />
      </div>

      <DiscountModal
        isShowDiscountModal={isShowDiscountModal}
        setIsShowDiscountModal={setIsShowDiscountModal}
        modifyDiscountData={modifyDiscountData}
        handleSubmitForm={null}
      />
    </div>
  );
}

export default DiscountListPage;
