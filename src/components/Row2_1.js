import "../assets/styles/Row2_1.css";
import { LineOutlined } from "@ant-design/icons"
import setting from "../assets/imgs/setting.png";

export default function Row2_1() {
    return (
        <div className="row2_1_content">
            <div className="row2_1_content_1">
                <div className="row2_1_title">
                    <h3>서비스 규모 CHECK</h3>
                </div>
                <div className="row2_1_update">23.03.15. 업데이트</div>
                <div className="row2_1_icon"><img src={setting}></img></div>
            </div>
            <div className="row2_1_content_2">
                <div className="row2_1_box">
                    <div className="text">총 회원수</div>
                    <div className="int">1,050</div>
                    <div className="plus">+20</div>
                </div>
                <div className="row2_1_box">
                    <div className="text">총 영상개수</div>
                    <div className="int">239</div>
                    <div className="plus">+2</div>
                </div>
                <div className="row2_1_box">
                    <div className="text">평균 조회수</div>
                    <div className="int">155</div>
                    <div className="minus">-20</div>
                </div>
                <div className="row2_1_box">
                    <div className="text">파트너</div>
                    <div className="int">45</div>
                    <div className="partner"><LineOutlined /></div>
                </div>
            </div>
        </div>
    );
}