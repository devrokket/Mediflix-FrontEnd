import "../assets/styles/Row3_1.css";
import { CaretUpOutlined, MinusOutlined } from "@ant-design/icons"

export default function Row3_1() {
    return (
        <div className="row3_1_content">
            <div className="row3_1_content_1">
                <div className="row3_1_title">
                    <h3>실시간 검색어 순위</h3>
                </div>
                <div className="row3_1_update">
                    23.03.15.18:00 업데이트
                </div>
            </div>

            <div className="row3_1_content_2">
                <table>
                    <tr>
                        <td><b>1.</b> 펜타닐<CaretUpOutlined /> 2</td>
                        <td className="td2"><b>6.</b> 코로나<MinusOutlined /></td>
                    </tr>
                    <tr>
                        <td><b>2.</b> 축농증<CaretUpOutlined /> N</td>
                        <td className="td2"><b>7.</b> 개원준비<CaretUpOutlined /> 2</td>
                    </tr>
                    <tr>
                        <td><b>3.</b> 환절기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2</td>
                        <td className="td2"><b>8.</b> 예방접종<MinusOutlined /></td>
                    </tr>
                    <tr>
                        <td><b>4.</b> 임산부<MinusOutlined /></td>
                        <td className="td2"><b>9.</b> 마스크<MinusOutlined /></td>
                    </tr>
                    <tr>
                        <td><b>5.</b> 프로포폴<MinusOutlined /></td>
                        <td className="td2"><b>10.</b> 메디플릭스<MinusOutlined /></td>
                    </tr>
                </table>
            </div>

            <div className="row3_1_content_3">
                <div className="row3_1_title">
                    <h3>LIFE 인기 게시글</h3>
                </div>
                <div className="row3_1_line">
                    <div className="list">1. [카테고리] [제목명] <div>216</div></div>
                    <div className="list">2. [카테고리] [제목명] <div>216</div></div>
                    <div className="list">3. [카테고리] [제목명] <div>216</div></div>
                </div>
            </div>
        </div>
    );
}