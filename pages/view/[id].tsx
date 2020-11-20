import PcLayout from '../../components/layouts/PcLayout';
import {
    Modal,
    Input,
    message,
    InputNumber,
    Radio,
    Upload,
    Drawer,
    Tree,
    Pagination,
} from 'antd';
import { useState } from 'react';
import {
    DatabaseOutlined,
    DownloadOutlined,
    StarOutlined,
    DownOutlined,
    PlayCircleOutlined,
    MessageOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
// import './view.css';


const { confirm } = Modal;
export default function View() { 


    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(!visible);
    };
    const onClose = () => {
        setVisible(false);
    };

    const [isColl, setIsColl] = useState(false);

    const [tabIndex, setTabIndex] = useState(0);

    const [isCollPer, setIsCollPer] = useState(false);

    const [currentComIndex, setcurrentComIndex] = useState(-1);

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

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
    const [topComm, setTopComm] = useState('');

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
            <div className="view_page">
                <div className="detail_video">
                    <div className="video_body">
                        <div className="video_content ">
                            <div
                                className="win_box "
                                style={{ position: 'relative' }}
                            >
                                <Drawer
                                    title="章节目录"
                                    placement="right"
                                    closable={false}
                                    onClose={onClose}
                                    visible={visible}
                                    getContainer={false}
                                    style={{ position: 'absolute',zIndex: 10}}
                                >
                                    <Tree
                                        showLine
                                        switcherIcon={<DownOutlined />}
                                        defaultExpandedKeys={['0-0']}
                                        defaultSelectedKeys={['0-0-0']}
                                        onSelect={onSelect}
                                        treeData={[
                                            {
                                                title: '第1章：数据',
                                                key: '0-0',
                                                children: [
                                                    {
                                                        title: '第一讲: 1',
                                                        key: '0-0-0',
                                                    },
                                                    {
                                                        title: '第一讲: 2',
                                                        key: '0-0-1',
                                                    },
                                                    {
                                                        title: '第一讲: 3',
                                                        key: '0-0-2',
                                                    },
                                                ],
                                            },
                                        ]}
                                    />
                                </Drawer>
                                <video
                                    width="100%"
                                    height="100%"
                                    controls
                                    // src="http://www.bilibili.com/video/BV1Z4411Q7mK?from=search&seid=15708947775475943665"
                                >
                                    <source
                                        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                                        type="video/mp4"
                                    />
                                    您的浏览器不支持 HTML5 video 标签。
                                </video>
                            </div>
                            <div className="video_info">
                                <div
                                    className="video_info_tab"
                                    onClick={showDrawer}
                                >
                                    <DatabaseOutlined className="icon" />
                                    <div>章节</div>
                                </div>
                                <div
                                    className="video_info_tab"
                                    onClick={showDrawer}
                                >
                                    <DownloadOutlined className="icon" />
                                    <div>课件</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail_box">
                    <div className="detail_info flex">
                        <div className="layout_left">
                            <ul className="course_tab flex">
                                <li
                                    className={tabIndex === 0 ? 'on' : ''}
                                    onClick={() => setTabIndex(0)}
                                >
                                    <a>课程介绍</a>
                                </li>{' '}
                                <li
                                    className={tabIndex === 1 ? 'on' : ''}
                                    onClick={() => setTabIndex(1)}
                                >
                                    <a>点播课程</a>
                                </li>{' '}
                                <li
                                    className={tabIndex === 2 ? 'on' : ''}
                                    onClick={() => setTabIndex(2)}
                                >
                                    <a>课程评论</a>
                                </li>{' '}
                                <div
                                    style={{
                                        flex: 1,
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <a
                                        onClick={() => setIsColl(!isColl)}
                                        className={[
                                            'collect_btn',
                                            isColl ? 'on' : '',
                                        ].join(' ')}
                                    >
                                        {isColl ? (
                                            <img
                                                src="/imgs/收藏 _red.png"
                                                alt=""
                                            />
                                        ) : (
                                            <img src="/imgs/收藏.png" alt="" />
                                        )}
                                        &nbsp;收藏
                                    </a>
                                </div>
                            </ul>

                            <div className="content_info">
                                {tabIndex < 2 ? (
                                    <>
                                        <div className="introduce">
                                            <p>我的课程名称</p>
                                        </div>

                                        <div className="c_999">
                                            <div className="font16 c_333 font_b mgt20 leftLine">
                                                课程大纲
                                            </div>

                                            <div className="content_items">
                                                {[1, 2, 3, 4, 5].map(
                                                    (item, index) => (
                                                        <div className="content_item">
                                                            <div
                                                                style={{
                                                                    margin:
                                                                        '10px 0',
                                                                }}
                                                            >
                                                                第1章
                                                                数据第一章2
                                                            </div>
                                                            <div className="content_item_item">
                                                                <div
                                                                    className={[
                                                                        'content_item_item_title',
                                                                        index ===
                                                                        0
                                                                            ? 'c_red'
                                                                            : '',
                                                                    ].join(' ')}
                                                                >
                                                                    <PlayCircleOutlined
                                                                        style={{
                                                                            marginRight: 5,
                                                                        }}
                                                                    />
                                                                    第1讲 111
                                                                </div>
                                                                <div className="content_item_item_end">
                                                                    <span
                                                                        className="c_blue"
                                                                        style={{
                                                                            marginRight: 10,
                                                                        }}
                                                                    >
                                                                        免费
                                                                    </span>
                                                                    {'  '}{' '}
                                                                    00:00:10
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="comm">
                                            <div className="inputBox box_has_bor">
                                                <Input
                                                    className="commentInput"
                                                    value={topComm}
                                                    onChange={(e) => {
                                                        setTopComm(
                                                            e.target.value,
                                                        );
                                                    }}
                                                />
                                                <div
                                                    onClick={() => {
                                                        setTopComm('');
                                                    }}
                                                    className={[
                                                        'submitBtn',
                                                        topComm.length > 0
                                                            ? 'cancom'
                                                            : '',
                                                    ].join(' ')}
                                                >
                                                    <span>评论</span>
                                                </div>
                                            </div>
                                            <div className="tip">
                                                全部评论
                                                <span>3</span>
                                            </div>
                                            <div className="courseCommentList">
                                                {[1, 2, 3].map(
                                                    (item, index) => (
                                                        <div className="courseCommentItem flex">
                                                            <div className="userLogo">
                                                                <img
                                                                    src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                                                                    alt="用户头像"
                                                                />
                                                            </div>
                                                            <div className="courseCommentItemText flex_1">
                                                                <div className="userName">
                                                                    陈平安
                                                                </div>
                                                                <div className="commentText">
                                                                    可以说很是牛逼了
                                                                </div>
                                                                <div className="courseCommentItemfooter flex">
                                                                    <div className="flex_1">
                                                                        0分钟之前
                                                                    </div>
                                                                    <div>
                                                                        <MessageOutlined
                                                                            className="icon toComm"
                                                                            onClick={() => {
                                                                                currentComIndex ===
                                                                                index
                                                                                    ? setcurrentComIndex(
                                                                                          -1,
                                                                                      )
                                                                                    : setcurrentComIndex(
                                                                                          index,
                                                                                      );
                                                                            }}
                                                                        />

                                                                        <DeleteOutlined
                                                                            className="icon delComm"
                                                                            onClick={() => {
                                                                                confirm(
                                                                                    {
                                                                                        title:
                                                                                            '确定删除这条评论?',
                                                                                        icon: (
                                                                                            <ExclamationCircleOutlined />
                                                                                        ),
                                                                                        okText:
                                                                                            '确定',
                                                                                        onOk() {
                                                                                            console.log(
                                                                                                'OK',
                                                                                            );
                                                                                        },
                                                                                        cancelText:
                                                                                            '取消',
                                                                                        onCancel() {
                                                                                            console.log(
                                                                                                'Cancel',
                                                                                            );
                                                                                        },
                                                                                    },
                                                                                );
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {index ===
                                                                currentComIndex ? (
                                                                    <div className="inputBox">
                                                                        <Input
                                                                            className="commentInput"
                                                                            value={
                                                                                topComm
                                                                            }
                                                                            onChange={(
                                                                                e,
                                                                            ) => {
                                                                                setTopComm(
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                                );
                                                                            }}
                                                                        />
                                                                        <div
                                                                            onClick={() => {
                                                                                setTopComm(
                                                                                    '',
                                                                                );
                                                                            }}
                                                                            className={[
                                                                                'submitBtn',
                                                                                topComm.length >
                                                                                0
                                                                                    ? 'cancom'
                                                                                    : '',
                                                                            ].join(
                                                                                ' ',
                                                                            )}
                                                                        >
                                                                            <span>
                                                                                评论
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    ),
                                                )}

                                                <Pagination
                                                    defaultCurrent={1}
                                                    total={50}
                                                    onChange={onChangePage}
                                                    defaultPageSize={10}
                                                    style={{
                                                        textAlign: 'center',
                                                        marginTop: 20,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div
                            className="flex flex_1"
                            style={{ justifyContent: 'flex-end' }}
                        >
                            <div className="layout_right">
                                <div className="teacher_info">
                                    <div className="head">讲师简介</div>
                                    <div className="teacher_msg">
                                        <div className="teacher_msg_right">
                                            <div>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <img
                                                        src="/imgs/头像 (1).png"
                                                        alt=""
                                                        className="item"
                                                        style={{
                                                            borderRadius: '50%',
                                                            width: '45px',
                                                        }}
                                                    />
                                                    <div className="teacher_name">
                                                        <a>讲师昵称</a>
                                                    </div>

                                                    <a
                                                        onClick={() =>
                                                            setIsCollPer(
                                                                !isCollPer,
                                                            )
                                                        }
                                                        className={[
                                                            'collect_btn',
                                                            isCollPer
                                                                ? 'on'
                                                                : '',
                                                        ].join(' ')}
                                                    >
                                                        {isCollPer ? (
                                                            <img
                                                                src="/imgs/收藏 _red.png"
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <img
                                                                src="/imgs/收藏.png"
                                                                alt=""
                                                            />
                                                        )}
                                                        &nbsp;关注
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="info_box">
                                                <p>
                                                    从教二十六年，始终怀揣对教育事业的热爱执着。
                                                    教学如和风细雨，润物无声，滋润着每个学生的心田，对数学课堂教学的研究有着独特的见解，
                                                    课堂灵动生成，善于顺应学生的思维教学，形成自己独特的教学风格，深受学生和家长的喜爱，
                                                    同行的认可，可以说很是牛逼了
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="recommend_box">
                                    <div className="header">热门推荐</div>
                                    <div className="course_items">
                                        {rmtj.map((item) => (
                                            <div className="course_item">
                                                <div className="img_box">
                                                    <img
                                                        src={item.pic}
                                                        alt=""
                                                        className="course_img"
                                                    />
                                                </div>
                                                <div className="course_info ">
                                                    <div className="course_text">
                                                        {item.name}
                                                    </div>
                                                    <div className="course_info_bottom">
                                                        {item.price ? (
                                                            <>
                                                                <div className="c_red">
                                                                    ￥
                                                                    {item.price}
                                                                </div>
                                                                {item.v_price ? (
                                                                    <div className="c_gold font_12 ">
                                                                        SVIP:￥
                                                                        {
                                                                            item.v_price
                                                                        }
                                                                    </div>
                                                                ) : (
                                                                    <div className="c_gold font_12 ">
                                                                        SVIP:免费
                                                                    </div>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <div className="c_red">
                                                                免费
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PcLayout>
    );
}