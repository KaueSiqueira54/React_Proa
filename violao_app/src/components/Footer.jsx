import styles from "../css/Footer.module.css";
import Whats from "../assets/images/whats.jpg";
import Face from "../assets/images/face.png";
import Insta from "../assets/images/insta.png";

function Footer() {
  return (
    <footer>
      <div className={styles.container_footer}>
        <p>Nossa loja - Instrumentos musicais</p>
        <p>
          Rua tito 54 - Lapa <br />
          São Paulo - Brasil
        </p>
        <div className={styles.container_img_footer}>
          <img src={Whats} alt="" />
          <img src={Face} alt="" />
          <img src={Insta} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
