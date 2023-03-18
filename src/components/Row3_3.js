import "../assets/styles/Row3_3.css";
import { Space, Switch } from 'antd';

export default function Row3_3() {
    return (
        <div className="row3_3_content" >
            <div className="row3_3_content_1">
                <div className="row3_3_title">
                    <h3>지역별 비교</h3>
                </div>
                <div className="scrollbutton">
                    <Space direction="vertical">
                        <Switch
                            checkedChildren="신규"
                            unCheckedChildren="유저"
                            defaultChecked
                        />
                    </Space>
                </div>
            </div>
            <div className="row3_3_content_2">
                <div className='chart'>지도</div>
                <div className='chart_text'>설명</div>
            </div>
        </div>
    );
}