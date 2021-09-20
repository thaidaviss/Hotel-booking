import { Tag, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscountListAction, getTypeListAction } from 'redux/actions';


const BookingItem = (props) => {
  const { value } =props;
  const { typeList } = useSelector((state) => state.typeReducer);
  const { discountList } = useSelector((state) => state.discountReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscountListAction());
  }, []);

  const bookingData = value.bookings.map((bookingItem, bookingIndex) => {
    return {
      key: bookingIndex,
      ...bookingItem,
    };
  });
  const bookingColumns = [
    {
      title: 'Type of Room',
      dataIndex: 'typeRoomId',
      width: 180,
      key: 'typeRoomId',
      render: (id) => {
        const typeData = typeList.data.find((item) => item.id === id);
        if (typeData) return typeData.name;
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: 100,
      key: 'price',
      render: (value) => `$ ${value}`,
    },
    {
      title: 'Discount',
      dataIndex: 'discountCode',
      width: 100,
      key: 'discountCode',
      render: (code) => {
        const discountData = discountList.data.find((item) => item.name === code);
        if (discountData) return (discountData.value ? discountData.value : 0);
        return 0;
      }
    },
    { 
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      render: (value) => {
        if (value === "pending") return <Tag color="processing">Booked</Tag>;
        if (value === "check-in") return <Tag color="green">Checked-In</Tag>;
        if (value === "check-out") return <Tag color="yellow">Checked-Out</Tag>;
        if (value === "canceled") return <Tag color="red">Canceled</Tag>;
      }
    },
    {
      title: 'Number',
      dataIndex: 'number',
      width: 100,
      key: 'number',
      render: () => 1,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      width: 100,
      key: 'total',
      render: (value) => `$ ${value}`,
    },
  ];

  useEffect(() => {
    dispatch(getTypeListAction());
  }, []);

  return (
    <Table
      size="small"
      dataSource={bookingData}
      columns={bookingColumns}
      pagination={false}
      summary={pageDate => {
        const count = pageDate.reduce((result, element) => {
          return result + 1;
        }, 0);
        const sumPrice = pageDate.reduce((result, element) => {
          return result + element.total;
        }, 0);

        return (
          <Table.Summary.Row style={{ fontWeight: "bold" }}>
              <Table.Summary.Cell>Total</Table.Summary.Cell>
              <Table.Summary.Cell>
              </Table.Summary.Cell>

              <Table.Summary.Cell>
              </Table.Summary.Cell>

              <Table.Summary.Cell>
              </Table.Summary.Cell>

              <Table.Summary.Cell>
                <span>{count}</span>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <span>$ {sumPrice}</span>
              </Table.Summary.Cell>
            </Table.Summary.Row>
        )
      }}
      // loading={loading}
      // scroll={{ x: 900 }}
    />
  );
}

export default BookingItem;