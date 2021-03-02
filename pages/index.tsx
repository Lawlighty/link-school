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
import {  getBannerSubItems } from '@/utils/utils';
import  CourseRecommendByCategory  from '@/components/banner/courses'
import CoursesItem from '@/components/courses';
import IndexPageDoc from '@/components/documents/IndexPageDoc';
import LiveCoursesItem from '@/components/live/courses';
import NewsItem from '@/components/news';

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
      console.log('localStorage.token', localStorage.token);
      console.log('localStorage.token', typeof localStorage.token);
    getCategoryList();
    getBanners();
    getCoursesRecommend();
    getCoursesStick();
    getDocumentsList();
  }, []);

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
                <CoursesItem item={item} key={item._id} />
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
                <IndexPageDoc item={item} key={item._id} />
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
                <CoursesItem item={item} key={item._id} />
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
                  <LiveCoursesItem item={item} index={index} />
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
                  <NewsItem item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </PcLayout>
  );
}
