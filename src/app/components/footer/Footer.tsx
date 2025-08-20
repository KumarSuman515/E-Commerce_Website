import { APP_NAME } from "@/lib/constants";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer>
    <div className={styles.container}>
      &copy; {currentYear} {APP_NAME}. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;