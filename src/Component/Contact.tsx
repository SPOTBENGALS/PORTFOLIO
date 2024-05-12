import { BiLogoGithub } from "react-icons/bi";
import { AiFillWechat } from "react-icons/ai";

function Contact() {
  return (
    <div className="Contact flex items-center justify-center w-full px-2 pt-8 pb-4 md:pl-2 md:pr-2 md:py-2">
      <div className="flex flex-col justify-between items-start w-10/12 md:w-full sm:w-full px-5 py-2">
        <h1 className="Title text-white">Contact</h1>
        <div className="flex sm:flex-col w-full justify-between">
          <div className="flex flex-col border-l-2 text-lg  my-10 lg:my-5 pl-5 text-white">
            <h2 className="font-bold">Sim Ji Yeong</h2>
            <p className="mt-5">
              <span className="inline-flex font-light w-24">BIRTH</span>1996.01.11
              <br />
              <span className="inline-flex font-light w-24">PHONE</span>010-4130-6301
              <br />
              <span className="inline-flex font-light w-24">EMAIL</span>wldud455@naver.com
            </p>
          </div>
          <div className="flex sm:flex-col justify-between items-baseline sm:items-start my-10 lg:my-5">
            <a
              className="flex items-center mt-auto py-2 border-b-2 text-white hover:text-slate-950 hover:border-slate-950"
              href="https://github.com/SPOTBENGALS"
              target="blank"
            >
              <BiLogoGithub className="mr-2 text-2xl" />
              Visit Github Profile
            </a>
            <a
              className="flex items-center mt-auto sm:mt-10 ml-20 sm:ml-0 py-2 border-b-2 text-white hover:text-slate-950 hover:border-slate-950"
              href="https://open.kakao.com/o/s0PHq6Ef"
              target="blank"
            >
              <AiFillWechat className="mr-2 text-2xl" />
              Visit Kakao 1:1 Open Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
