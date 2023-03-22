import "../assets/styles/Row1_2.css";
// import axios from "axios";

export default function Row1_2() {
    return (
        <div className="row1_2_content">
            <div className="row1_2_contents">
                <div className="row1_2_title">금일 누적 방문자 수</div>
                <div>2023.03.15.18:00</div>
                <div className="row1_2_title">NN명</div>
            </div>
            <div className="row1_2_contents">
                <div className="row1_2_title">금일 신규 가입자 수</div>
                <div>2023.03.15.18:00</div>
                <div className="row1_2_title">NN명</div>
            </div>
            <div className="row1_2_contents">
                <div className="row1_2_title">일일 평균 방문자 수</div>
                <div>2023.03.15.18:00</div>
                <div className="row1_2_title">NN명</div>
            </div>
            <div className="row1_2_contents">
                <div className="row1_2_title">오늘의 조회수</div>
                <div className="row1_2_time">2023.03.15.18:00</div>
                <div className="row1_2_title2">NN명</div>
            </div>
            <div className="row1_2_contents">
                <div className="row1_2_title">일일 이탈자 수</div>
                <div className="row1_2_time2">2023.03.15.18:00</div>
                <div className="row1_2_title2">NN명</div>
            </div>
        </div>
    );
}