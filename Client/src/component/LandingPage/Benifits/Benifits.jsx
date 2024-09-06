import style from "./style.module.css";
import Map from "../../../assets/Map.svg";
import Group from "../../../assets/Group.svg";
import Card from "./Card";
const Benifits = () => {
  return (
    <>
      <div class={style.benifits_section}>
        <h3>Benifits</h3>

        <div class={style.why_choose_teamup}>
          <p>Why Choose </p>
          <p class={style.teamup}>TeamUp ?</p>
        </div>

        <div class={style.card_container}>
          <Card
            title="Mentorship Opportunities"
            description="Experienced developers guide you through your projects."
            icon={Map}
            mode="primary"
          />
          <Card
            title="Mentorship Opportunities"
            description="Experienced developers guide you through your projects."
            icon={Map}
            mode="secondary"
          />
          <Card
            title="Mentorship Opportunities"
            description="Experienced developers guide you through your projects."
            icon={Map}
            mode="secondary"
          />
        </div>
      </div>
    </>
  );
};

export default Benifits;
