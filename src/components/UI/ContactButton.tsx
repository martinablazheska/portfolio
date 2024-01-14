import classes from "./ContactButton.module.scss";

const ContactButton: React.FC<{
  link: string;
  icon: string;
  alt: string;
}> = ({ link, icon, alt }) => {
  return (
    <button className={classes.button}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={alt} />
      </a>
    </button>
  );
};

export default ContactButton;
