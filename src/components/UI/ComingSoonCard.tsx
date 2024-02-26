import upcoming from "../../data/upcoming";

import classes from "./ComingSoonCard.module.scss";

function ComingSoonCard() {
  return (
    <div className={classes["coming-soon"]}>
      <div className={classes.info}>
        <div className={classes.image}>
          <img src={upcoming.imgSrc} alt={upcoming.imgAlt} />
        </div>
        <div>
          <h2>{upcoming.name}</h2>
          <span>coming soon</span>
        </div>
        <div className={classes.description}>{upcoming.description}</div>
      </div>
    </div>
  );
}

export default ComingSoonCard;
