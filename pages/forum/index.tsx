import PcLayout from '../../components/layouts/PcLayout';
import { Input, Avatar, Pagination, Affix, message } from 'antd';
import { useState, useEffect } from 'react';
import {
    AppstoreFilled,
    FireFilled,
    StarFilled,
} from '@ant-design/icons';
import { withRouter } from 'next/router';
import { getWeekDate } from '../../utils/utils';
import AccountState from '../../store/accountinfo';
import './index.css';


const Forum = ({ router }) => {
    const accountState = AccountState.useContainer();
    const [top, setTop] = useState(90);

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
                                    className="flex_r_a"
                                >
                                    <AppstoreFilled
                                        style={{
                                            marginRight: '10px',
                                            fontSize: '20px',
                                        }}
                                    />
                                    全部
                                </li>
                                <li className="flex_r_a">
                                    <FireFilled
                                        style={{
                                            marginRight: '10px',
                                            fontSize: '20px',
                                        }}
                                    />
                                    精华
                                </li>
                                <li className="flex_r_a">
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
                            <div className="post_item">
                                <div className="user_img_div">
                                    <img
                                        src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                                        alt=""
                                        className="user_img"
                                    />
                                </div>
                                <div className="post_item_body flex_1">
                                    <div className="post_item_body_title">
                                        【标签】2018年度千元拍照王：非诺基亚X7莫属
                                    </div>
                                    <div className="post_item_body_info">
                                        <div>
                                            作者：CNMO官方报道
                                            2020-10-26|最新回帖：一天前
                                        </div>
                                        <div>10.23 54</div>
                                    </div>
                                </div>
                            </div>
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
                                    style={{ borderRight: '1px solid #e4e4e4' }}
                                >
                                    <div className="item_div">
                                        <img
                                            src="/imgs/forum/发布.png"
                                            alt=""
                                            className="item_div_img"
                                        />
                                    </div>
                                    发帖
                                </div>
                                <div className="btn_item right1">
                                    <div
                                        className="item_div"
                                        style={{ backgroundColor: '#ff8300' }}
                                    >
                                        <img
                                            src="/imgs/forum/签到.png"
                                            alt=""
                                            className="item_div_img"
                                        />
                                    </div>
                                    <div className="weekdate_tip">签到</div>

                                    <div className="weekdate">
                                        {getWeekDate()}
                                    </div>
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
                                                        router.push('/login');
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
export default withRouter(Forum);