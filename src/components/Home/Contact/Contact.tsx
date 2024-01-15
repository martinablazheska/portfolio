import classes from "./Contact.module.scss";

const Contact: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div id={id} className={classes.contact}>
      <div>
        <p>Available for new job opportunities</p>
        <p>Have an exciting project that you need help with?</p>
        <p>Reach out to me!</p>
        <p className={classes.link}>
          {" "}
          <a href="mailto:blazheska.martina@gmail.com">
            blazheska.martina@gmail.com
          </a>{" "}
        </p>
        <p className={classes.link}>
          <a href="https://www.linkedin.com/in/martina-blazheska/">LinkedIn</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
