import style from "../style.module.css";
import headerMentorship from "../../assets/headerMentorship.svg";
import getStartedArrow from "../../assets/GetStartedArrow.png";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <h1 className={style.header_line1}>We Empower Developers Through</h1>
        <div className={style.header_line2}>
          <div className={style.collaboration_and_mentorship}>
            <div className={style.collaboration}>
              <h2>Collaboration</h2>
              <h3> &</h3>
            </div>
            <div className={style.mentorship}>
              <img src={headerMentorship} alt="wow" />
              <h3>Mentorship.</h3>
            </div>
          </div>

          <p>
            Join a dynamic platform that connects developers with skilled
            mentors for collaborative projects.
          </p>
        </div>
      </div>

      <div class={style.get_started}>
        <button>Get Started</button>
        <img src={getStartedArrow} alt="" />
      </div>
    </>
  );
};

export default Header;
