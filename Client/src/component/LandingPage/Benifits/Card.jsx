import style from "./style.module.css";
const Card = ({ title, description, icon, mode }) => {
  return (
    <>
      <div
        class={
          style.card +
          " " +
          (mode == "primary" ? style.card_primary : style.card_secondary)
        }
      >
        <img src={icon} alt="" />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;
