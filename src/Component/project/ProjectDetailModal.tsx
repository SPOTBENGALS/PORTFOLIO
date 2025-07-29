import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import LxplatformContents from "./projectContents/LxplatformContents";
import FloodDTContents from "./projectContents/FloodDTContents";
import VoteContents from "./projectContents/VoteContents";


function ProjectDetailModal ({name , onClose} : {
    name : string, 
    onClose : () => void
}) {

    useEffect(() => {
        // 모달 열릴 때 스크롤 막기
        document.body.style.overflow = 'hidden';

        // 모달 닫힐 때 스크롤 다시 활성화
        return () => {
        document.body.style.overflow = 'unset';
        document.body.style.overflowX = 'hidden';
        };
    }, []);

    return (
    <div className="dimmed" onClick={onClose}>
        <div className="ModalLayout" onClick={(e) => e.stopPropagation()}>
            <div className="ModalHeader">
                <h2>{name}</h2>
                <MdClose  onClick={onClose} />
            </div>
            <div className="ModalBody">
                {name == '공공기관 GIS 분석 시스템' && <LxplatformContents />} 
                {name == '도시침수 대응 시스템' && <FloodDTContents />}
                {name == '노후계획도시 주민 투표 서비스' && <VoteContents />}
            </div>
        </div>
    </div>
    )
}

export default ProjectDetailModal;