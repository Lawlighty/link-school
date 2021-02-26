import PcLayout from '@/components/layouts/PcLayout';
import { Input, Avatar, Pagination, Affix, message, Menu, Tag } from 'antd';
import { useState, useEffect } from 'react';
import {
    AppstoreFilled,
    FireFilled,
    StarFilled,
    EyeOutlined,
    CommentOutlined,
} from '@ant-design/icons';
import { withRouter } from 'next/router';
import { getColorByStrLength } from '@/utils/utils';
import AccountState from '../../store/accountinfo';
import CategoryTags from '@/components/categoryTags/index';


const Question = ({ router }) => {
    const accountState = AccountState.useContainer();
    const [top, setTop] = useState(90);
    const [currentIndex, setCurrentIndex] = useState<string>('all');

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
            href: '/question/1',
            avatar: '',
            auther: '￥絶境逢生￥',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 45,
            talks: 22,
        },
        {
            title: 'node.js 有啥东西',
            href: '/question/2',
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
            href: '/question/3',
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
            href: '/question/1',
            avatar: '',
            auther: '￥絶境逢生￥',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 45,
            talks: 22,
        },
        {
            title: 'node.js 有啥东西',
            href: '/question/2',
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
            href: '/question/3',
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
            href: '/question/1',
            avatar: '',
            auther: '￥絶境逢生￥',
            date: '2020-02-14',
            last_back: '2020-11-21 20:39',
            looks: 45,
            talks: 22,
        },
        {
            title: 'node.js 有啥东西',
            href: '/question/2',
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
            href: '/question/3',
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
    const handleClick = (e:any) => {
        setCurrentIndex(e.key);
    };


    //发帖
    const toPostPage = () => {
        if (JSON.parse(localStorage.getItem('userInfo'))._id) {
          router.push('/question/EditQuestion');
        } else {
          router.push('/login?from=/question');
        }
    }
    return (
      <PcLayout
        showHeader={true}
        customSeo={null}
        showFooter={true}
        isBlack={false}
      >
        <div className="question_page">
          <div className="question_body flex">
            <div className="flex_1 question_div">
              <Menu
                className="question_menu"
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 8px 0 #e5e5e5',
                  borderRadius: '8px',
                }}
                onClick={handleClick}
                selectedKeys={[currentIndex]}
                mode="horizontal"
              >
                <Menu.Item key="all">全部问题</Menu.Item>
                <Menu.Item key="latest">最新回答</Menu.Item>
                <Menu.Item key="unsolved">未解决</Menu.Item>
                <Menu.Item key="solved">已解决</Menu.Item>
                <Menu.Item key="mine">我的问题</Menu.Item>
              </Menu>
              <CategoryTags hasAll/>
              <div className="post_items">
                {posts.map((item, index) => (
                  <div className="post_item" key={index}>
                    <div className="post_item_body flex_1">
                      <div
                        className="post_item_body_title"
                        onClick={() => {
                          router.push(item.href);
                        }}
                      >
                        {item.title}

                        <div className="post_item_body_info clock_color">
                          <div>
                            <Tag
                              color={getColorByStrLength(item.auther)}
                              key={item.auther}
                            >
                              {item.auther.toUpperCase()}
                            </Tag>
                            {item.last_back}
                          </div>
                        </div>
                      </div>
                      <div className="post_item_body_info">
                        <div className="other_info">
                          <EyeOutlined
                            style={{
                              margin: '0 10px 0 20px',
                              fontSize: 18,
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
            <div className="question_left_div">
              <Affix offsetTop={top}>
                <div className="question_left_item">
                  <div className="question_left_title">公告</div>
                  <div className="question_left_list">
                    <ul>
                      <li
                        onClick={() => {
                          router.push('/question/aa');
                        }}
                      >
                        极客教育开启新时代
                      </li>
                      <li
                        onClick={() => {
                          router.push('/question/aa');
                        }}
                      >
                        彻底保护你的iPhone隐私，教你开启Apple ID两步验证
                      </li>
                      <li
                        onClick={() => {
                          router.push('/question/aa');
                        }}
                      >
                        Amazon Polly 上手实验
                      </li>
                      <li
                        onClick={() => {
                          router.push('/question/aa');
                        }}
                      >
                        揭秘你不知道的CloudFront用法
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="question_left_item flex">
                  <div
                    className="btn_item left1"
                    style={{
                      borderRight: '1px solid #e4e4e4',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
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
                  className="question_left_item flex"
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
                          {accountState.account.phoneNumber + '  ,你好'}
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
                              textDecoration: 'underline',
                            }}
                            className="tologin_green"
                            onClick={() => {
                              router.push('/login?from=/question');
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