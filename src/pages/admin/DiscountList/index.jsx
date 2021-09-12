import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Popconfirm, Space, Table } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import moment from "moment";
import { useDispatch } from 'react-redux';
import { getDiscountListAction } from 'redux/actions';

import DiscountModal from "./components/DiscountModal";
import './DiscountList.scss';

const DiscountListPage = () => {
  const [isShowDiscountModal, setIsShowDiscountModal] = useState("");
  const [modifyDiscountData, setModifyDiscountData] = useState({});
  const { discountList } = useSelector((state) => state.discountReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscountListAction());
  }, []);

  const discountData = discountList.data.map((discountItem, discountIndex) => {
    return {
      key: discountIndex,
      ...discountItem,
    }
  });
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
      render: (value) => value && moment(value).format('DD/MM/YYYY'),
    },
    { 
      title: 'End Date', 
      dataIndex: 'end', 
      key: 'end',
      render: (value) => value && moment(value).format('DD/MM/YYYY'),
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
          size="large"
          icon={<PlusOutlined />}
          onClick={() => {
            setIsShowDiscountModal("create");
            setModifyDiscountData({ 
              name: '', 
              start:1631092999151,
              end:1631093012330,
              value: 0 
            });
          }}
        >
          Add Discount
        </Button>
      </div>
      <div className="discount-list">
        <Table 
          dataSource={discountData}
          columns={discountColumns}
          loading={discountList.load}
          scroll={{x: 1000}} />
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
