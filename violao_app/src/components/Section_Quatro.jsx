import styles from "../css/Section_Quatro.module.css";
import Whats from "../assets/images/whats.jpg";
import Face from "../assets/images/face.png";
import Insta from "../assets/images/insta.png";

function Section_Quatro() {
  return (
    <section className={styles.section4}>
      <div className={styles.div1_section4}>
        <label for="text">Entre com o seu nome:</label>
        <input type="text" placeholder="Digite seu nome" />
        <label for="text">Entre com o seu email:</label>
        <input type="text" placeholder="Digite seu email" />

        <label for="text"></label>
        <input
          className={styles.pedido}
          type="text"
          placeholder="faça seu pedido por aqui"
        />
        <button>Enviar</button>
      </div>
      <div className={styles.div2_section4}>
        <p>Acesse também nossas redes sociais</p>
        <div class={styles.container_img}>
          <img src={Whats} alt="" />
          <img src={Face} alt="" />
          <img src={Insta} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section_Quatro;
