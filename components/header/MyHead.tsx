import Head from "next/head";
import "./MyHead.css";
import {
    EllipsisOutlined,
    SearchOutlined,
    CaretUpOutlined,
} from '@ant-design/icons';
import { Input } from "antd";
import Link from "next/link";
import { useContext, useReducer, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import HeaderIndexer from '../../store/headerIndex';
import AccountState from '../../store/accountinfo';

const seo = {
    keywords: '极课学院的关键字',
    description: '这是极课学院',
    title: '极课学院',
    icon:
        'https://static-dev.roncoo.com/course/133f1c0dc6634da9a9fb67e98d8f489d.ico',
};

const { Search } = Input;
export default function MyHead({
    customSeo,
    showHeader,
    isLogin,
}: {
    customSeo: any;
    showHeader: boolean;
    isLogin: boolean;
}) {
    let router = useRouter();
    // const [headerIndexer, setHeaderIndexer] = useState(
    //     HeaderIndexer.useContainer(),
    // );
    const headerIndexer = HeaderIndexer.useContainer();
    const accountState = AccountState.useContainer();

    useEffect(() => {
        if (router.route === '/') {
            headerIndexer.changeCurrentHeaderIndex(0);
        } else if (router.route === '/list') {
            headerIndexer.changeCurrentHeaderIndex(1);
        } else if (router.route === '/resource') {
            headerIndexer.changeCurrentHeaderIndex(2);
        } else {
            headerIndexer.changeCurrentHeaderIndex(10);
        }
    }, []);
    const headerSkip = (target: number) => {
        console.log('现在页面的currentIndex', headerIndexer.headerIndex);
        console.log('现在页面的目标index', target);
        if (headerIndexer.headerIndex === target) {
            return;
        }
        if (1) {
            switch (target) {
                case 0:
                    headerIndexer.changeCurrentHeaderIndex(0);
                    console.log('进入首页');
                    router.push('/');
                    break;
                case 1:
                    headerIndexer.changeCurrentHeaderIndex(1);
                    console.log('进入视频');
                    router.push('/list');
                    break;
                case 2:
                    headerIndexer.changeCurrentHeaderIndex(2);
                    console.log('进入文档');
                    router.push('/resource');
                    break;
            }
        }
    };
    const toLogout=() => {
        accountState.clearAccount();
        router.push('/login')
    }
    const onKeyup = (e) => {
        console.log('onKeyup', e.target.value);
         if (e.keyCode === 13 && e.target.value) {
             router.push('/search/' + e.target.value);
         }
    }
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="Access-Control-Allow-Origin" content="*" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="keywords"
                    content={
                        customSeo && customSeo.keywords
                            ? customSeo.keywords
                            : seo.keywords
                    }
                />
                <meta
                    name="description"
                    content={
                        customSeo && customSeo.description
                            ? customSeo.description
                            : seo.description
                    }
                />
                <title>
                    {customSeo && customSeo.title ? customSeo.title : seo.title}{' '}
                </title>
                <link
                    rel="icon"
                    href={
                        customSeo && customSeo.icon ? customSeo.icon : seo.icon
                    }
                />
            </Head>
            {showHeader ? (
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
                                <Link href="/">
                                    <a target="_self">
                                        <li
                                            className={[
                                                'nav_item',
                                                headerIndexer.headerIndex === 0
                                                    ? 'active'
                                                    : '',
                                            ].join(' ')}
                                        >
                                            首页
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/list">
                                    <a target="_self">
                                        <li
                                            className={[
                                                'nav_item',
                                                headerIndexer.headerIndex === 1
                                                    ? 'active'
                                                    : '',
                                            ].join(' ')}
                                        >
                                            视频
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/resource">
                                    <a target="_self">
                                        <li
                                            className={[
                                                'nav_item',
                                                headerIndexer.headerIndex === 2
                                                    ? 'active'
                                                    : '',
                                            ].join(' ')}
                                        >
                                            文档
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/forum">
                                    <a  target="_self">
                                        <li
                                            className={[
                                                'nav_item',
                                                headerIndexer.headerIndex === 3
                                                    ? 'active'
                                                    : '',
                                            ].join(' ')}
                                        >
                                            论坛
                                        </li>
                                    </a>
                                </Link>
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
                                <div className=" search_box ">
                                    <Input
                                        prefix={
                                            <SearchOutlined className="search_icon" />
                                        }
                                        placeholder="请输入搜索内容"
                                        // value=""
                                        className="search_input"
                                        onKeyUp={onKeyup}
                                    />
                                </div>
                                <Link href="/recruit">
                                    <a className="">
                                        <div className="item">讲师入驻</div>
                                    </a>
                                </Link>

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
                                                src={
                                                    accountState.account
                                                        .profilephoto
                                                        ? accountState.account
                                                              .profilephoto
                                                        : '/imgs/头像 (1).png'
                                                }
                                                alt=""
                                                className="item"
                                                onClick={() => {
                                                    router.push(
                                                        '/account/info',
                                                    );
                                                }}
                                                style={{ borderRadius: '50%' }}
                                            />
                                            <div className="mine_more_items">
                                                <ul
                                                    className="clearfix more_items_ul"
                                                    style={{
                                                        position: 'relative',
                                                    }}
                                                >
                                                    <CaretUpOutlined className="mine_circle" />
                                                    <Link href="/vip">
                                                        <a
                                                            target="_blank"
                                                            className=""
                                                        >
                                                            <li className="more_item">
                                                                超级会员
                                                            </li>
                                                        </a>
                                                    </Link>

                                                    <a
                                                        onClick={toLogout}
                                                        className=""
                                                    >
                                                        <li className="more_item">
                                                            退出登录
                                                        </li>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
