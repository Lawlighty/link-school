import Head from "next/head";
import "./MyHead.css";
import { EllipsisOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Link from "next/link";
import { ModelContext } from "../../models/main";
import { useContext, useReducer } from "react";

const seo = {
  keywords: "领课学院的关键字",
  description: "这是领课学院",
  title: "领课学院",
};

export default function MyHead() {
  // const { model_state, model_dispatch } = useContext(ModelContext);

  console.log;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={seo.keywords} />
        <meta name="description" content={seo.description} />
        <title>{seo.title}</title>
        <link
          rel="icon"
          href="https://static-dev.roncoo.com/course/133f1c0dc6634da9a9fb67e98d8f489d.ico"
        />
      </Head>
      <div className="head-tab">
        <div className="h_header border_b">
          <div className="h_nav">
            <div className="h_logo">
              <a href="/" className="nuxt-link-active">
                <img
                  src="https://static-dev.roncoo.com/course/QXWYm2L6itxhAlAJAq11UkHRpHTvL58h.png"
                  width="auto"
                  alt=""
                />
              </a>
            </div>
            <ul className="h_nav_ul clearfix">
              <a href="/" target="_self">
                <li className="nav_item">首页</li>
              </a>
              <a href="/list" target="_self">
                <li className="nav_item">点播中心</li>
              </a>
              <a href="/live" target="_self">
                <li className="nav_item">直播中心</li>
              </a>
              <a href="/exam" target="_self">
                <li className="nav_item">试卷中心</li>
              </a>
              <a href="/resource" target="_self">
                <li className="nav_item">文库中心</li>
              </a>
              <span>
                <li
                  className="nav_item more_box"
                  aria-describedby="el-popover-3303"
                >
                  <EllipsisOutlined className="el-icon-more" />
                  <div className="clearfix more_items">
                    <div className="div1out">
                      <div className="div1" data-v-af389e24=""></div>
                    </div>
                    <ul className="clearfix more_items_ul" data-v-af389e24="">
                      <a
                        href="/info"
                        target="_self"
                        data-v-af389e24=""
                        className=""
                      >
                        <li className="more_item" data-v-af389e24="">
                          资讯中心
                        </li>
                      </a>
                      <a
                        href="/recruit"
                        target="_blank"
                        data-v-af389e24=""
                        className=""
                      >
                        <li className="more_item" data-v-af389e24="">
                          讲师招募
                        </li>
                      </a>
                      <a
                        href="/blog"
                        target="_blank"
                        data-v-af389e24=""
                        className=""
                      >
                        <li className="more_item" data-v-af389e24="">
                          博客中心
                        </li>
                      </a>
                      <a
                        href="/question"
                        target="_blank"
                        data-v-af389e24=""
                        className=""
                      >
                        <li className="more_item" data-v-af389e24="">
                          知识问答
                        </li>
                      </a>
                      <a
                        href="/vip"
                        target="_blank"
                        data-v-af389e24=""
                        className=""
                      >
                        <li className="more_item" data-v-af389e24="">
                          超级会员
                        </li>
                      </a>
                    </ul>
                  </div>
                </li>
              </span>
            </ul>
            <div className="fr nav-right">
              <div className=" search_box clearfix">
                <form action="" className="clearfix">
                  <Input
                    prefix={<SearchOutlined className="search_icon" />}
                    placeholder="请输入搜索内容"
                    // value=""
                    className="search_input"
                  />
                </form>
              </div>
              <a
                href="/recruit"
                className="nuxt-link-exact-active nuxt-link-active"
                aria-current="page"
              >
                <div className="item">讲师入驻</div>
              </a>
              <div>
                <span className="login item">登录</span>
                <Link href="/register">
                  <a className="">
                    <div className="registers item">注册</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
