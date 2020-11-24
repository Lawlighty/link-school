import PcLayout from '../../components/layouts/PcLayout';
import { withRouter } from 'next/router';
import { useState } from 'react';
// import './resource_index.css';
import { Card, Avatar, Pagination, Affix } from 'antd';
import {
    UserOutlined,
} from '@ant-design/icons';

const Resource = ({ router }) => {
    const [top, setTop] = useState(90);

    const [current_categoryno1, setCurrentCategoryno1] = useState(0);
    const [current_categoryno2, setCurrentCategoryno2] = useState(0);
    const [current_categoryno3, setCurrentCategoryno3] = useState(0);
    const [current_four, setCurrentFour] = useState(0);
    const categoryno1 = [
        {
            name: '全部',
            index: 0,
        },
        {
            name: '云计算/大数据',
            index: 1,
        },
        {
            name: '产品/策划/运营',
            index: 2,
        },
        {
            name: '前端/后台/框架',
            index: 3,
        },
    ];
    const categoryno2 = [
        {
            name: '全部',
            index: 0,
        },
        {
            name: '产品',
            index: 1,
        },
        {
            name: '策划',
            index: 2,
        },
        {
            name: '运营',
            index: 3,
        },
    ];
    const categoryno3 = [
        {
            name: '全部',
            index: 0,
        },
        {
            name: '测试1',
            index: 1,
        },
        {
            name: '测试2',
            index: 2,
        },
        {
            name: '测试3',
            index: 3,
        },
    ];
    const four = [
        {
            name: '全部',
            index: 0,
        },
        {
            name: '免费',
            index: 1,
        },
        {
            name: 'SVIP免费',
            index: 2,
        },
        {
            name: '付费',
            index: 3,
        },
    ];

    const changeCat1 = (index: number) => {
        setCurrentCategoryno1(index);
    };
    const changeCat2 = (index: number) => {
        setCurrentCategoryno2(index);
    };
    const changeCat3 = (index: number) => {
        setCurrentCategoryno3(index);
    };
    const changeFour = (index: number) => {
        setCurrentFour(index);
    };

    //精品推荐
   const boutique_reco = [
       {
           img_url:
               'https://a1.jikexueyuan.com/home/201507/22/ff2e/55af4bf0d4eed.jpg',
           name: 'Android 开发实战：微博之发微博页面图片处理',
           isfree: true,
           price: '',
           vip_price: '',
           avatar: '',
           username: '张三',
           leanrs: 135,
           desc:
               ' 通过本课程的学习，您将学会： 1.如何配置和连接到 Amazon Aurora Serverless。 创建并配置新的 Aurora Serverless 数据库集',
       },
       {
           img_url:
               'https://a1.jikexueyuan.com/home/201507/17/94b9/55a86c6be0ac1.jpg',
           name: 'Cocos2d-x CURL 和 HttpClient',
           isfree: true,
           price: '',
           vip_price: '',
           avatar: '',
           username: '张三',
           leanrs: 135,
           sale_tag: 10,
           live_time: '2020-09-09 22:31:00',
           desc:
               '本课程主要向大家讲解Android Studio的使用，从基本的安装配置，到进阶的插件安装、代码模板设计等。帮助大家通过熟练使用Android Studio提高自己的开发效率',
       },
       {
           img_url:
               'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
           name: 'Mysql入门到精通',
           isfree: true,
           price: '',
           vip_price: '',
           avatar:
               'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
           username: '张三',
           leanrs: 135,
           desc:
               '本课程是为初学者准备的版本控制工具课程，主要从本地操作、远程操作、图形工具化三个方面，带领你学会现今流行的 Git/GitHub 工具的使用。',
       },
       {
           img_url:
               'https://static-dev.roncoo.com/course/ZtTftX23I4jJ7QsMubVrVm65srIGgsRS.jpg',
           name: '大数据',
           isfree: false,
           price: 100,
           vip_price: 59.9,
           avatar: '',
           username: '李四',
           leanrs: 135,
           desc:
               '网络编程是Android开发中核心功能模块，涉及的知识较多。本门课程由Java到Android，对网络编程进行全方面讲解。',
       },
       {
           img_url:
               'https://static-dev.roncoo.com/course/8ad63395b81f41c58cbae578019a40da.jpg',
           name: 'Java SpringBoot',
           isfree: true,
           price: '',
           vip_price: '',
           avatar:
               'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
           username: '王五',
           leanrs: 135,
           desc:'本课程介绍3d开发中常用的模型文件、模型文件格式，以及Three.js中对模型的解析方式'
       },
       {
           img_url:
               'https://a1.jikexueyuan.com/home/201507/30/cf6e/55b98d818c820.jpg',
           name: 'React 组件性能调优',
           isfree: false,
           price: 100,
           vip_price: 59.9,
           avatar: '',
           username: '张三',
           leanrs: 135,
           desc:
               '本课程主要介绍点击拾取的基本原理，以及如何使用Three.js提供的RayCaster来做相交处理。',
       },
       {
           img_url:
               'https://a1.jikexueyuan.com/home/201507/22/8f57/55aeffca72c34.jpg',
           name: 'css 兼容',
           isfree: false,
           price: 100,
           vip_price: 59.9,
           avatar: '',
           username: '李四',
           leanrs: 135,
           desc:
               '本课程主要讲解 3D 图形学入门基础知识，内容包括坐标系、点、线和面，转换的通俗概念以及矩阵、纹理和着色器等。',
       },
       {
           img_url:
               'https://a1.jikexueyuan.com/home/201609/30/3910/57ee150c63c28.jpg',
           name: '如何一小时快速搭建一个应用号',
           isfree: true,
           price: '',
           vip_price: '',
           avatar:
               'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
           username: '王五',
           leanrs: 135,
           desc:
               '本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧',
       },
       {
           img_url:
               'https://a1.jikexueyuan.com/home/201811/28/4fb5/5bfe769f8b7e1.png',
           name: '光线投射',
           isfree: false,
           price: 100,
           vip_price: 59.9,
           avatar: '',
           username: '张三',
           leanrs: 135,
           desc:
               '本节课我们来了解Three.js中提供的几个相机控制类，每个类都有一套独立的控制算法，我们以OrbitControls为例详细讲解该控',
       },
   ];
    

    const onChangePage = (page) => {
        console.log('page', page);
    };

    return (
        <PcLayout
            showHeader={true}
            customSeo={null}
            showFooter={true}
            isBlack={false}
        >
            <div className="resource_page">
                <div className="header_list">
                    <div className="list_content">
                        <ul className="content_ul">
                            {categoryno1.map((item) => (
                                <li
                                    className={
                                        current_categoryno1 === item.index
                                            ? 'now'
                                            : ''
                                    }
                                    onClick={() => {
                                        changeCat1(item.index);
                                    }}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="list_content">
                        <ul className="content_ul">
                            {categoryno2.map((item) => (
                                <li
                                    className={
                                        current_categoryno2 === item.index
                                            ? 'now'
                                            : ''
                                    }
                                    onClick={() => {
                                        changeCat2(item.index);
                                    }}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="list_content">
                        <ul className="content_ul">
                            {categoryno3.map((item) => (
                                <li
                                    className={
                                        current_categoryno3 === item.index
                                            ? 'now'
                                            : ''
                                    }
                                    onClick={() => {
                                        changeCat3(item.index);
                                    }}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="list_content"
                        style={{ borderBottom: 'none' }}
                    >
                        <ul className="content_ul">
                            {four.map((item) => (
                                <li
                                    className={
                                        current_four === item.index ? 'now' : ''
                                    }
                                    onClick={() => {
                                        changeFour(item.index);
                                    }}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="course_content">
                    <div className="index_content_zone flex">
                        <Affix offsetTop={top}>
                            <div className="resource_left">
                                <div className="resource_left_title">
                                    推荐文库
                                </div>
                                <div className="resource_left_list">
                                    <ul>
                                        <li
                                            onClick={() => {
                                                router.push('/resource/aa');
                                            }}
                                        >
                                            启用Amazon EC2 实例新方式之AWS Deep
                                            Learning AMI
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/resource/aa');
                                            }}
                                        >
                                            网站和应用程序技巧集锦：AWS
                                            Lambda与VPC、IAM
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/resource/aa');
                                            }}
                                        >
                                            启动Wordpress网站及部署AWS EC2
                                            实例还能这么做！
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/resource/aa');
                                            }}
                                        >
                                            揭秘你不知道的CloudFront用法
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/resource/aa');
                                            }}
                                        >
                                            Amazon Polly 上手实验
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Affix>
                        <div className="flex_1" style={{ marginLeft: 15 }}>
                            {boutique_reco.map((item, index) => (
                                <div
                                    onClick={() => {
                                        router.push('/resource/' + index);
                                    }}
                                    className="zone_body_item width100"
                                    key={index}
                                    style={{ marginBottom: 8 }}
                                >
                                    <Card
                                        hoverable
                                        style={{
                                            width: '100%',
                                            position: 'relative',
                                        }}
                                        className="doc_div"
                                    >
                                        <div className="desc">
                                            <a className="text">{item.desc}</a>
                                        </div>
                                        <div className="flex">
                                            <div>
                                                <img
                                                    style={{ width: 230 }}
                                                    src={item.img_url}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="resource_item">
                                                <div className="zone_body_item_name flex_1">
                                                    {item.name}
                                                </div>
                                                <div className="zone_body_item_tag">
                                                    {item.isfree ? (
                                                        <div className="free">
                                                            免费
                                                        </div>
                                                    ) : (
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    paddingRight:
                                                                        '10px',
                                                                    color:
                                                                        '#333',
                                                                }}
                                                            >
                                                                ￥100.00
                                                            </div>
                                                            <div
                                                                style={{
                                                                    color:
                                                                        '#fb6260',
                                                                }}
                                                            >
                                                                SVIP:￥90.00
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="zone_body_item_info">
                                                    <div className="zone_body_item_who_info">
                                                        {item.avatar ? (
                                                            <Avatar
                                                                size="small"
                                                                src={
                                                                    item.avatar
                                                                }
                                                            />
                                                        ) : (
                                                            // <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                            <Avatar
                                                                size="small"
                                                                style={{
                                                                    backgroundColor:
                                                                        '#87d068',
                                                                }}
                                                                icon={
                                                                    <UserOutlined />
                                                                }
                                                            />
                                                        )}

                                                        <div className="name">
                                                            {item.username}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span>
                                                            {item.leanrs + ' '}
                                                            人已经学习
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}

                            <Pagination
                                defaultCurrent={1}
                                total={50}
                                onChange={onChangePage}
                                defaultPageSize={20}
                                style={{ textAlign: 'center', marginTop: 20 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PcLayout>
    );
};
export default withRouter(Resource);