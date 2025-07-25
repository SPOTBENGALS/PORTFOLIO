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
              긍정은 언제나 해결책을 만듭니다.
              <br />
              팀워크와 부서 간 조율을 자연스럽게,
              <br />
              웃는 얼굴로 함께 일해요!
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
            <p className="text-center md:text-sm">몰입은 차분하게, 팀워크는 활기차게!</p>
          </li>
          <li className="flex h-full bg-white w-1 mx-4 md:mx-2"></li>
          <li className="flex items-center">
            <h1 className="flex items-center text-left text-4xl lg:text-3xl md:text-2xl mr-10  lg:mr-6 md:mr-5">
              Better Service <br />
              Better UX
            </h1>
            <p className="flex items-center text-right text-sm md:text-xs leading-6 ">
              불편함을 만나게 되면,
              <br />
              자연스럽게 개선을 그립니다.
              <br />
              사용자 중심 UX, 고민의 시작입니다.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoBar;
