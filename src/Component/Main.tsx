import { useEffect, useLayoutEffect, useRef, useState } from "react";
import image01 from "../images/upgrade.png";
import image02 from "../images/withcoworker.png";
import image03 from "../images/pileup.png";

function Main() {
  const [refBox, setRefBox] = useState(1);
  const RefBox01 = useRef<HTMLDivElement>(null);
  const RefBox02 = useRef<HTMLDivElement>(null);
  const RefBox03 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (RefBox01 && RefBox01.current && RefBox02 && RefBox02.current && RefBox03 && RefBox03.current) {
      if (refBox === 1) {
        RefBox01.current.classList.add("widthOn");
        RefBox03.current.classList.add("widthOn");
        RefBox03.current.classList.add("zIndexSecond");
        RefBox02.current.classList.remove("zIndexSecond");
        RefBox02.current.classList.remove("widthOn");
      }
      if (refBox === 2) {
        RefBox02.current.classList.add("widthOn");
        RefBox01.current.classList.add("widthOn");
        RefBox01.current.classList.add("zIndexSecond");
        RefBox03.current.classList.remove("zIndexSecond");
        RefBox03.current.classList.remove("widthOn");
      }
      if (refBox === 3) {
        RefBox03.current.classList.add("widthOn");
        RefBox02.current.classList.add("widthOn");
        RefBox02.current.classList.add("zIndexSecond");
        RefBox01.current.classList.remove("zIndexSecond");
        RefBox01.current.classList.remove("widthOn");
      }
    }
  }, [refBox]);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (refBox === 3) {
        setRefBox(1);
      } else {
        setRefBox(refBox + 1);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [refBox]);

  return (
    <div className="Main flex items-center justify-center w-full overflow-hidden">
      <div ref={RefBox01} className="RefBox bg-blue-500 widthOn">
        <div className="flex flex-col justify-center items-start px-20 lg:px-14 md:px-6 sm:px-0">
          <h2>WELCOME GUYS!</h2>
          <h1>
            안녕하세요.
            <br />
            <strong> 심지영입니다.</strong>
          </h1>
          <p>
            React, Javascript, TypeScript와 함께
            <br />프론트엔드 개발자로서 성장 중입니다.
            <br /> 디자이너 겸 HTML/CSS 기반 마크업 경력 3년,
            <br /> 현재 <b>프론트엔드 개발자 2년차로</b> 재직 중에 있습니다.
          </p>
        </div>
        <div className="flex justify-center px-20 lg:px-10 md:px-8 sm:px-0 sm:w-full sm:flex sm:justify-center">
          <img className="mr-20 lg:mr-10 md:mr-0 sm:mr-0" src={image01} alt="upgrade" />
        </div>
      </div>

      <div ref={RefBox02} className="RefBox bg-amber-500">
        <div className="flex flex-col justify-center items-start px-20 lg:px-14 md:px-6  sm:px-0">
          <h2>WORK TOGETHER</h2>
          <h1>
            웹 디자이너로
            <strong>시작했어요.</strong>
          </h1>
          <p>
            커리어의 시작은 웹 디자이너이자 마크업 개발자였습니다. <br />
            디자인 시스템을 이해하며 코드로 구현하는 데 익숙하고, <br />
            다양한 팀과 <b>원활한 협업</b>이 가능합니다. <br />
            어떤 일이든, 아는 만큼 이해하고 더 나은 결과를 만들어냅니다
          </p>
        </div>
        <div className="px-20 lg:px-10 md:px-8 sm:px-0 sm:w-full sm:flex sm:justify-center">
          <img className="mr-20 lg:mr-10 md:mr-0 sm:mr-0" src={image02} alt="withcoworker" />
        </div>
      </div>

      <div ref={RefBox03} className="RefBox bg-slate-500">
        <div className="flex flex-col justify-center items-start px-20 lg:px-14 md:px-6  sm:px-0">
          <h2>LET'S MAKE IT MINE</h2>
          <h1>
            <strong>배움의 즐거움을</strong> 아는 개발자
          </h1>
          <p>
            “배우는 게 즐겁다”는 말은 흔하지만, <br />
            저는 그 말의 진짜 의미를 실감하고 있습니다. <br />
            배움은 저에게 새로운 시야를 열어주고, <br />
            기능을 <b>직접 구현했을 때의 성취감</b>은 무엇과도 바꿀 수 없습니다. <br />
          </p>
        </div>
        <div className="px-20 lg:px-10 md:px-8 sm:px-0 sm:w-full sm:flex sm:justify-center">
          <img className="mr-20 lg:mr-10 md:mr-0 sm:mr-0" src={image03} alt="pileup" />
        </div>
      </div>
    </div>
  );
}

export default Main;
