import classes from "./Button.module.scss";

const Button: React.FC<{
  name: string;
  link: string;
  icon: string;
  alt: string;
}> = ({ name, link, icon, alt }) => {
  return (
    <button className={classes.button}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={alt} />
        <span>{name}</span>
      </a>
    </button>
  );
};

export default Button;
