import MyHead from "../header/MyHead";
import MyFooter from "../footer/MyFooter";
import styles from "../../styles/Home.module.css";
import { ModelContextComp } from "../../models/main";

export default function PcLayout({
  children,
  showFooter,
}: {
  children: React.ReactNode;
  showFooter: boolean;
}) {
  return (
    <ModelContextComp>
      <div className={styles.container}>
        <MyHead></MyHead>

        <main>{children}</main>

        {showFooter ? (
          //展示帮助中心...   是否为黑底
          <MyFooter props={{ showMoreFooter: true, isBlack: true }} />
        ) : null}
      </div>
    </ModelContextComp>
  );
}
