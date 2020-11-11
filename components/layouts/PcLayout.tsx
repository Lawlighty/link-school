import MyHead from "../header/MyHead";
import MyFooter from "../footer/MyFooter";
import styles from "../../styles/Home.module.css";
import { ModelContextComp } from "../../models/main";
import { BackTop } from 'antd';
import RightWindow from '../rightWindow/RightWindow'

export default function PcLayout({
  children,
  showFooter, //底部
  // showFunc,   //右侧 功能
  // showMini,   //小程序
  // showService //客服
}: {
  children: React.ReactNode;
  showFooter: boolean;
  // showFunc: boolean;
  // showMini: boolean;
  // showService: boolean;
}) {
  return (
    <ModelContextComp>
      <div className={styles.container}>
        <MyHead isLogin={false}></MyHead>

        <main>{children}</main>

        <RightWindow showFunc={true} showMini={true} showService={true}></RightWindow>

        {showFooter ? (
          //展示帮助中心...   是否为黑底
          <MyFooter props={{ showMoreFooter: true, isBlack: true }} />
        ) : (
          <MyFooter props={{ showMoreFooter: false, isBlack: false }} />
        )}
      </div>
    </ModelContextComp>
  );
}
