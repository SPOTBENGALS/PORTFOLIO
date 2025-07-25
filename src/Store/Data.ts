import projectImg01 from "../images/001.png";
import projectImg02 from "../images/002.png";
import projectImg03 from "../images/003.png";
import projectImg04 from "../images/004.png";
import projectImg05 from "../images/005.png";
import projectImg06 from "../images/006.png";
import projectImg07 from "../images/007.png";

export const PROJECTSDATA = [
  {
    id: 1,
    projectName: "Portfolio",
    descript: "React에 tailwindCSS를 적용한 포트폴리오 사이트입니다.",
    image: projectImg01,
    demoLink: "",
    githubLink: "https://github.com/SPOTBENGALS/PORTFOLIO",
    keyword: ["React", "Typescript", "TailwindCSS"],
  },
  {
    id: 2,
    projectName: "LocalFood",
    descript: "사내 프로젝트에서 HTML/CSS 개발을 담당하였던 반응형 사이트를 React로 재구성했습니다.",
    image: projectImg02,
    demoLink: "https://spotbengals.github.io/LocalFood/",
    githubLink: "https://github.com/SPOTBENGALS/LocalFood",
    keyword: ["React", "Typescript", "Styled-Components", "Zustand"],
  },
  {
    id: 3,
    projectName: "Mini Games",
    descript: "useMemo와 Next.js의 pre-reloading을 활용하여 웹 게임 이용에 최적화했습니다.",
    image: projectImg03,
    demoLink: "https://mini-games-tawny.vercel.app/",
    githubLink: "https://github.com/SPOTBENGALS/Mini-Games",
    keyword: ["React", "Typescript", "NextJS", "SCSS", "Varcel"],
  },
  {
    id: 4,
    projectName: "Time & Weather in the world",
    descript: "Barbel, Webpack과 함께 OpenAPI로 세계 시간과 날씨를 제공하는 사이트입니다. ",
    image: projectImg04,
    demoLink: "https://spotbengals.github.io/Time-Weather-intheworld/",
    githubLink: "https://github.com/SPOTBENGALS/Time-Weather-intheworld",
    keyword: ["React", "Babel", "Webpack", "Module-CSS"],
  },
  {
    id: 5,
    projectName: "TodoList",
    descript: "LocalStorage를 활용하여 오늘의 할일과 기본 할일 기능을 제공합니다.",
    image: projectImg05,
    demoLink: "https://spotbengals.github.io/TodoList/",
    githubLink: "https://github.com/SPOTBENGALS/TodoList",
    keyword: ["React", "Babel", "Webpack", "Typescript"],
  },
  {
    id: 6,
    projectName: "Cloud Business Site",
    descript: "사내 프로젝트에서 php 기반의 HTML/CSS(Bootstrap) 파트를 담당했던 반응형 사이트입니다.",
    image: projectImg06,
    demoLink: "http://jiyeong.dothome.co.kr/",
    githubLink: "",
    keyword: ["HTML", "Bootstrap"],
  },
];
