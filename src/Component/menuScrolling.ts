export default function menuScrolling(e: React.MouseEvent<HTMLLIElement>) {
  console.log(window.innerWidth);
  if (window.innerWidth > 1279) {
    if (e.currentTarget.innerHTML === "Project") {
      window.scrollTo({ top: 850, behavior: "smooth" });
    }

    if (e.currentTarget.innerHTML === "History") {
      window.scrollTo({ top: 1700, behavior: "smooth" });
    }
    if (e.currentTarget.innerHTML === "Contact") {
      window.scrollTo({ top: 2000, behavior: "smooth" });
    }
  } else if (window.innerWidth > 1023) {
    if (e.currentTarget.innerHTML === "Project") {
      window.scrollTo({ top: 650, behavior: "smooth" });
    }

    if (e.currentTarget.innerHTML === "History") {
      window.scrollTo({ top: 2300, behavior: "smooth" });
    }
    if (e.currentTarget.innerHTML === "Contact") {
      window.scrollTo({ top: 2500, behavior: "smooth" });
    }
  } else if (window.innerWidth > 767) {
    if (e.currentTarget.innerHTML === "Project") {
      window.scrollTo({ top: 580, behavior: "smooth" });
    }
    if (e.currentTarget.innerHTML === "History" || e.currentTarget.innerHTML === "Contact") {
      window.scrollTo({ top: 2100, behavior: "smooth" });
    }
  } else {
    if (e.currentTarget.innerHTML === "Project") {
      window.scrollTo({ top: 530, behavior: "smooth" });
    }
    if (e.currentTarget.innerHTML === "History") {
      window.scrollTo({ top: 3320, behavior: "smooth" });
    }
    if (e.currentTarget.innerHTML === "Contact") {
      window.scrollTo({ top: 4000, behavior: "smooth" });
    }
  }
}
