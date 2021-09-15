import { Button, Select, Form, Input, InputNumber, Row, Space, Upload, Image, Checkbox, Col } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { ROUTER_URL } from "constants/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createTypeAction, editTypeAction, getTypeDetailAction } from "redux/actions";
import history from "utils/history";
import "./AddEditRoom.scss";

const { TextArea } = Input;

const AddEditTypePage = (props) => {
  const [ uploadImages, setUploadImages ] = useState([]);
  const [modifyRoomForm] = Form.useForm();
  
  const { typeDetail } = useSelector((state) => state.typeReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const typeRoomId = params.id;

  const initialValues = typeRoomId ? typeDetail.data : {};

  useEffect(() => {
    if (typeRoomId) {
      dispatch(getTypeDetailAction({ id: typeRoomId }));
    }
  }, [typeRoomId]);

  useEffect(() => {
    if (typeDetail.data.id) {
      modifyRoomForm.resetFields();
      // setUploadImages([...typeDetail.data.images]);
    }
  }, [typeDetail.data]);

  function handleSubmitForm(values) {
    values.utilities.push({'view':values.view});
    const listImage = values.images.trim().split(",");
    values.images = listImage;
    if (typeRoomId) {
      dispatch(editTypeAction({
        id: typeRoomId,
        data: values,
      }));
    } else {
      dispatch(createTypeAction({
        data: values,
      }));
    }
  };

  // function renderRoomTypeImages() {
  //   return uploadImages.map((imageItem, imageIndex) => (
  //     <Col span={6}>
  //       <Image 
  //         onClick={(e) => {
  //           e.preventDefault();
  //           e.stopPropagation();
  //         }}
  //         key={`image-${imageIndex}`}
  //         width="100%"
  //         src={imageItem}
  //       />
  //     </Col>
  //   ))
  // }

  return (
    <div>
      <Row justify="space-between" className="room-form-title">
        <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          {typeRoomId ? "Edit Room Type" : "Create Room Type"}
        </h3>
        <Space>
          <Button
            onClick={() =>
              history.push(`${ROUTER_URL.ADMIN}${ROUTER_URL.ROOM_TYPES}`)
            }
          >
            Cancel
          </Button>

          <Button
            type="primary"
            loading={typeDetail.load}
            onClick={() => modifyRoomForm.submit()}
          >
            Save
          </Button>
        </Space>
      </Row>

      <div className="room-form-content">
        <Form
          form={modifyRoomForm}
          name="modify-room"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={initialValues}
          onFinish={(values) => handleSubmitForm(values)}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input name of type room!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Images"
            name="images"
            rules={[
              { required: true, message: "Please input images of type room!" },
            ]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item
            label="Image"
            name="images"
            validateFirst
            rules={[
              { required: true, message: "Please upload the room type images!" },
              { max: 4, message: "Maximum 4 images!" },
              () => ({
                validator(_, value) {
                  if (
                    !["image/png", "image/jpeg", "image/jpg"].includes(
                      value.file.type
                    )
                  ) {
                    return Promise.reject(
                      "File image is not in correct format!"
                    );
                  }
                  if (value.file.size > 3072000) {
                    return Promise.reject(
                      "Image is too large. It's not over 3Mb!"
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Upload
              accept="image/*"
              fileList={[]}
              listType="picture"
              beforeUpload={() => false}
              maxCount={4}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
              {uploadImages.length > 0 && (
                <Row gutter={[8, 8]} style={{ marginTop: "0.8rem" }}>
                  {renderRoomTypeImages()}
                </Row>
              )}
            </Upload>
          </Form.Item> */}

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input description of room!" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Type of View"
            name="view"
          
            rules={[
              { required: true, message: "Please input type of view!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Max Guest"
            name="maxGuest"
            rules={[
              { required: true, message: "Please input the number of room!" },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item 
            label="Utilities"
            name="utilities"
            rules={[
              { required: true, message: "Please input the utilities of room!" },
            ]}
          >
            <Checkbox.Group>
              <Row>
                <Col span={8}>
                  <Checkbox value={{ "wifi": "Free Wi-Fi" }} style={{ lineHeight: "32px" }}>
                    Free Wi-Fi
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value={{ "bed": "1 double bed" }} style={{ lineHeight: "32px" }}>
                    1 double bed
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value={{ "roomSize": "Room size: 17 m²/183 ft²" }} style={{ lineHeight: "32px" }}>
                    Room size: 17 m²/183 ft²
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value={{ "view": "City view" }} style={{ lineHeight: "32px" }}>
                    Minibar
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value={{ "smoking": "Non-smoking" }} style={{ lineHeight: "32px" }}>
                    Non-smoking
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value={{ "shower": "Shower" }} style={{ lineHeight: "32px" }}>
                    Shower
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input the price of room!" },
            ]}
          >
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddEditTypePage;
