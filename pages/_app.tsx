import 'antd/dist/antd.css';
import "../styles/globals.css";
import '../styles/pages/index.css'; //首页
import '../styles/pages/404.css'; //404
import '../styles/pages/login.css'; //登录
import '../styles/pages/register.css'; //注册
import '../styles/pages/list/list_index.css'; //视频
import '../styles/pages/resource/resource_index.css'; //文档

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
