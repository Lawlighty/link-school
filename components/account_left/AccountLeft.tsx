import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AccountLeft({
    showPerCenter,
    showRecruit,
}: {
    showPerCenter:boolean,
    showRecruit:boolean,
}) {
    let router = useRouter();
    console.log('useRouter', router);
    //个人中心
    //0--> 我的订单
    //1==> 个人信息
    //2 --> 修改密码
    //3 -->  我的通知
    //4-->  我的关注
    const [personal_center, setPersonalCenter] = useState(0);

    //招募
    const [recruit_index, setRecruit] = useState(0);
    useEffect(() => {
        if (showPerCenter){
            if (router.route === '/account/order') {
                setPersonalCenter(0);
            } else if (router.route === '/account/info') {
                setPersonalCenter(1);
            } else if (router.route === '/account/reset') {
                setPersonalCenter(2);
            } else if (router.route === '/account/message') {
                setPersonalCenter(3);
            } else if (router.route === '/account/attention') {
                setPersonalCenter(4);
            } else {
                setPersonalCenter(10);
            }
        }
        if (showRecruit) {
            if (router.route === '/recruit') {
                setRecruit(0);
            } 
        }
    }, []);

    return (
        <div className="account_left">
            {/* 个人中心 */}
            {showPerCenter ? (
                <div className="menu_panel">
                    <h3 className="title">
                        <img
                            src="/imgs/account/用户.png"
                            alt=""
                            className="iconfont"
                        />
                        个人中心
                    </h3>
                    <ul className="menus">
                        <li className="">
                            <Link href="/account/order">
                                <a
                                    className={
                                        personal_center === 0 ? 'on' : ''
                                    }
                                >
                                    我的订单
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/account/attention">
                                <a
                                    className={
                                        personal_center === 4 ? 'on' : ''
                                    }
                                >
                                    我的关注
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/account/message">
                                <a
                                    className={
                                        personal_center === 3 ? 'on' : ''
                                    }
                                >
                                    我的通知
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/account/info">
                                <a
                                    className={
                                        personal_center === 1 ? 'on' : ''
                                    }
                                >
                                    个人信息
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/account/reset">
                                <a
                                    className={
                                        personal_center === 2 ? 'on' : ''
                                    }
                                >
                                    修改密码
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : null}

            {/* 招募中心 */}
            {showRecruit ? (
                <div className="menu_panel">
                    <h3 className="title">
                        <img
                            src="/imgs/account/志愿招募.png"
                            alt=""
                            className="iconfont"
                        />
                        招募中心
                    </h3>
                    <ul className="menus">
                        <li className="">
                            <Link href="/recruit">
                                <a className={recruit_index === 0 ? 'on' : ''}>
                                    讲师招募
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : null}
        </div>
    );
}