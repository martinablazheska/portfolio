import aboutMe from "../../../data/about";

import profilePhoto from "../../../assets/profile.jpg";
import emailIcon from "../../../assets/email-icon.svg";
import githubIcon from "../../../assets/github-icon.svg";
import linkedinIcon from "../../../assets/linkedin-icon.svg";

import ContactButton from "../../UI/ContactButton";

import classes from "./About.module.scss";

const About: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className={classes.about} id={id}>
      <h1>About Me</h1>
      <div className={classes["about-container"]}>
        <div className={classes.profile}>
          <img
            className={classes.photo}
            src={profilePhoto}
            alt="Profile photo"
          />

          <div className={classes.links}>
            <ContactButton
              icon={emailIcon}
              link="mailto:blazheska.martina@gmail.com"
              alt="Email"
            />
            <ContactButton
              icon={githubIcon}
              link="https://github.com/martinablazheska"
              alt="Github"
            />
            <ContactButton
              icon={linkedinIcon}
              link="https://www.linkedin.com/in/martina-blazheska-9b1a92225/"
              alt="Linked In"
            />
          </div>
        </div>
        <div className={classes.story}>
          {aboutMe.map((p) => (
            <p key={p.id}>{p.paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
