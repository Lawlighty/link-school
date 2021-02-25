import PcLayout from '../../components/layouts/PcLayout';
import { Input, Avatar, Pagination, Affix, message } from 'antd';
import { useState, useEffect } from 'react';
import {
    AppstoreFilled,
    FireFilled,
    StarFilled,
    EyeOutlined,
    CommentOutlined,
} from '@ant-design/icons';
import { withRouter } from 'next/router';
import { getWeekDate } from '../../utils/utils';
import AccountState from '../../store/accountinfo';



const Question = ({ router }) => {
    const accountState = AccountState.useContainer();
    const [top, setTop] = useState(90);
    const [currentIndex, setCurrentIndex] = useState(0);

    const rmtj2 = [
        {
            ranking: 1,
            name: '超全！2020年互联网大厂薪资和职级一览',
        },
        {
            ranking: 2,
            name: '微信小程序从基础到实战',
        },
        {
            ranking: 3,
            name: 'TypeScript Handbook',
        },
    ];

    const posts = [
        {
            title: 'JAVA 学习路线老哥提供一下',
            href: '/forum/1',
            avatar: '',
            auther: '￥絶境逢生￥',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 45,
            talks: 22,
        },
        {
            title: 'node.js 有啥东西',
            href: '/forum/2',
            avatar:
                'https://api.jikipedia.com/upload/ccf299950da5409ccb9109e6068be0ee_scaled_avatar.jpg',
            auther: '爷傲奈我何',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 25,
            talks: 42,
        },
        {
            title: 'PHP是世界上最好的语言',
            href: '/forum/3',
            avatar:
                'https://feed-image.baidu.com/0/pic/327375c109b2776581ca9179205f1b37.jpg',
            auther: '乱世佳人',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 456,
            talks: 28,
        },
        {
            title: 'JAVA 学习路线老哥提供一下',
            href: '/forum/1',
            avatar: '',
            auther: '￥絶境逢生￥',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 45,
            talks: 22,
        },
        {
            title: 'node.js 有啥东西',
            href: '/forum/2',
            avatar:
                'https://api.jikipedia.com/upload/ccf299950da5409ccb9109e6068be0ee_scaled_avatar.jpg',
            auther: '爷傲奈我何',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 25,
            talks: 42,
        },
        {
            title: 'PHP是世界上最好的语言',
            href: '/forum/3',
            avatar:
                'https://feed-image.baidu.com/0/pic/327375c109b2776581ca9179205f1b37.jpg',
            auther: '乱世佳人',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 456,
            talks: 28,
        },
        {
            title: 'JAVA 学习路线老哥提供一下',
            href: '/forum/1',
            avatar: '',
            auther: '￥絶境逢生￥',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 45,
            talks: 22,
        },
        {
            title: 'node.js 有啥东西',
            href: '/forum/2',
            avatar:
                'https://api.jikipedia.com/upload/ccf299950da5409ccb9109e6068be0ee_scaled_avatar.jpg',
            auther: '爷傲奈我何',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 25,
            talks: 42,
        },
        {
            title: 'PHP是世界上最好的语言',
            href: '/forum/3',
            avatar:
                'https://feed-image.baidu.com/0/pic/327375c109b2776581ca9179205f1b37.jpg',
            auther: '乱世佳人',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 456,
            talks: 28,
        },
    ];

    const onChangePage = (page) => {
        console.log('page', page);
    };


    //发帖
    const toPostPage = () => {
        if (accountState.account.isLogin) {
            router.push('/forum/EditPost');
        }
        else {
            router.push('/login?from=/forum');
        }
    }
    return (
        <PcLayout
            showHeader={true}
            customSeo={null}
            showFooter={true}
            isBlack={false}
        >
            <div className="forum_page">
                <div className="forum_body flex">
                    <div className="flex_1 forum_div">
                        <div className="form_head">
                            <ul className="form_head_ul">
                                <li
                                    style={{ border: 'none' }}
                                    className={[
                                        'flex_r_a',
                                        currentIndex === 0 ? 'c_red' : '',
                                    ].join(' ')}
                                    onClick={() => {
                                        setCurrentIndex(0);
                                    }}
                                >
                                    <AppstoreFilled
                                        style={{
                                            marginRight: '10px',
                                            fontSize: '20px',
                                        }}
                                    />
                                    全部
                                </li>
                                <li
                                    className={[
                                        'flex_r_a',
                                        currentIndex === 1 ? 'c_red' : '',
                                    ].join(' ')}
                                    onClick={() => {
                                        setCurrentIndex(1);
                                    }}
                                >
                                    <FireFilled
                                        style={{
                                            marginRight: '10px',
                                            fontSize: '20px',
                                        }}
                                    />
                                    精华
                                </li>
                                <li
                                    className={[
                                        'flex_r_a',
                                        currentIndex === 2 ? 'c_red' : '',
                                    ].join(' ')}
                                    onClick={() => {
                                        setCurrentIndex(2);
                                    }}
                                >
                                    <StarFilled
                                        style={{
                                            marginRight: '10px',
                                            fontSize: '20px',
                                        }}
                                    />
                                    推荐
                                </li>
                            </ul>
                        </div>

                        <div className="post_items">
                            {posts.map((item, index) => (
                                <div className="post_item" key={index}>
                                    <div className="user_img_div">
                                        <img
                                            src={
                                                item.avatar
                                                    ? item.avatar
                                                    : 'https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg'
                                            }
                                            alt=""
                                            className="user_img"
                                        />
                                    </div>
                                    <div className="post_item_body flex_1">
                                        <div
                                            className="post_item_body_title"
                                            onClick={() => {
                                                router.push(item.href);
                                            }}
                                        >
                                            【标签】{item.title}
                                        </div>
                                        <div className="post_item_body_info">
                                            <div>
                                                作者：{item.auther}
                                                <span
                                                    style={{
                                                        display: 'inline-block',
                                                        margin: '0 10px',
                                                    }}
                                                >
                                                    |
                                                </span>
                                                最新回帖：{item.last_back}
                                            </div>
                                            <div>
                                                <EyeOutlined
                                                    style={{
                                                        margin: '0 10px 0 20px',
                                                    }}
                                                />
                                                {item.looks}
                                                <CommentOutlined
                                                    style={{
                                                        margin: '0 10px 0 20px',
                                                    }}
                                                />
                                                {item.talks}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Pagination
                                defaultCurrent={1}
                                total={50}
                                onChange={onChangePage}
                                defaultPageSize={10}
                                style={{
                                    textAlign: 'center',
                                    margin: '20px 0',
                                    paddingBottom: '20px',
                                }}
                            />
                        </div>
                    </div>
                    <div className="forum_left_div">
                        <Affix offsetTop={top}>
                            <div className="forum_left_item">
                                <div className="forum_left_title">公告</div>
                                <div className="forum_left_list">
                                    <ul>
                                        <li
                                            onClick={() => {
                                                router.push('/forum/aa');
                                            }}
                                        >
                                            极客教育开启新时代
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/forum/aa');
                                            }}
                                        >
                                            彻底保护你的iPhone隐私，教你开启Apple
                                            ID两步验证
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/forum/aa');
                                            }}
                                        >
                                            Amazon Polly 上手实验
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/forum/aa');
                                            }}
                                        >
                                            揭秘你不知道的CloudFront用法
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="forum_left_item flex">
                                <div
                                    className="btn_item left1"
                                    style={{ borderRight: '1px solid #e4e4e4', fontSize: '18px', fontWeight: 'bold' }}
                                    onClick={toPostPage}
                                >
                                    <div className="item_div">
                                        <img
                                            src="/imgs/forum/发布.png"
                                            alt=""
                                            className="item_div_img"
                                        />
                                    </div>
                                    我要提问
                                </div>
                                
                            </div>

                            <div
                                className="forum_left_item flex"
                                style={{ alignItems: 'center' }}
                            >
                                <div className="user_img_div">
                                    <img
                                        src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                                        alt=""
                                        className="user_img"
                                    />
                                </div>
                                <div className="flex_1">
                                    {accountState.account.isLogin ? (
                                        <div>
                                            <div
                                                style={{
                                                    paddingBottom: '10px',
                                                    maxWidth: '120px',
                                                }}
                                            >
                                                {accountState.account
                                                    .phoneNumber + '  ,你好'}
                                            </div>
                                            <div className="tologin_green">
                                                极客学院助你天天向上
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div
                                                style={{
                                                    paddingBottom: '10px',
                                                    maxWidth: '120px',
                                                }}
                                            >
                                                游客,你好
                                            </div>
                                            <div>
                                                <span
                                                    style={{
                                                        textDecoration:
                                                            'underline',
                                                    }}
                                                    className="tologin_green"
                                                    onClick={() => {
                                                        router.push(
                                                            '/login?from=/forum',
                                                        );
                                                    }}
                                                >
                                                    登录
                                                </span>{' '}
                                                再玩耍，妥妥哒。
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Affix>
                    </div>
                </div>
            </div>
        </PcLayout>
    );
};
export default withRouter(Question);