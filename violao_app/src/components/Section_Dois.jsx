import styles from "../css/Section_Dois.module.css";
import Imagem1 from "../assets/images/guitarrinha.jpg";

function Section_Dois() {
  return (
    <section className={styles.section2}>
      <div className={styles.div1_section2}>
        <img src={Imagem1} alt="" />
        <p>Violão Yamaha C70 II Clássico Nylon Acústico natural brilhante</p>
        <p className={styles.preco}>R$989,50</p>
      </div>
      <div id="div2_section2">
        <img src={Imagem1} alt="" />
        <p>Violão Yamaha C70 II Clássico Nylon Acústico natural brilhante</p>
        <p className={styles.preco}>R$989,50</p>
      </div>
      <div id="div4_section2">
        <img src={Imagem1} alt="" />
        <p>Violão Yamaha C70 II Clássico Nylon Acústico natural brilhante</p>
        <p className={styles.preco}>R$989,50</p>
      </div>
      <div id="div3_section2">
        <img src={Imagem1} alt="" />
        <p>Violão Yamaha C70 II Clássico Nylon Acústico natural brilhante</p>
        <p className={styles.preco}>R$989,50</p>
      </div>
    </section>
  );
}

export default Section_Dois;
