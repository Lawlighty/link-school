import PcLayout from "@/components/layouts/PcLayout";
import { Carousel, Menu, Card, Avatar  } from 'antd';
import { useState, useEffect } from 'react';
import {RightOutlined, UserOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';
import HeaderIndexer from '@/store/headerIndex';
import { useRouter } from 'next/router';
import { _get_users_list } from '@/server/users';
import { _get_banners } from '@/server/banners';
import { _get_courses_recommend, _get_courses_stick } from '@/server/courses';
import { _get_documents } from '@/server/documents';
import { _get_all_categorys } from '@/server/categorys';
import { setSubStr, getBannerSubItems } from '@/utils/utils';
import  CourseRecommendByCategory  from '@/components/banner/courses'

 const { SubMenu } = Menu;
export default function Home() {
  const router = useRouter();
  //轮播图
  const [bannerList, setBannerList] = useState([]);
  //推荐课程
  const [courseRecommendList, setCourseRecommendList] = useState([]);
  //热门课程
  const [courseStickList, setCourseStickList] = useState([]);
  //文档
    const [documentList, setDocumentList] = useState([]);
    // 分类树
  const [categoryList, setCategoryList] = useState([]);
  // 获取分类
  const getCategoryList = async () => {
    await _get_all_categorys().then((data) => {
        console.log('getCategoryList', data);
        if (data.status === 200) {
               setCategoryList(getBannerSubItems(data.data));
        }
    });
  };
  // 获取轮播图
  const getBanners = async () => {
    await _get_banners().then((data) => {
      if (data.status === 200) {
        setBannerList(data.data);
      }
    });
  };
  const getCoursesRecommend = async () => {
    await _get_courses_recommend().then((data) => {
      if (data.status === 200) {
        setCourseRecommendList(data.data);
      }
    });
  };
  const getCoursesStick = async () => {
    await _get_courses_stick().then((data) => {
      if (data.status === 200) {
        setCourseStickList(data.data);
      }
    });
  };
  const getDocumentsList = async () => {
    const query= {
        limit:6
    }
    await _get_documents(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        console.log('文档', data.data);
        setDocumentList(data.data.data);
      }
    });
  };
  useEffect(() => {
    getCategoryList();
    getBanners();
    getCoursesRecommend();
    getCoursesStick();
    getDocumentsList();
  }, []);

  //轮播图课程
  const [sub_items, setSubItems] = useState([
    {
      title: '后台开发',
      lists: [
        {
          name: '后台管理系统',
        },
        {
          name: '系统架构',
        },
        {
          name: '单点突破',
        },
        {
          name: '项目实战',
        },
      ],
      recommend_classes: [
        {
          url: 'http://static.roncoos.com/edu/edu.jpg',
          href: '/view/123',
          name: '极课教育系统',
          price: 100,
          vip_price: 90,
        },
        {
          url:
            'https://static-dev.roncoo.com/course/ZtTftX23I4jJ7QsMubVrVm65srIGgsRS.jpg',
          href: '/view/123',
          name: '云计算',
          price: 100,
          vip_price: 90,
        },
      ],
    },
    {
      title: '前端开发',
      lists: [
        {
          name: 'javascript',
        },
        {
          name: 'HTML&CSS',
        },
        {
          name: 'React',
        },
        {
          name: 'Vue',
        },
      ],
      recommend_classes: [
        {
          url:
            'https://a1.jikexueyuan.com/home/201603/28/f439/56f8999e09c24.jpg',
          href: '/view/123',
          name: 'JS轻松学习',
          price: 100,
          vip_price: 90,
        },
        {
          url:
            'https://static-dev.roncoo.com/course/ZtTftX23I4jJ7QsMubVrVm65srIGgsRS.jpg',
          href: '/view/123',
          name: '云计算',
          price: 100,
          vip_price: 90,
        },
      ],
    },
    {
      title: '移动开发',
      lists: [
        {
          name: 'Android',
        },
        {
          name: 'IOS',
        },
        {
          name: 'Cocos',
        },
        {
          name: '项目实战',
        },
      ],
      recommend_classes: [
        {
          url: 'http://static.roncoos.com/edu/edu.jpg',
          href: '/view/123',
          name: '极课教育系统',
          price: 100,
          vip_price: 90,
        },
        {
          url: 'http://static.roncoos.com/edu/edu.jpg',
          href: '/view/123',
          name: '极课教育系统',
          price: 100,
          vip_price: 90,
        },
      ],
    },
    {
      title: '数据库',
      lists: [
        {
          name: 'Mysql',
        },
        {
          name: 'Sqlite',
        },
        {
          name: 'MangoDb',
        },
      ],
      recommend_classes: [
        {
          url: 'http://static.roncoos.com/edu/edu.jpg',
          href: '/view/123',
          name: '极课教育系统',
          price: 100,
          vip_price: 90,
        },
        {
          url: 'http://static.roncoos.com/edu/edu.jpg',
          href: '/view/123',
          name: '极课教育系统',
          price: 100,
          vip_price: 90,
        },
      ],
    },
  ]);

  //试卷
  const test_paper = [
    {
      name: 'Cocos2d-JS 俄罗斯方块 管理层实现',
      href: '',
      tag: 'https://a1.jikexueyuan.com/home/201809/03/ebcb/5b8ceaef9f623.jpeg',
      price: '',
      looks: 116,
      download: 5,
      desc:
        '这个Wiki项目展示的是和极客学院V6课程--《微信小程序从基础到实战》的相关文档和资料',
    },
    {
      name: '资深前端开发工程师面试题',
      href: '',
      tag: 'https://a1.jikexueyuan.com/home/201507/21/0e3c/55adaba4911b6.jpg',
      price: '45',
      looks: 116,
      download: 50,
      desc:
        '本课程介绍一下资深前端开发工程师在面试中需要注意的事项以及常见的面试题。',
    },
    {
      name: 'HTML5 微场景实战',
      href: '',
      tag: 'https://a1.jikexueyuan.com/home/201507/30/6156/55b983f9bd934.jpg',
      price: '',
      looks: 54,
      download: 5,
      desc:
        '本课程主要讲解如何使用 HTML5 实现一个微场景，通过 CSS3 与 JavaScript 的配合，完成 PPT 中的基础动作',
    },
    {
      name: 'JavaScript 设计模式之组合模式',
      href: '',
      tag: 'https://a1.jikexueyuan.com/home/201507/27/294d/55b5919e9c7a3.jpg',
      price: '45',
      looks: 116,
      download: 50,
      desc:
        '本课程介绍组合模式，组合模式（Composite）将对象组合成树形结构以表示“部分-整体”的层次结构',
    },
    {
      name: 'Phaser.js 游戏的创建',
      href: '',
      tag: '',
      price: '',
      looks: 54,
      download: 5,
      desc:
        '本课程首先对 Phaser.js 游戏框架做一个简单的介绍，然后讲解怎么用 Phaser.js 来创建一个游戏',
    },
  ];

  // 直播
  const live_reco = [
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201710/30/d090/59f6d46dcb4dc.jpg',
      name: '微软人工智能 － 服务和API',
      isfree: true,
      price: '',
      vip_price: '',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username: '张三',
      leanrs: 135,
      sale_tag: 10,
      live_time: '2020-09-09 22:31:00',
    },
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201707/12/7df7/5965c20d2f215.jpg',
      name: 'AWS 人工智能新服务解析—Rekognition、Polly 及 Lex 服务',
      isfree: false,
      price: 100,
      vip_price: 59.9,
      avatar: '',
      username: '张三',
      leanrs: 135,
    },
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201507/29/371a/55b836173569a.jpg',
      name: '嵌入式系统简介',
      isfree: true,
      price: '',
      vip_price: '',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username: '张三',
      leanrs: 135,
      sale_tag: 10,
      live_time: '2020-09-09 22:31:00',
    },
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201507/22/9066/55af023a95763.jpg',
      name: 'NFC 开发基础',
      isfree: false,
      price: 100,
      vip_price: 59.9,
      avatar: '',
      username: '张三',
      leanrs: 135,
    },
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201507/30/a97b/55b97fd56d0a3.jpg',
      name: 'Android 开发实战：微博之发微博页面表情面板和接口开发',
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
        'https://a1.jikexueyuan.com/home/201606/12/3cfe/575cd230c4638.jpg',
      name: '虚幻4零基础入门',
      isfree: false,
      price: 100,
      vip_price: 59.9,
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username: '张三',
      leanrs: 135,
    },
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
  ];
  // 查询限制(分页)
  const query = {
    limit: 1,
    page: 1,
  };
  const getCourses = async () => {
    await _get_users_list(query).then((data) => {
      console.log('获取用户列表', data);
      console.log('获取用户列表', data.data.data);
    });
  };

  return (
    <PcLayout
      showHeader={true}
      customSeo={null}
      showFooter={true}
      isBlack={true}
    >
      <div className="index_page">
        {/* 轮播图 */}
        <div className="banner_div">
          <div className="banner-content">
            <div className="class_block">
              <Menu className="banner_list" mode="vertical">
                {categoryList.map((item, index) => (
                  <SubMenu key={item._id} title={item.name}>
                    <div
                      className="banner_list_sub"
                      style={{
                        top: `-${index * 52 + 4}px`,
                      }}
                    >
                      <div className="sub_div">
                        {item.children
                          ? item.children.map((litem) => (
                              <div className="sub_div_item" key={litem._id}>
                                <a
                                  className="name"
                                  onClick={() => {
                                    router.push('/list');
                                  }}
                                >
                                  {litem.name}
                                </a>
                              </div>
                            ))
                          : null}
                      </div>
                      <CourseRecommendByCategory categoryId={item._id} />
                      {/* <div className="foot_courses">
                        <div className="courses_top">课程推荐</div>
                        {item.recommend_classes.map((ritem, rindex) => (
                          <div key={ritem.url + rindex}>
                            <div className="foot_course fl">
                              <div className="img_box">
                                <a
                                  href={ritem.href}
                                  className=""
                                  target="_blank"
                                >
                                  <img
                                    src={ritem.url}
                                    alt=""
                                    className="course_img"
                                  />
                                </a>
                              </div>
                              <div className="course_info">
                                <a
                                  href="/view/1262283551264952322"
                                  className="course_name"
                                  target="_blank"
                                >
                                  {ritem.name}
                                </a>
                                <div className="course_price">
                                  ￥{ritem.price}
                                  <p className="font_12 c_gold course_price_vip">
                                    SVIP:￥
                                    {ritem.vip_price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div> */}
                    </div>
                  </SubMenu>
                ))}
              </Menu>
            </div>
            <div className="banner_pics">
              <Carousel effect="fade" className="banner_dots" autoplay>
                {bannerList.map((item) => (
                  <div key={item._id}>
                    <img
                      className="banner_img"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        {/* 精品推荐 */}
        <div className="index_content">
          <div className="index_content_zone">
            <div className="zone_header">
              <div className="big_text">
                <div style={{ flex: 1 }}>
                  精品推荐
                  <span className="small_text">免费任看，让你学习无忧</span>
                </div>

                <a href="/list" className="small_text link_text">
                  更多课程
                  <RightOutlined />
                </a>
              </div>
            </div>

            <div className="zone_body">
              {courseRecommendList.map((item) => (
                <div className="zone_body_item" key={item._id}>
                  <Card
                    onClick={() => {
                      router.push(`view/${item._id}`);
                    }}
                    hoverable
                    style={{ width: '100%' }}
                    cover={
                      <img
                        alt="example"
                        src={item.cover}
                        className="card_img"
                      />
                    }
                  >
                    <div>
                      <div className="zone_body_item_name">{item.name}</div>
                      <div className="zone_body_item_tag">
                        {!item.price || item.price === 0 ? (
                          <div className="free">免费</div>
                        ) : (
                          <div
                            style={{
                              display: 'flex',
                            }}
                          >
                            <div
                              style={{
                                paddingRight: '10px',
                                color: '#333',
                              }}
                            >
                              ￥{item.price}
                            </div>
                            <div
                              style={{
                                color: '#fb6260',
                              }}
                            >
                              SVIP:￥{item.sprice || 0}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="zone_body_item_info">
                        <div className="zone_body_item_who_info">
                          {item.author ? (
                            <Avatar size="small" src={item.author.avatar} />
                          ) : (
                            <Avatar
                              size="small"
                              style={{
                                backgroundColor: '#87d068',
                              }}
                              icon={<UserOutlined />}
                            />
                          )}

                          <div
                            className="name"
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/lecturer/${item.author._id}`);
                            }}
                          >
                            {item.author.nickname}
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
          </div>
        </div>

        {/* 文档 */}
        <div className="index_content">
          <div className="index_content_zone">
            <div className="zone_header">
              <div className="big_text">
                <div style={{ flex: 1 }}>
                  文档专区
                  <span className="small_text">文档专区</span>
                </div>

                <a href="/resource" className="small_text link_text">
                  更多文档
                  <RightOutlined />
                </a>
              </div>
            </div>

            <div className="zone_body bg_white" style={{ padding: '20px' }}>
              {documentList.map((item) => (
                <div className="exam_div doc_div" key={item._id}>
                  <div
                    className="exam_item"
                    onClick={() => {
                      router.push(`/resource/${item._id}`);
                    }}
                  >
                    <div className="desc">
                      <a className="text">{setSubStr(item.introduce, 50)}</a>
                    </div>
                    <div className="">
                      {item.cover ? (
                        <img
                          style={{
                            width: '100px',
                            height: '60px',
                            marginRight: '20px',
                          }}
                          src={item.cover}
                          alt=""
                        />
                      ) : (
                        <img
                          style={{
                            width: '100px',
                            height: '60px',
                            marginRight: '20px',
                          }}
                          src="https://a1.jikexueyuan.com/home/201507/22/d4b9/55af0345ca2d0.jpg"
                          alt=""
                        />
                      )}
                    </div>
                    <div className="flex_1">
                      <div className="exam_item_title_div">
                        <div className="exam_item_title">{item.name}</div>
                      </div>

                      <div className="exam-item-tip">
                        浏览:
                        <span style={{ margin: '0 5px' }}>
                          {item.looks}
                        </span>{' '}
                        下载:
                        <span style={{ margin: '0 5px' }}>{item.download}</span>
                        次
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 热门课程 */}
        <div className="index_content">
          <div className="index_content_zone">
            <div className="zone_header">
              <div className="big_text">
                <div style={{ flex: 1 }}>
                  热门课程
                  <span className="small_text">站长推荐，每一个都是精品</span>
                </div>

                <a href="/list" className="small_text link_text">
                  更多课程
                  <RightOutlined />
                </a>
              </div>
            </div>

            <div className="zone_body">
              {courseStickList.map((item) => (
                <div className="zone_body_item" key={item._id}>
                  <Card
                    onClick={() => {
                      router.push(`view/${item._id}`);
                    }}
                    hoverable
                    style={{ width: '100%' }}
                    cover={
                      <img
                        alt="example"
                        src={item.cover}
                        className="card_img"
                      />
                    }
                  >
                    <div>
                      <div className="zone_body_item_name">{item.name}</div>
                      <div className="zone_body_item_tag">
                        {!item.price || item.price === 0 ? (
                          <div className="free">免费</div>
                        ) : (
                          <div
                            style={{
                              display: 'flex',
                            }}
                          >
                            <div
                              style={{
                                paddingRight: '10px',
                                color: '#333',
                              }}
                            >
                              ￥{item.price}
                            </div>
                            <div
                              style={{
                                color: '#fb6260',
                              }}
                            >
                              SVIP:￥{item.sprice || 0}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="zone_body_item_info">
                        <div className="zone_body_item_who_info">
                          {item.author ? (
                            <Avatar size="small" src={item.author.avatar} />
                          ) : (
                            <Avatar
                              size="small"
                              style={{
                                backgroundColor: '#87d068',
                              }}
                              icon={<UserOutlined />}
                            />
                          )}

                          <div
                            className="name"
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/lecturer/${item.author._id}`);
                            }}
                          >
                            {item.author.nickname}
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
          </div>
        </div>

        {/* 直播课程 */}
        {false && (
          <div className="index_content">
            <div className="index_content_zone">
              <div className="zone_header">
                <div className="big_text">
                  <div style={{ flex: 1 }}>
                    直播课程
                    <span className="small_text">每个都是精品，准时开播</span>
                  </div>

                  <a href="/list" className="small_text link_text">
                    更多直播
                    <RightOutlined />
                  </a>
                </div>
              </div>

              <div className="zone_body">
                {live_reco.map((item, index) => (
                  <div className="zone_body_item" key={item.name + index}>
                    {item.sale_tag ? (
                      <div className="sale_tag">
                        优惠券
                        <div className="sale_tag_price">{item.sale_tag}</div>
                      </div>
                    ) : null}

                    <Card
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
                      <div className="rel_div">
                        {item.live_time ? (
                          <div className="live_time">
                            开播时间: {item.live_time}
                          </div>
                        ) : null}

                        <div className="zone_body_item_name">{item.name}</div>
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
                                  paddingRight: '10px',
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
                              <Avatar size="small" src={item.avatar} />
                            ) : (
                              // <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              <Avatar
                                size="small"
                                style={{
                                  backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                              />
                            )}

                            <div
                              className="name"
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push('/lecturer/' + index);
                              }}
                            >
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
            </div>
          </div>
        )}

        {/* 新闻资讯 */}
        {false && (
          <div className="index_content">
            <div className="index_content_zone">
              <div className="zone_header">
                <div className="big_text">
                  <div style={{ flex: 1 }}>
                    新闻资讯
                    <span className="small_text">传递最新动态</span>
                  </div>

                  <a href="/list" className="small_text link_text">
                    更多资讯
                    <RightOutlined />
                  </a>
                </div>
              </div>

              <div className="zone_body">
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div className="info_item" key={index}>
                    <div
                      className="info_item_div"
                      style={{
                        padding: '20px',
                        background: '#fff',
                        borderRadius: '8px',
                      }}
                    >
                      <div className="info_title">
                        <div className="info_title_left"></div>
                        <div className="info_title_name">行业动态</div>
                        <a href="/list" className="small_text" target="_bank">
                          更多
                          <RightOutlined />
                        </a>
                      </div>
                      <div>
                        <img
                          src="https://static-dev.roncoo.com/course/20a864190ac74acda0838d0eb41d3a43.png"
                          alt="资讯图片"
                          className="info_img"
                        />
                      </div>

                      <div className="info_content_name">
                        超全！2020年互联网大厂薪资和职级一览
                      </div>
                      <div className="info_content">
                        以BAT为代表的互联网大厂，一直是求职者眼中的香饽饽，“大厂经历”在国内就业环境中无异于一块金子招牌。本文来源：运营黑客社区。感谢社区分享对于企业和HR来说，大...
                      </div>
                      <div className="info_footer">
                        <div className="time">2020-11-03 12:45</div>
                        <div className="more">
                          <div>
                            <EyeOutlined
                              style={{
                                margin: '0 10px',
                              }}
                            />
                            148
                            <LikeOutlined
                              style={{
                                margin: '0 10px',
                              }}
                            />
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </PcLayout>
  );
}
