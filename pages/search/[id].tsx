import PcLayout from '../../components/layouts/PcLayout';
import { Input, Avatar, Pagination, Affix } from 'antd';
import { useState, useEffect} from 'react';
import {
    UserOutlined,
} from '@ant-design/icons';
import { withRouter } from 'next/router';

const { Search } = Input;

const Searcher = ({ router }) => {

    const [top, setTop] = useState(90);
    console.log('search 页面的router', router);
    const [searchValue, setSearchValue] = useState('')
    const [searchTabIndex, setSearchTabIndex] = useState(0);


    useEffect(() => {
        const key = router.query.id;
        setSearchValue(key);
    },[])
    const onSearch = (value) => {
        if (value) {
             console.log(value);
             console.log('searchValue', searchValue);
             router.push('/search/' + value);
        }
       
    }

    const onChangePage = (page) => {
        console.log('page', page);
    };
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

    const seasrch_list = [
        {
            title: '面向对象程序设计----JAVA',
            auther: '张三李四',
            avatar: '',
            brief:
                'java语言是一种面向对象语言，是业界使用最为广泛的语言，十二年前就占据了1/4的编程语言份额，到今天仍然以1/5的比例站在编程语言排行榜的前列。十二年前就占据了1/4的编程语言份额，到今天仍然以1/5的比例站在编程语言排行榜的前列。',
            people: '1234',
            img:
                'http://edu-image.nosdn.127.net/B2B4D218926FB3D1D7A569B7D9EBADA4.png?imageView&thumbnail=426y240&quality=100',
        },
        {
            title: '面向对象程序设计----JAVA',
            auther: '张三李四',
            avatar: '',
            brief:
                'java语言是一种面向对象语言，是业界使用最为广泛的语言，十二年前就占据了1/4的编程语言份额，到今天仍然以1/5的比例站在编程语言排行榜的前列。十二年前就占据了1/4的编程语言份额，到今天仍然以1/5的比例站在编程语言排行榜的前列。',
            people: '1234',
            img:
                'http://edu-image.nosdn.127.net/B2B4D218926FB3D1D7A569B7D9EBADA4.png?imageView&thumbnail=426y240&quality=100',
        },
        {
            title: '面向对象程序设计----JAVA',
            auther: '张三李四',
            avatar: '',
            brief:
                'java语言是一种面向对象语言，是业界使用最为广泛的语言，十二年前就占据了1/4的编程语言份额，到今天仍然以1/5的比例站在编程语言排行榜的前列。十二年前就占据了1/4的编程语言份额，到今天仍然以1/5的比例站在编程语言排行榜的前列。',
            people: '1234',
            img:
                'http://edu-image.nosdn.127.net/B2B4D218926FB3D1D7A569B7D9EBADA4.png?imageView&thumbnail=426y240&quality=100',
        },
        {
            title: '面向对象程序设计----JAVA',
            auther: '张三李四',
            avatar: '',
            brief:
                'java语言是一种面向对象语言，是业界使用最为广泛的语言，十二年前就占据了1/4的编程语言份额，到今天仍然以1/5的比例站在编程语言排行榜的前列。十二年前就占据了1/4的编程语言份额，到今天仍然以1/5的比例站在编程语言排行榜的前列。',
            people: '1234',
            img:
                'http://edu-image.nosdn.127.net/B2B4D218926FB3D1D7A569B7D9EBADA4.png?imageView&thumbnail=426y240&quality=100',
        },
    ];
    
    return (
        <PcLayout
            showHeader={true}
            customSeo={null}
            showFooter={true}
            isBlack={false}
        >
            <div className="search_page">
                <div className="search_boxer">
                    <div className="search_field">
                        <Search
                            placeholder="输入搜索内容"
                            allowClear
                            enterButton="搜索"
                            size="large"
                            onSearch={onSearch}
                            value={searchValue}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="search_body">
                    <div className="search_div flex">
                        <div className="search_main_body flex_1">
                            <div className="search_tabs">
                                <ul className="search_tabs_ul flex">
                                    <li
                                        className={[
                                            'border-right',
                                            searchTabIndex === 0 ? 'on' : '',
                                        ].join(' ')}
                                        onClick={() => setSearchTabIndex(0)}
                                    >
                                        全部
                                    </li>
                                    <li
                                        className={[
                                            'border-right',
                                            searchTabIndex === 1 ? 'on' : '',
                                        ].join(' ')}
                                        onClick={() => setSearchTabIndex(1)}
                                    >
                                        视频
                                    </li>
                                    <li
                                        className={[
                                            'border-right',
                                            searchTabIndex === 2 ? 'on' : '',
                                        ].join(' ')}
                                        onClick={() => setSearchTabIndex(2)}
                                    >
                                        文档
                                    </li>
                                    <li
                                        className={[
                                            'border-right',
                                            searchTabIndex === 3 ? 'on' : '',
                                        ].join(' ')}
                                        onClick={() => setSearchTabIndex(3)}
                                    >
                                        论坛
                                    </li>
                                </ul>
                            </div>

                            <div className="item_lists">
                                {seasrch_list.map((item, index) => (
                                    <div className="item">
                                        <div className="item_img_div">
                                            <img
                                                className="item_img"
                                                src={item.img}
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <div className="t_1">
                                                {item.title}
                                            </div>
                                            <div className="t_2 flex item_auther_info">
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
                                                <div style={{ marginLeft: 10 }}>
                                                    {item.auther}
                                                </div>
                                            </div>
                                            <div className="brief">
                                                {item.brief}
                                            </div>
                                            <div className="item_footer">
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <UserOutlined />
                                                    <div
                                                        style={{
                                                            color: '#999',
                                                        }}
                                                    >
                                                        {item.people} 人已学习
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Pagination
                                defaultCurrent={1}
                                total={50}
                                onChange={onChangePage}
                                defaultPageSize={20}
                                style={{
                                    textAlign: 'center',
                                    marginTop: 20,
                                }}
                            />
                        </div>
                        <div>
                            <Affix offsetTop={top}>
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
                            </Affix>
                        </div>
                    </div>
                </div>
            </div>
        </PcLayout>
    );
}

export default withRouter(Searcher);