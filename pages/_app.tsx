import 'antd/dist/antd.css';
import 'braft-editor/dist/index.css';
import "../styles/globals.css";
import '../styles/pages/index.css'; //首页
import '../styles/pages/404.css'; //404
import '../styles/pages/login.css'; //登录
import '../styles/pages/register.css'; //注册
import '../styles/pages/list/list_index.css'; //视频
import '../styles/pages/resource/resource_index.css'; //文档
import '../styles/pages/vip/vip_index.css'; //超级会员
import '../styles/pages/recruit.css'; //讲师招募
import '../styles/pages/apply.css'; //讲师招募apply
//account
import '../styles/pages/account/account_info.css'; //个人信息
import '../styles/pages/account/components/AccountLeft.css'; //个人信息

// view
import '../styles/pages/view/view.css'; //个人信息
import { AppProps } from "next/app";
import StateProviders from '../store';
//搜索
import '../styles/pages/search/search.css'; 
//讲师
import '../styles/pages/lecturer/lecturer.css'; 
//文档
import '../styles/pages/resource/resource_doc.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <StateProviders>
          <Component {...pageProps}></Component>
      </StateProviders>
  );
}

export default MyApp;
