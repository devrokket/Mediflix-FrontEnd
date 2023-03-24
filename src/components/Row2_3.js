import "../assets/styles/Row2_3.css";
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import OnAir from "../assets/imgs/OnAir.png";

export default function Row2_3() {
    return (
        <div className="row2_3_content">
            <div className="row2_3_content_1">
                <div className="row2_3_title">
                    <h3>ON AIR 콘텐츠 관리</h3>
                </div>
                <div className="row2_3_content_1_button">
                    <button><Badge count={2}>더보기</Badge></button>
                </div>
            </div>

            <div className="row2_3_content_2">
                <div className="image">
                    <img src={OnAir} />
                </div>
                <div className="live">Live</div>
            </div>
        </div>
    );
}