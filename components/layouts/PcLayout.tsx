import MyHead from "../header/MyHead";
import MyFooter from "../footer/MyFooter";
import styles from "../../styles/Home.module.css";

export default function PcLayout({
  children,
  showFooter,
}: {
  children: React.ReactNode;
  showFooter: boolean;
}) {
  return (
    <div className={styles.container}>
      <MyHead></MyHead>

      <main>{children}</main>

      {showFooter ? (
        // <footer className={styles.footer}>
        //   <a
        //     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     Powered by{" "}
        //     <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        //   </a>
        // </footer>
        <MyFooter props={{ showMoreFooter: false, isBlack: false }} />
      ) : null}
    </div>
  );
}
