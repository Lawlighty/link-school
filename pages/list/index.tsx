import PcLayout from "../../components/layouts/PcLayout";
import { withRouter } from 'next/router';
// import './list_index.css';
import { Card, Avatar, Pagination } from 'antd';
import { useState } from 'react';
import {
    UserOutlined,
} from '@ant-design/icons';

const List = ({ router }) => {

    // useEffect(() => {
    //     const headerIndexer = HeaderIndexer.useContainer();
    //     headerIndexer.changeCurrentHeaderIndex(2);
    // }, []);

    console.log('视频界面的router', router);
    const query = router.query
    console.log('视频界面的query', query);

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
        }
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
        setCurrentCategoryno1(index)
    }
    const changeCat2 = (index: number) => {
        setCurrentCategoryno2(index);
    };
    const changeCat3= (index: number) => {
        setCurrentCategoryno3(index);
    };
    const changeFour = (index: number) => {
        setCurrentFour(index);
    };
    const boutique_reco = [
    {
      img_url:'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name:'Mysql入门到精通1',
      isfree:true,
      price:'',
      vip_price:'',
      avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username:'张三',
      leanrs:135
    },
    {
      img_url:'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name:'Mysql入门到精通2',
      isfree:false,
      price:100,
      vip_price:59.9,
      avatar:'',
      username:'张三',
      leanrs:135
    },
    {
      img_url:'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name:'Mysql入门到精通3',
      isfree:true,
      price:'',
      vip_price:'',
      avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username:'张三',
      leanrs:135
    },
    {
      img_url:'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name:'Mysql入门到精通4',
      isfree:false,
      price:100,
      vip_price:59.9,
      avatar:'',
      username:'张三',
      leanrs:135
    },
    {
      img_url:'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name:'Mysql入门到精通5',
      isfree:true,
      price:'',
      vip_price:'',
      avatar:'',
      username:'张三',
      leanrs:135
    },
    {
      img_url:'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name:'Mysql入门到精通6',
      isfree:false,
      price:100,
      vip_price:59.9,
      avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username:'张三',
      leanrs:135
    },
    {
      img_url:'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name:'Mysql入门到精通7',
      isfree:true,
      price:'',
      vip_price:'',
      avatar:'',
      username:'张三',
      leanrs:135
    },
    {
      img_url:'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name:'Mysql入门到精通8',
      isfree:true,
      price:'',
      vip_price:'',
      avatar:'',
      username:'张三',
      leanrs:135
    },

    ]
    
    const onChangePage = (page) => {
        console.log('page',page); 
    }
    return (
        <PcLayout
            showHeader={true}
            customSeo={null}
            showFooter={true}
            isBlack={false}
        >
            <div className="list_page">
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
                    <div className="index_content_zone">
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
                                                                color: '#333',
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
            </div>
        </PcLayout>
    );
}
export default withRouter(List);
