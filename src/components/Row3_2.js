import "../assets/styles/Row3_2.css";
import { Space, Switch } from 'antd';
import { BgColorsOutlined } from "@ant-design/icons";
import { Colors } from "chart.js";

export default function Row3_2() {
    return (
        <div className="row3_2_content" >
            <div className="row3_2_content_1">
                <div className="row3_2_title">
                    <h3>의학 전공별 비중</h3>
                </div>
                <div className="scrollbutton">
                    <Space direction="vertical">
                        <Switch
                            checkedChildren="회원"
                            unCheckedChildren="콘텐츠"
                            defaultChecked
                        />
                    </Space>
                </div>
            </div>
            <div className="row3_2_content_2">
                <div className='chart'>도넛파이차트</div>
                <div className='chart_text'>설명</div>
            </div>
        </div>
    );
}