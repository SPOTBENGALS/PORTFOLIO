function InfoBar() {
  return (
    <div className="InfoBar flex items-center justify-center w-full text-white px-2 pt-3 pb-2 sm:pb-6 border-solid border-b-2">
      <div className="flex w-10/12 lg:w-full md:w-full px-5 py-8 md:py-5 sm:hidden">
        <ul className="flex justify-between items-center w-full">
          <li className="flex items-center">
            <h1 className="flex items-center text-left text-4xl lg:text-3xl md:text-2xl mr-10 lg:mr-6 md:mr-5">
              Positive
              <br />
              Power
            </h1>
            <p className="flex items-center text-left text-sm md:text-xs leading-6">
              긍정적으로 생각하면 길이 보여요!
              <br />
              타고난 긍정적 에너지로
              <br />
              협업과 부서 간 조율에 시너지를!
              <br />
            </p>
          </li>
          <li className="flex h-full bg-white w-1 mx-4 md:mx-2"></li>
          <li className="flex flex-col">
            <h1 className="flex justify-center items-center text-5xl lg:text-4xl md:text-3xl pb-2 mb-2 border-b-2">
              Active
              <br />
              <span className="text-sm mt-3 px-3">but </span>
              calm
            </h1>
            <p className="text-center md:text-sm">즐길 땐 활발하게!! + 일할 땐 차분하게.</p>
          </li>
          <li className="flex h-full bg-white w-1 mx-4 md:mx-2"></li>
          <li className="flex items-center">
            <h1 className="flex items-center text-left text-4xl lg:text-3xl md:text-2xl mr-10  lg:mr-6 md:mr-5">
              Better UI <br />
              Better UX
            </h1>
            <p className="flex items-center text-right text-sm md:text-xs leading-6 ">
              불편해보이는 서비스 화면을 보면
              <br />
              어떻게 최적화 할 수 있을까 머릿속에서
              <br />
              시뮬레이션을 돌리는게 습관이에요.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoBar;
