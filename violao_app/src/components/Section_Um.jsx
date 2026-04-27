import styles from "../css/Section_Um.module.css";
import Imagem from "../assets/images/loja.jpg";

function Section_Um() {
  return (
    <section className={styles.section1} id="section1">
      <div className={styles.div1_section1}>
        <h2>Nossa Loja - Instrumentos musicais</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos earum
          sunt alias labore illo sequi, quaerat autem pariatur, voluptatibus
          aperiam cum rerum nemo quisquam obcaecati accusamus nesciunt.
          Suscipit, dolor perspiciatis?
        </p>
      </div>
      <div className={styles.div2_section1}>
        <img src={Imagem} alt="" />
      </div>
    </section>
  );
}

export default Section_Um;
