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
            프론트엔드 개발자가 되기 위해 <br /> React, Javascript, TypeScript를 배워온
            <br /> HTML/CSS 개발 3년 경력의 28세 심지영이라고 합니다.
            <br /> 현재 SI 업체에서 <b>프론트엔드 개발자 7개월차</b> 근무 중입니다.
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
            처음 웹 디자이너이자 마크업 개발자로 시작했어요.
            <br />
            그래서 마크업 개발을 할 때에도 디자이너와 <b>편안히 소통</b>했어요.
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
            <strong>배우는 것이 즐겁다고 하면</strong>
            진부할까요?
          </h1>
          <p>
            모든 개발자들의 단골 멘트인 것 같아요.
            <br />
            하지만 이제는 그분들의 마음을 확실히 알아요!
            <br />
            배우면 배울수록 더 많은 길을 열고
            <br />
            <b>내 것으로 만드는 기쁨</b>은 무엇보다도 성취감이 들죠!
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
