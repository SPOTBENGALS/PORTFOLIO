import img01 from '../../../images/project/lxplatform01.png'
import img02 from '../../../images/project/lxplatform02.png'
import img03 from '../../../images/project/lxplatform03.png'
import img04 from '../../../images/project/lxplatform04.png'
import img05 from '../../../images/project/lxplatform05.png'


const LxplatformContents = () => {
    return (
        <div className="ProjectModalContents">
            <p>
               공공기관 발주의 GIS 분석 플랫폼입니다. <br />
                기존 플랫폼에서 생성되는 SHP 데이터를 활용하기 위해, JSP 환경에서 JSP 언어와 JavaScript만으로 구현된 내부망 서비스입니다. <br />
                외부 공개가 불가능한 관계로, 예시 화면만 포함하였습니다.
            </p>

            <h4>개요</h4>
            <p>프로젝트 참여 기간 : 2023년 12월 ~ 2024년 6월</p>
            <p>CCTV 취약지점 분석, AED 설치 분석, 폭염 취약지 분석, 불법주정차 단속 경로 지원, 폐기물 수거체계 관리, 
            집수리 지원 이력 관리, 건축물 점검 지원, 나무심기 효과 분석, 산업단지 대기오염 시뮬레이션, 태양광 효율 분석 등 
            총 10종의 분석 기능이 제공되는 서비스입니다. <br/>이 모든 분석 기능은 OpenLayers 기반 라이브러리로 구현되었습니다. </p>

            <h4>주요 구현 기능</h4>
            <p> · 건물, 경로, 구역의 오브젝트 구현 : OpenLayers 기반 라이브러리와 WKT 정보를 이용한 오브젝트 생성, 레이어 그룹 관리, 오브젝트 스타일, 상호작용 구현<br/>
                · 데이터 테이블 : 컬럼 자동 반영 로직 및 SheetJS를 활용한 엑셀 다운로드 기능 구현 <br/>
                · 레이어 그룹별 스타일링 : 아이콘 모듈화 및 초기 색상 랜덤 적용 기능, 커스텀 스타일 적용 기능 구현 <br/>
                · 레이어 CRUD : 오브젝트 레이어의 생성·조회·수정·삭제 기능 구현
                · 분석 차트 : Chart.js를 활용한 도넛, 바, 라인 차트 구현
            </p>
            <div className="exampleImgs">
                <img src={img02} alt="img02" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                <img src={img01} alt="img01" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                <img src={img03} alt="img03" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                <img src={img04} alt="img04" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                <img src={img05} alt="img05" draggable="false" onContextMenu={(e) => e.preventDefault()} />
            </div>
            {/* <h4>프로젝트 기술 스택</h4>
            <p>Java, Tomcat, JSP, Javascript</p> */}
            <h4>협업 경험</h4>
            <p>
                백엔드 개발자 4인과의 협업에서 유일한 프론트엔드 개발자로 참여했습니다. <br/>
                각 파트별 요청이 몰리는 상황 속에서, 빠르게 우선순위를 파악하고 요구사항을 처리해야 했습니다.<br/>
                이 과정에서 자연스럽게 문제 해결 능력과 커뮤니케이션 역량을 키울 수 있었습니다.
            </p>
            <h4>회고</h4>
            <p>
                거의 순수 JavaScript만으로 구현한 프로젝트였기 때문에, 함수 모듈화와 컴포넌트 재사용성에 특히 신경 썼습니다. <br />
                10종 서비스의 공통 기능을 구성하며, 세부 조건에 따라 유연하게 활용 가능한 구조를 설계한 과정이 가장 재미있었습니다. <br />
                기획이 여러 차례 지연되다 보니 후반부에 빠르게 진행되어 체력적으로 힘들었지만, 정신없이 몰입하며 작업했던 기억이 남습니다. <br />
                특히 디자인 시안 없이 화면설계서만으로 구현을 시작해야 했는데, 디자이너로서의 경험이 있어 다행이라는 생각을 많이 했습니다.
            </p>
        </div>
    )
}

export default LxplatformContents;