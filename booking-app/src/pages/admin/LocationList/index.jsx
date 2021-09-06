import {
  Button, Popconfirm, Space, Table
} from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import LocationModal from './components/LocationModal';
import './LocationList.scss';


function LocationListPage() {
  // "", "create", "edit"
  const [isShowLocationModal, setIsShowLocationModal] = useState('');
  const [modifyLocationData, setModifyLocationData] = useState({});
  const locationList = [
    {
      locationId: 1,
      name: "Da Nang"
    },
    {
      locationId: 2,
      name: "Ho Chi Minh"
    },
    {
      locationId: 3,
      name: "Quang Nam"
    },
  ];

  // const { LocationList } = useSelector((state) => state.LocationReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getLocationListAction());
  }, []);

  // function handleSubmitForm(values) {
  //   if (isShowLocationModal === 'create') {
  //     dispatch(createLocationAction({
  //       data: values
  //     }));
  //   } else {
  //     dispatch(editLocationAction({
  //       id: modifyLocationData.id,
  //       data: values,
  //     }));
  //   }
  //   setIsShowLocationModal('');
  // }

  const locationColumns = [
    {
      title: 'Location',
      dataIndex: 'locationId',
      key: 'locationId',
      render: (value) => {
        const locationData = locationList.find((item) => item.locationId === value);
        if (locationData) return locationData.name;
      }, 
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 250,
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <Button
              type="primary"
              ghost
              onClick={() => {
                setIsShowLocationModal('edit');
                setModifyLocationData(record);
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this location?"
              onConfirm={() => null}
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

  const locationData = locationList.map((locationItem, locationIndex) => {
    return {
      key: locationIndex,
      ...locationItem,
    }
  });

  return (
    <div>
      <div className="location-title">
        <Button 
          className="add-location-btn"
          type="primary"
          onClick={() => {
            setIsShowLocationModal("create");
            setModifyLocationData({});
          }}
        >
          Add Location
        </Button>
      </div>
      <div className="location-list">
        <Table dataSource={locationData} columns={locationColumns} />
      </div>

      <LocationModal
        isShowLocationModal={isShowLocationModal}
        setIsShowLocationModal={setIsShowLocationModal}
        modifyLocationData={modifyLocationData}
        locationList={locationList}
        handleSubmitForm={null}
      />
    </div>
  );
}

export default LocationListPage;
