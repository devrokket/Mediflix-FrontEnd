import "../assets/styles/Row2_2.css";
import topContent from "../assets/imgs/topContent.png";
import topContent2 from "../assets/imgs/topContent2.png";
import topContent3 from "../assets/imgs/topContent3.png";

export default function Row2_2() {
    return (
        <div className="row2_2_content">
            <div className="row2_2_content_1">
                <div className="row2_2_title">
                    <h3>조회수 TOP 콘텐츠</h3>
                </div>
                <div className="row2_2_content_1_button">
                    <button>일간</button>
                    <button>주간</button>
                    <button>월간</button>
                    <button>연간</button>
                </div>
            </div>
            <div className="row2_2_content_2">
                <div className="image"><img src={topContent} /></div>
                <div className="text">
                    <div className="title1">
                        ORIGINAL
                    </div>
                    <div className="title2">
                        척추닥터 김사부(with 김진성교수)
                    </div>
                    <div className="view">
                        조회수 382회
                    </div>
                </div>
            </div>
            <div className="row2_2_content_3">
                <div className="line">
                    <div className="image"><img src={topContent2} /></div>
                    <div className="text">VOD | 염증성 요통의 감별 | 박성수 | 조회수 100회</div>
                </div>
                <div className="line">
                    <div className="image"><img src={topContent3} /></div>
                    <div className="text">VOD | 유방암 호르몬 테라피 | 김정빈 | 조회수 100회</div>
                </div>
            </div>
        </div>
    );
}