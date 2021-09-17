import Chart from "../components/Chart/Chart";
import DATA from "../components/Chart/DataChart";
import './Dashboard.scss';


function DashBoardPage() {
  return (
    <div className="dashboard">
        <div className="dashboard__feature">
            {/* <FeatureInfor title='Revenue' money="$21,000" rate="-1.4%" sub="Compared to last month" />
            <FeatureInfor title="Cost" money="$3,430" rate="+1.4%" sub="Compared to last month" />
            <FeatureInfor title="Sale" money="$5,100" rate="-7.4%" sub="Compared to last month" /> */}
        </div>
        <Chart DATA = {DATA}/>
    </div>
  );
};

export default DashBoardPage;