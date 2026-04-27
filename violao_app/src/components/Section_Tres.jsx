import styles from "../css/Section_Tres.module.css";
import Imagem from "../assets/images/maps.png";

function Section_Tres() {
  return (
    <section className={styles.section3}>
      <div className={styles.div1_section3}>
        <img src={Imagem} alt="" />
      </div>
      <div className={styles.div2_section3}>
        <h2>Nossa Loja - Instrumentos musicais</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos earum
          sunt alias labore illo sequi, quaerat autem pariatur, voluptatibus
          aperiam cum rerum nemo quisquam obcaecati accusamus nesciunt.
          Suscipit, dolor perspiciatis?
        </p>
      </div>
    </section>
  );
}

export default Section_Tres;
