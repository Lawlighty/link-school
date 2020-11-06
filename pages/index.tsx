import Head from "next/head";
import styles from "../styles/Home.module.css";
import PcLayout from "../components/layouts/PcLayout";
import { Button } from "antd";

export default function Home() {
  return (
    <PcLayout showFooter={true}>
      <div>这是首页</div>
      <div>
        <Button>我是按钮</Button>
      </div>
    </PcLayout>
  );
}
