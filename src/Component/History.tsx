import { useEffect, useRef } from "react";

function History() {
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function observerCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (historyRef && historyRef.current) {
            historyRef.current.classList.add("action");
          }
        }
      });
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (historyRef.current) {
      observer.observe(historyRef.current);
    }
  }, []);

  return (
    <div
      ref={historyRef}
      className="History flex items-center justify-center w-full px-2 pt-16 pb-40 sm:py-5 md:pl-2 md:pr-2 md:pt-2 md:pb-12 sm:pb-80"
    >
      <div className="flex flex-col justify-between items-start w-10/12 md:w-full sm:w-full px-5 py-2 ">
        <h1 className="Title">History</h1>
        <p className="text-lg lg:text-base md:text-sm sm:text-sm text-gray-600">
          항상 흥미를 연료로 하여 추진력이 좋은 편입니다. <br /> 제품 디자인 전공에서 그래픽 디자이너, 웹 디자이너,
          마크업 개발자, 프론트엔드 개발자까지 끊임없이 발전하고 있으며,
          <br />
          언젠가 React를 넘어 Vue, 다양한 라이브러리들까지 앞으로도 계속 도전하고 싶습니다.
        </p>
        <div className="w-full relative">
          <div className="Line sm:absolute sm:top-0 sm:left-10">
            <div className="Dot left-0 bg-black">
              <p className="left-0">
                <strong> U.S California JS Apparel Inc.</strong>
                <br /> Graphic Designer <br />
                인턴쉽 1년
                <br />
                [2016.3 - 2017.2]
              </p>
            </div>
            <div className="Dot left-1/4 bg-blue-700">
              <p className="left-1/4 ">
                그린아카데미 <br />
                <strong>UX/UI 웹 퍼블리셔 과정 수료</strong>
                <br />
                + 웹디자인 기능사 자격증 취득
                <br />
                [2018.3 - 2018.9]
              </p>
            </div>
            <div className="Dot left-2/4 bg-black">
              <p className="left-2/4 ">
                <strong>주식회사 레드마우스</strong>
                <br />
                UX/UI 디자이너 &
                <br />
                마크업 개발자 3년 6개월
                <br />
                [2018.12 - 2022.5]
              </p>
            </div>
            <div className="Dot left-3/4 bg-blue-700">
              <p className="left-3/4">
                제로베이스
                <br />{" "}
                <strong>
                  프론트엔드 스쿨 4기 <br />
                  부트캠프 수료
                </strong>
                <br />
                [2022.6 - 2022.12]
              </p>
            </div>
            <div className="Dot left-full bg-blue-700">
              <p className="left-full">
                주식회사 제타럭스시스템
                <br /> <strong>프론트엔드 개발자</strong>
                <br />
                [2023.10 - 현재]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
