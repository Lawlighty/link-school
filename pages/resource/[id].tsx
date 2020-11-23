import PcLayout from '../../components/layouts/PcLayout';
import { Input, Avatar, Pagination, Affix } from 'antd';
import { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { withRouter } from 'next/router';
import './resource_doc.css'


const Doc = ({ router }) => { 


    const [top, setTop] = useState(90);

    const rmtj = [
        {
            name: '极课教育系统',
            url: '',
            pic: 'http://static.roncoos.com/edu/edu.jpg',
            price: 100,
            v_price: 90,
        },
        {
            name: 'ansible自动化构建运维平台',
            url: '',
            pic:
                'https://static-dev.roncoo.com/course/ffb56ab68ce34222a30c5b52ff81d753.jpg',
            price: 100,
            v_price: 0,
        },
        {
            name: 'JAVA',
            url: '',
            pic:
                'https://static-dev.roncoo.com/course/01f5c3213c654bbd821383b7a53116cc.png',
            price: 0,
            v_price: 0,
        },
    ];

    return (
        <PcLayout
            showHeader={true}
            customSeo={null}
            showFooter={true}
            isBlack={false}
        >
            <div className="doc_page">
                <div className="doc_div flex">
                    <div className="doc_body flex_1">
                        <div className="pd20 c_ccc font14 b_fff flex_c">
                            <p className="font24 font_b c_333">
                                领课教育-在线教育系统
                            </p>{' '}
                            <div className="flex" style={{ width: '100%' }}>
                                <div
                                    className="flex_1"
                                    style={{ textAlign: 'left' }}
                                >
                                    2020-11-03 12:45:58
                                </div>

                                <div
                                    className="flex_1"
                                    style={{ textAlign: 'right' }}
                                >
                                    <span className="iconfont big"></span>
                                    177
                                    <span className="iconfont"></span>
                                    199
                                </div>
                            </div>
                        </div>

                        <div className="doc_info_body">
                            <p>
                                领课领课教育系统（roncoo-education）是基于领课网络多年的在线教育平台开发和运营经验打造出来的产品，
                                致力于打造一个各行业都适用的分布式在线教育系统。系统采用前后端分离模式，前台采用vue.js为核心框架
                                ，后台采用Spring
                                Cloud为核心框架。系统目前主要功能有课程点播功能，支持多家视频云的接入，课程附件管理功能，
                                支持多家存储云的接入，讲师管理功能，支持讲师入驻功能，可以帮助个人或者企业快速搭建一个轻量级的在线教育平台。
                            </p>
                            <ul>
                                <li>
                                    系统功能通用，无论是个人还是企业都可以利用该系统快速搭建一个属于自己的在线教育平台。
                                </li>
                                <li>
                                    系统采用MIT开源协议，可以在商业项目中免费使用或者二次开发而不必支付任何费用。
                                </li>
                                <li>
                                    所有使用到的框架或者组件都是基于开源项目，代码保证100%开源。
                                </li>
                                <li>
                                    如需商业技术服务支持，可使用
                                    <a href="https://edu.roncoo.net/">
                                        领课教育系统商业版
                                    </a>
                                    ， 功能更丰富，全程指导，上线更快速。
                                </li>
                            </ul>
                            <h3>
                                <a
                                    id="前台主要功能介绍"
                                    href="https://gitee.com/roncoocom/roncoo-education#%E5%89%8D%E5%8F%B0%E4%B8%BB%E8%A6%81%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D"
                                ></a>
                                前台主要功能介绍
                            </h3>
                            <ul>
                                <li>
                                    首页功能，导航模块（自定义导航设置），广告模块（自定的轮播设置），课程模块（自定义课程设置）
                                </li>
                                <li>
                                    列表功能，分类模块（自定义分类设置），搜索模块（自定义搜索设置）
                                </li>
                                <li>
                                    课程详情页功能，课程介绍、目录的展示和购买、播放功能等
                                </li>
                                <li>
                                    个人中心，具有个人信息设置、密码修改、订单管理、学习记录等功能
                                </li>
                                <li>
                                    讲师中心，讲师信息管理、课程管理（课程的添加、修改）、收益管理等功能
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Affix offsetTop={top}>
                        <div className="recommend_box">
                            <div className="header">热门推荐</div>
                            <div className="course_items">adasdasdasda</div>
                        </div>
                    </Affix>
                </div>
            </div>
        </PcLayout>
    );
}
export default withRouter(Doc);
