import img01 from '../../../images/project/flood01.png'
import img02 from '../../../images/project/flood02.png'
import img03 from '../../../images/project/flood03.png'
import img04 from '../../../images/project/flood04.png'
import img05 from '../../../images/project/flood05.png'
import img06 from '../../../images/project/flood06.png'
import img07 from '../../../images/project/flood07.png'
import img08 from '../../../images/project/flood08.png'


const FloodDTContents = () => {
    return (
        <div className="ProjectModalContents">
            <p>
                공공기관의 도시침수 대응 시스템의 3차 고도화 프로젝트로, Thymeleaf를 활용한 DT 플랫폼과 React로 구현된 관리자 시스템, 모바일 웹앱 현장 점검 서비스가 있습니다.<br/>
            </p>
            <h4>개요</h4>
            <p>프로젝트 참여 기간 : 2024년 6월 ~ 2025년 3월</p>
            <p>
                수십개의 회사가 협업한 프로젝트로, 데이터 연계와 모바일 서비스를 제외하고 각 플랫폼에서 일부를 맡아 수행했습니다.<br/>
                모바일 서비스는 계측기 관리 점검원을 위한 점검 서비스로, 계측기 위치, 목록, 계측 이력 조회, 점검 표 작성, 작성 이력을 제공합니다. <br/>
                DT 플랫폼에서 저희가 맡았던 파트는 펌프장과 전광판, 마을 방송 시설로, 실시간 펌프장, 시설물 상태 조회, 펌프장 상세 정보, 이력 조회를 구현했습니다. <br/>
                관리자에서는 연계 데이터 로그 조회와 계측기 정보에 대한 오픈 API 신청, 제공, 관리 기능과 모바일 서비스와 연계되는 현장 점검 관리 기능, 시설물 컨트롤을 맡아 구현했습니다. 
            </p>

            <h4>주요 구현 기능</h4>
            <p> · DT 플랫폼 : thymeleaf를 활용한 펌프장, 전광판, 마을방송 시설 리스트 호출, 펌프장 데이터 VO별 데이터 연결 로직 구현, 레이어 그룹별 온오프 구현 <br/>
                · 관리자 플랫폼 : React, Zustand, React-Query를 활용한 검색 시스템 전역 관리와 API 의존성에 따른 자동 갱신, 데이터 캐싱 구현 <br/>
                · 모바일 현장 점검 서비스 : <br/>
                &nbsp; - 반응형 웹앱, 관리자 플랫폼의 로그인 API 연결, useLocation을 활용한 라우팅 간 데이터 전달, qr-scanner 라이브러리를 통한 계측기 상세 페이지 연결<br/>
                &nbsp; - 지도 및 마커 : KakaoMap을 활용한 다중 마커 생성과 클러스터러, 실시간 사용자 위치 조회 및 지도 영역 내 계측기 목록 재호출, 실시간 위치와 마커의 거리 기반 라우팅 접근 제한<br/>
                &nbsp; - 현장 점검표 : 트리형 구조 데이터를 활용한 점검표 구현 및 항목 별 메모 시스템 구현, 점검 전후 사진 등록 구현<br/>
                &nbsp; - 계측기 목록 및 상세 : 계측기 목록 호출 및 검색 기능 구현, 계측기 상세 조회 및 계측 이력 기간 조회 API 연결
            </p>
            <div className="exampleImgs">
                <img src={img01} alt="img01" draggable="false" onContextMenu={(e) => e.preventDefault()}/>
                <img src={img02} alt="img02" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                <img src={img03} alt="img03" draggable="false" onContextMenu={(e) => e.preventDefault()}/>
                <img src={img04} alt="img04" draggable="false" onContextMenu={(e) => e.preventDefault()}/>
                <img src={img05} alt="img05" draggable="false" onContextMenu={(e) => e.preventDefault()}/>
                <img src={img06} alt="img06" draggable="false" onContextMenu={(e) => e.preventDefault()}/>
                <img src={img07} alt="img07" draggable="false" onContextMenu={(e) => e.preventDefault()}/>
                <img src={img08} alt="img08" draggable="false" onContextMenu={(e) => e.preventDefault()}/>
            </div>
            {/* <h4>프로젝트 기술 스택</h4>
            <p>Java, Tomcat, JSP, Javascript</p> */}
            <h4>협업 경험</h4>
            <p>
                수십개의 회사가 함께 협업하는 프로젝트이다보니 배울 점이 많았습니다. <br/>
                다른 회사에서 구현한 코드를 통해 처음 접하는 Thymeleaf나 React-Query 등 다양한 라이브러리와 로직을 경험할 수 있어 좋은 기회였다 생각합니다. <br/> 
                무엇보다 React-Query를 실무에 적용하는데에 있어서 실제 레퍼런스를 참고하며 배우다 보니 손쉽게 배울 수 있어 다행이라는 생각이 많이 들었습니다. <br/>
            </p>
            <h4>회고</h4>
            <p>
                이번 프로젝트는 백엔드 연계 범위가 넓은 만큼, 프론트엔드 파트는 비교적 자율적인 환경에서 작업할 수 있었습니다.
                그 덕분에 반복되는 FTP 배포 테스트, 펌프장별 테이블에 따른 VO 처리 로직, 계측기 점검 기능의 인터랙션 등 프론트엔드 고유의 세부 구현에 집중할 수 있었습니다.

                또한 React Query를 실무에 처음 적용하면서, 데이터 캐싱 전략과 API 응답 간 의존성 처리 방식을 경험할 수 있었던 점도 개인적으로 큰 수확이었습니다.
                덕분에 이후 프로젝트에서는 상태관리 도구와의 결합 구조를 어떻게 구성할지에 대한 감이 생겼고, 추후 컴포넌트 설계나 API 협의에도 자신감을 가질 수 있게 되었습니다.
            </p>
        </div>
    )
}

export default FloodDTContents;