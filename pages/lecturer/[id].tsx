import PcLayout from '../../components/layouts/PcLayout';
import { Input, Avatar, Pagination, Modal, Card } from 'antd';
import { useState } from 'react';
import { UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';


const { confirm } = Modal;
export default function Lectuer() {
    const router = useRouter();
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
          },
      ];

    const [showMore, setShowMore] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const [focus, setFocus] = useState(false);


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
            <div className="lectuer_page">
                <div className="top_div">
                    <div className="top">
                        <div className="lectuer_info_left">
                            <div>
                                <div
                                    style={{
                                        width: '105px',
                                        height: '105px',
                                        marginBottom: '20px',
                                        backgroundColor: '#fff',
                                        borderRadius: '50%',
                                    }}
                                >
                                    <Avatar
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                        }}
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    />
                                </div>
                            </div>
                            {focus ? (
                                <div
                                    className="follow_btn c_bg_red"
                                    onClick={() => {
                                        confirm({
                                            title: '确定取消关注吗?',
                                            icon: <ExclamationCircleOutlined />,
                                            okText: '确定',
                                            cancelText: '取消',
                                            onOk() {
                                                setFocus(false);
                                            },
                                            onCancel() {
                                                console.log('Cancel');
                                            },
                                        });
                                    }}
                                >
                                    √ 已关注
                                </div>
                            ) : (
                                <div
                                    className="follow_btn"
                                    onClick={() => {
                                        setFocus(true);
                                    }}
                                >
                                    + 关注
                                </div>
                            )}
                        </div>

                        <div className="lectuer_info">
                            <div className="lectuer_header">
                                <div>叶核亚</div>
                                <div style={{ fontSize: 16, marginLeft: 20 }}>
                                    南京工程学院 - 副教授
                                </div>
                            </div>
                            <div style={{ margin: '10px 0' }}>
                                关注0人 | 粉丝42人
                            </div>
                            <div className="brief">
                                叶核亚，南京工程学院副教授，江苏省高校“青蓝工程”优秀骨干教师。从教30年，主讲数据结构、Java基础等课程。
                                主编出版数据结构等教材18部，其中国家级“十一五”“十二五”规划教材5部，江苏省“十二五”高校重点教材2部。
                                主持“数据结构”精品资源共享课、江苏省在线开放课程和“一流课程”建设
                                叶核亚，南京工程学院副教授，江苏省高校“青蓝工程”优秀骨干教师。从教30年，主讲数据结构、Java基础等课程。
                                主编出版数据结构等教材18部，其中国家级“十一五”“十二五”规划教材5部，江苏省“十二五”高校重点教材2部。
                                主持“数据结构”精品资源共享课、江苏省在线开放课程和“一流课程”建设...
                            </div>
                            <div className="look_more_div">
                                <div
                                    className="look_more"
                                    onClick={() => {
                                        setShowMore(true);
                                    }}
                                >
                                    查看全部
                                </div>
                            </div>
                            <Modal
                                closable={false}
                                title="讲师简介"
                                visible={showMore}
                                okText="确定"
                                cancelText="取消"
                                onOk={() => {
                                    setShowMore(false);
                                }}
                                onCancel={() => {
                                    setShowMore(false);
                                }}
                            >
                                <p>
                                    叶核亚，南京工程学院副教授，江苏省高校“青蓝工程”优秀骨干教师。从教30年，主讲数据结构、Java基础等课程。
                                    主编出版数据结构等教材18部，
                                    其中国家级“十一五”“十二五”规划教材5部，江苏省“十二五”高校重点教材2部
                                    。主持“数据结构”精品资源共享课、江苏省在线开放课程和“一流课程”建设，“Java基础”精品课程。
                                    获得南京工程学院“三育人”先进个人、毕业设计优秀指导教师，电子工业出版社“优秀作译者”等。
                                </p>
                            </Modal>
                        </div>
                    </div>
                </div>

                <div className="lectuer_boxer">
                    <div className="lectuer_container">
                        <ul className="tabs flex">
                            <li
                                className={[
                                    'tab',
                                    tabIndex === 0 ? 'active' : '',
                                ].join(' ')}
                                onClick={() => setTabIndex(0)}
                            >
                                视频
                            </li>{' '}
                            <li
                                className={[
                                    'tab',
                                    tabIndex === 1 ? 'active' : '',
                                ].join(' ')}
                                onClick={() => setTabIndex(1)}
                            >
                                文档
                            </li>{' '}
                            <li
                                className={[
                                    'tab',
                                    tabIndex === 2 ? 'active' : '',
                                ].join(' ')}
                                onClick={() => setTabIndex(2)}
                            >
                                论坛
                            </li>{' '}
                        </ul>
                    </div>

                    <div className="zone_body">
                        {boutique_reco.map((item) => (
                            <div className="zone_body_item" key={item.name}>
                                <Card
                                    onClick={() => {
                                        router.push('view/123');
                                    }}
                                    hoverable
                                    style={{ width: '100%' }}
                                    cover={
                                        <img
                                            alt="example"
                                            src={item.img_url}
                                            className="card_img"
                                        />
                                    }
                                >
                                    <div>
                                        <div className="zone_body_item_name">
                                            {item.name}
                                        </div>
                                        <div className="zone_body_item_tag">
                                            {item.isfree ? (
                                                <div className="free">免费</div>
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
                                                            color: '#333',
                                                        }}
                                                    >
                                                        ￥100.00
                                                    </div>
                                                    <div
                                                        style={{
                                                            color: '#fb6260',
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
                                                        src={item.avatar}
                                                    />
                                                ) : (
                                                    // <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                    <Avatar
                                                        size="small"
                                                        style={{
                                                            backgroundColor:
                                                                '#87d068',
                                                        }}
                                                        icon={<UserOutlined />}
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
                                </Card>
                            </div>
                        ))}
                    </div>

                    <Pagination
                        defaultCurrent={1}
                        total={50}
                        onChange={onChangePage}
                        defaultPageSize={20}
                        style={{ textAlign: 'center', marginTop: 20 }}
                    />
                </div>
            </div>
        </PcLayout>
    );
}
