import styles from "./footer.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div>Copyright &copy; Kevin Guo</div>
      <div>Powered by FourSquare API</div>
      <div>Powered by Next.js framework</div>
    </footer>
  );
}
