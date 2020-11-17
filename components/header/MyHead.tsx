import Head from "next/head";
import "./MyHead.css";
import {
    EllipsisOutlined,
    SearchOutlined,
    CaretUpOutlined,
} from '@ant-design/icons';
import { Input } from "antd";
import Link from "next/link";
import { ModelContext,UPDATE_HEADER_INDEX } from "../../models/main";
import { useContext, useReducer, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { HeaderIndexer } from '../../models/main_unstated';

const seo = {   
  keywords: "领课学院的关键字",
  description: "这是领课学院",
  title: "领课学院",
};

export default function MyHead({ isLogin }: { isLogin: boolean }) {
    let router = useRouter();
    const [headerIndexer, setHeaderIndexer] = useState(
        HeaderIndexer.useContainer(),
    );
    const [header_index, setHeaderIndex] = useState(headerIndexer.headerIndex);
  useEffect(() => {
    //   console.log('当前的headerIndexer', headerIndexer);
    //   console.log('当前的header_index', header_index);
    //   console.log('当前的router', router);
  }, [header_index, router]);

    const headerSkip = (target: number) => {
      console.log('现在的currentIndex', header_index);
    if ( header_index === target) {
      return
    }
    if(1) {
      switch (target) {
        case 0:
              headerIndexer.changeCurrentHeaderIndex(0,'/')
              console.log('进入首页')
        //   router.push('/');
          break
        case 1:
              headerIndexer.changeCurrentHeaderIndex(1, 'list');
               console.log('进入视频');
        //   router.push('/list');
          break;
        //   case 2:
        //        headerIndexer.changeCurrentHeaderIndex(2);
        //   router.push('/');
        //   break;
        //   case 3:
        //        headerIndexer.changeCurrentHeaderIndex(3);
        //   router.push('/');
        //   break;
        //   case 0:
        //        headerIndexer.changeCurrentHeaderIndex(4);
        //   router.push('/');
        //   break;
        // case 0:
        //   router.push('/');
        //   break;
      }
    }
  }
  return (
      <>
          <Head>
              <meta charSet="UTF-8" />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
              />
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
                          {/* <Link href="/"> */}
                          <a
                              //   href="#!"
                              target="_self"
                              onClick={() => headerSkip(0)}
                          >
                              <li
                                  className={[
                                      'nav_item',
                                      header_index === 0 ? 'active' : '',
                                  ].join(' ')}
                              >
                                  首页
                              </li>
                          </a>
                          {/* </Link> */}
                          {/* <Link href="/list"> */}
                          <a
                              //   href="#!"
                              target="_self"
                              onClick={() => headerSkip(1)}
                          >
                              <li
                                  className={[
                                      'nav_item',
                                      header_index === 1 ? 'active' : '',
                                  ].join(' ')}
                              >
                                  视频
                              </li>
                          </a>
                          {/* </Link> */}
                          <a href="/resource" target="_self">
                              <li
                                  className={[
                                      'nav_item',
                                      header_index === 2 ? 'active' : '',
                                  ].join(' ')}
                              >
                                  文档
                              </li>
                          </a>
                          <a href="/list" target="_self">
                              <li
                                  className={[
                                      'nav_item',
                                      header_index === 3 ? 'active' : '',
                                  ].join(' ')}
                              >
                                  论坛
                              </li>
                          </a>
                          <span>
                              <li
                                  style={{ display: 'none' }}
                                  className="nav_item more_box"
                                  aria-describedby="el-popover-3303"
                              >
                                  <EllipsisOutlined className="el-icon-more" />
                                  <div className="clearfix more_items">
                                      <div className="div1out">
                                          <div className="div1"></div>
                                      </div>
                                      <ul className="clearfix more_items_ul">
                                          <a
                                              href="/info"
                                              target="_self"
                                              className=""
                                          >
                                              <li className="more_item">
                                                  资讯中心
                                              </li>
                                          </a>
                                          <a
                                              href="/recruit"
                                              target="_blank"
                                              className=""
                                          >
                                              <li className="more_item">
                                                  讲师招募
                                              </li>
                                          </a>
                                          <a
                                              href="/blog"
                                              target="_blank"
                                              className=""
                                          >
                                              <li className="more_item">
                                                  博客中心
                                              </li>
                                          </a>
                                          <a
                                              href="/question"
                                              target="_blank"
                                              className=""
                                          >
                                              <li className="more_item">
                                                  知识问答
                                              </li>
                                          </a>
                                          <a
                                              href="/vip"
                                              target="_blank"
                                              className=""
                                          >
                                              <li className="more_item">
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
                                      prefix={
                                          <SearchOutlined className="search_icon" />
                                      }
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
                          {!isLogin ? (
                              <div>
                                  <Link href="/login">
                                      <a className="">
                                          <span className="login item">
                                              登录
                                          </span>
                                      </a>
                                  </Link>
                                  <Link href="/register">
                                      <a className="">
                                          <div className="registers item">
                                              注册
                                          </div>
                                      </a>
                                  </Link>
                              </div>
                          ) : (
                              <div>
                                  <Link href="/account/message">
                                      <a className="">
                                          <img
                                              src="/imgs/邮件.png"
                                              alt=""
                                              className="item"
                                          />
                                          {/* <span className="login item">通知</span> */}
                                      </a>
                                  </Link>

                                  <div className="mine">
                                      <img
                                          src="/imgs/头像.png"
                                          alt=""
                                          className="item"
                                          onClick={() => {
                                              router.push('/account/info');
                                          }}
                                      />
                                      <div className="mine_more_items">
                                          <ul
                                              className="clearfix more_items_ul"
                                              style={{
                                                  position: 'relative',
                                              }}
                                          >
                                              <CaretUpOutlined className="mine_circle" />
                                              <a
                                                  href="/vip"
                                                  target="_blank"
                                                  className=""
                                              >
                                                  <li className="more_item">
                                                      超级会员
                                                  </li>
                                              </a>
                                              <Link href="/login">
                                                  <a
                                                      className=""
                                                  >
                                                      <li className="more_item">
                                                          退出登录
                                                      </li>
                                                  </a>
                                              </Link>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
