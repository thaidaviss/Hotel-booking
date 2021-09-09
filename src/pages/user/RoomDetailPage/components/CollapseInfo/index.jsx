import { Collapse, Pagination } from "antd";
import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import CommentItem from "../Comment";
import RoomReviews from "../RoomReviews";
import "./CollapseInfo.scss";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const review = {
  avatar: "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single3.jpg",
  name: "Harmon Bechtelar",
  title: "very comfortable",
  description:
    "Distinctio at aut perspiciatis dolores. Sed sit ut labore nostrum. Est amet repellat dolore maiores id eligendi eveniet autem praesentium. Porro illo perspiciatis repellat atque laborum voluptatem tempore nobis odio. Fugiat et molestias ab id temporibus dignissimos culpa fugit. Nulla magni iusto dolores at.",
  time: "Reviewd - 1 months ago",
  stars: { room: 3, cleanness: 4, food: 4, service: 5 },
  interact: { like: 2, dislike: 1 },
};
function CollapseInfo(props) {
  const { RoomDetail } = props;
  return (
    <div className="collapse-info">
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        accordion
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      >
        <Panel header="Description" key="1" className="site-collapse-custom-panel">
          <p className="room-detail__description">{RoomDetail.description}</p>
        </Panel>
        <Panel header="Room detail" key="2" className="site-collapse-custom-panel">
          <div className="detail">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Size room:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                  <td>
                    <div className="table__item">
                      <div className="table__title">View</div>
                      <div className="table__value"> sea</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Ensuite Bathroom:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Free WiFi: </div>
                      <div className="table__value"> sea</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Breakfast Included:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Gym Access:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Free Airport Pickup:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Room Service:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Roof terrace:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Dryer:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Balcony:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Smoking allowed:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Concrete flooring:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                  <td>
                    <div className="table__item">
                      <div className="table__title">Free Parking:</div>
                      <div className="table__value"> 45 m²/484 ft²</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel header="Review" key="3" className="site-collapse-custom-panel">
          <div className="room-detail__review">
            <RoomReviews />
            <CommentItem {...review} />
            <CommentItem {...review} />
            <CommentItem {...review} />
            <div className="room-detail__pagination">
              <Pagination defaultCurrent={1} total={20} size={10} />
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

export default CollapseInfo;
