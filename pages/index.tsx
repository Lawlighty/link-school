import PcLayout from "../components/layouts/PcLayout";
import { Carousel, Menu, Card, Avatar  } from 'antd';
import { useState } from 'react'
import {RightOutlined, UserOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';
// 

export default function Home() {

  const { SubMenu } = Menu;
  //轮播图
  const [banner_picm, setBannerPic] = useState([
    {
      url:'https://static-dev.roncoo.com/course/BewWesgqDLm6xO5QFlWMSfMFxKKb1LuV.jpg',
      title:'小程序体验环境'
    },
    {
      url:'https://static-dev.roncoo.com/course/f7qzDxnJhPdJvnDygDfITyIieoyMDsnu.jpg',
      title:'领课教育系统'
    }
  ])
  
  //轮播图课程
  const [sub_items, setSubItems] = useState([
    {
      title:'后台开发',
      lists:[
        {
          name:'后台管理系统'
        },
        {
          name:'系统架构'
        },
        {
          name:'单点突破'
        },
        {
          name:'项目实战'
        },
      ],
      recommend_classes:[
        {
          url:'http://static.roncoos.com/edu/edu.jpg',
          href:'',
          name:'领课教育系统',
          price:100,
          vip_price:90
        },
        {
          url:'http://static.roncoos.com/edu/edu.jpg',
          href:'',
          name:'领课教育系统',
          price:100,
          vip_price:90
        },
      ]
    },
    {
      title:'后台开发2',
      lists:[
        {
          name:'后台管理系统'
        },
        {
          name:'系统架构'
        },
        {
          name:'单点突破'
        },
        {
          name:'项目实战'
        },
      ],
      recommend_classes:[
        {
          url:'http://static.roncoos.com/edu/edu.jpg',
          href:'',
          name:'领课教育系统',
          price:100,
          vip_price:90
        },
        {
          url:'http://static.roncoos.com/edu/edu.jpg',
          href:'',
          name:'领课教育系统',
          price:100,
          vip_price:90
        },
      ]
    },
    {
      title:'后台开发3',
      lists:[
        {
          name:'后台管理系统'
        },
        {
          name:'系统架构'
        },
        {
          name:'单点突破'
        },
        {
          name:'项目实战'
        },
      ],
      recommend_classes:[
        {
          url:'http://static.roncoos.com/edu/edu.jpg',
          href:'',
          name:'领课教育系统',
          price:100,
          vip_price:90
        },
        {
          url:'http://static.roncoos.com/edu/edu.jpg',
          href:'',
          name:'领课教育系统',
          price:100,
          vip_price:90
        },
      ]
    },
    {
      title:'后台开发4',
      lists:[
        {
          name:'后台管理系统'
        },
        {
          name:'系统架构'
        },
        {
          name:'单点突破'
        },
        {
          name:'项目实战'
        },
      ],
      recommend_classes:[
        {
          url:'http://static.roncoos.com/edu/edu.jpg',
          href:'',
          name:'领课教育系统',
          price:100,
          vip_price:90
        },
        {
          url:'http://static.roncoos.com/edu/edu.jpg',
          href:'',
          name:'领课教育系统',
          price:100,
          vip_price:90
        },
      ]
    },
    
  ])
  
  //精品推荐
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

  //试卷
  const test_paper = [
    {
      name:'广州天河数学二模1',
      href:'',
      tag:'九',
      price:'',
      looks:116,
      download:5
    },
    {
      name:'广州天河数学二模2',
      href:'',
      tag:'一',
      price:'45',
      looks:116,
      download:50
    },
    {
      name:'广州天河数学二模3',
      href:'',
      tag:'七',
      price:'',
      looks:54,
      download:5
    },
    {
      name:'广州天河数学二模4',
      href:'',
      tag:'九',
      price:'',
      looks:116,
      download:5
    },
  ]

  // 直播
  const live_reco = [
    {
      img_url:'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name:'Mysql入门到精通1',
      isfree:true,
      price:'',
      vip_price:'',
      avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username:'张三',
      leanrs:135,
      sale_tag:10,
      live_time:'2020-09-09 22:31:00'
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
      leanrs:135,
      sale_tag:10,
      live_time:'2020-09-09 22:31:00'
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
      leanrs:135,
      sale_tag:10,
      live_time:'2020-09-09 22:31:00'
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
      leanrs:135,
      sale_tag:10,
      live_time:'2020-09-09 22:31:00'
    },

  ]
  return (
    <PcLayout showFooter={true} isBlack={true}>
      <div className="index_page">
        {/* 轮播图 */}
        <div className="banner_div">
          <div className="banner-content">
            <div className="class_block">
              <Menu className="banner_list" mode="vertical">
                {
                  sub_items.map((item, index) =>(
                    <SubMenu key={item.title} title={item.title}> 
                      <div  className="banner_list_sub" style={{ top:`-${index*48+4}px` }}>
                        <div className="sub_div">
                          {
                            item.lists.map((litem, lindex)=>(
                              <div className="sub_div_item" key={litem.name+lindex}>
                                <a  className="name">
                                  {litem.name}
                                </a>
                                
                              </div>
                            ))
                          }
                        </div>
                        <div className="foot_courses">
                            <div className="courses_top">
                              课程推荐
                            </div>
                          {
                            item.recommend_classes.map((ritem,rindex) =>(
                              <div key={ritem.url+rindex}>     
                                <div className="foot_course fl">
                                  <div className="img_box">
                                    <a  href={ritem.href} className="" target="_blank">
                                      <img  src={ritem.url} alt="" className="course_img"/>
                                    </a>  
                                  </div> 
                                  <div className="course_info">
                                    <a  href="/view/1262283551264952322" className="course_name" target="_blank">
                                      {ritem.name}
                                    </a> 
                                    <div  className="course_price">
                                      ￥{ritem.price}
                                      <p className="font_12 c_gold course_price_vip">
                                        
                                        SVIP:￥{ritem.vip_price}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        
                      </div>
                    </SubMenu>
                  ))
                }
              </Menu>
            </div>
            <div className="banner_pics">
              <Carousel effect="fade" className='banner_dots' autoplay>
                {
                  banner_picm.map((item) =>(
                    <div key={item.url}>
                      <img className="banner_img" src={item.url} alt={item.title}/>
                    </div>
                  ))
                }
              </Carousel>
            </div>
          </div>
          
        </div>

        {/* 精品推荐 */}
        <div className="index_content">
            <div className="index_content_zone">
                <div className="zone_header">
                  <div className="big_text">
                    <div style={{flex:1}}>
                      精品推荐
                      <span className="small_text">免费任看，让你学习无忧</span> 
                    </div>
                    
                    <a href="/list" className="small_text link_text">
                      更多课程<RightOutlined />
                    </a>
                  </div>
                </div>
              
                <div className="zone_body">
           
                  {
                    boutique_reco.map((item)=>(
                      <div className="zone_body_item" key={item.name}>
                        <Card
                          hoverable
                          style={{ width: '100%' }}
                          cover={<img alt="example" src={item.img_url} className="card_img" />}
                        >
                          <div>
                            <div className='zone_body_item_name'>
                              {item.name}
                            </div>
                            <div className='zone_body_item_tag'>
                              {
                                item.isfree?
                                (
                                  <div className="free">免费</div>
                                ):
                                (
                                  <div style={{display:'flex'}}>
                                    <div style={{ paddingRight: '10px',color: '#333'}}>￥100.00</div>
                                    <div style={{ color: '#fb6260'}}>SVIP:￥90.00</div>
                                  </div>
                                )
                              }
                            </div>
                            <div className='zone_body_item_info'>
                              <div className='zone_body_item_who_info'>
                                {
                                  item.avatar?
                                  (
                                    <Avatar size="small" src={item.avatar} />   
                                    // <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> 
                                  ):
                                  (
                                    <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> 
                                  )
                                }
                                
                                <div className="name">{item.username}</div>
                              </div>
                              <div>
                                  <span>{item.leanrs+' '}人已经学习</span>
                              </div>
                            </div>
                          </div> 
                        </Card>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>

        {/* 试卷 */}
        <div className="index_content">
            <div className="index_content_zone">
                <div className="zone_header">
                  <div className="big_text">
                    <div style={{flex:1}}>
                      试卷专区 
                      <span className="small_text">试卷专区</span> 
                    </div>
                    
                    <a href="/list" className="small_text link_text">
                      更多试卷<RightOutlined />
                    </a>
                  </div>
                </div>
              
                <div className="zone_body bg_white" style={{padding:'20px'}}>
                  {
                    test_paper.map((item) =>(

                      <div className="exam_div">
                        <div className="exam_item">
                          <div className="exam_item_title_div">
                            <div className="exam_item_title_tag">{item.tag}</div>
                            <div className="exam_item_title">{item.name}</div>
                            {
                              item.price?
                              (
                              <div className="exam_item_title_price">￥ {item.price}</div>
                              ):
                              (
                                <div className="exam_item_title_price">免费</div>
                              )
                            }
                            
                          </div>
    
                          <div className="exam-item-tip">
                              浏览:<span style={{margin:'0 5px'}}>{item.looks}</span> 下载:<span style={{margin:'0 5px'}}>{item.download}</span>次
                          </div>
    
                        </div>
    
                      </div>
                    ))
                  }
                 

                </div>
            </div>
        </div>

        {/* 热门课程 */}
        <div className="index_content">
            <div className="index_content_zone">
                <div className="zone_header">
                  <div className="big_text">
                    <div style={{flex:1}}>
                      热门课程 
                      <span className="small_text">站长推荐，每一个都是精品</span> 
                    </div>
                    
                    <a href="/list" className="small_text link_text">
                      更多课程<RightOutlined />
                    </a>
                  </div>
                </div>
              
                <div className="zone_body">
           
                  {
                    boutique_reco.map((item)=>(
                      <div className="zone_body_item" key={item.name}>
                        <Card
                          hoverable
                          style={{ width: '100%' }}
                          cover={<img alt="example" src={item.img_url} className="card_img" />}
                        >
                          <div>
                            <div className='zone_body_item_name'>
                              {item.name}
                            </div>
                            <div className='zone_body_item_tag'>
                              {
                                item.isfree?
                                (
                                  <div className="free">免费</div>
                                ):
                                (
                                  <div style={{display:'flex'}}>
                                    <div style={{ paddingRight: '10px',color: '#333'}}>￥100.00</div>
                                    <div style={{ color: '#fb6260'}}>SVIP:￥90.00</div>
                                  </div>
                                )
                              }
                            </div>
                            <div className='zone_body_item_info'>
                              <div className='zone_body_item_who_info'>
                                {
                                  item.avatar?
                                  (
                                    <Avatar size="small" src={item.avatar} />   
                                    // <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> 
                                  ):
                                  (
                                    <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> 
                                  )
                                }
                                
                                <div className="name">{item.username}</div>
                              </div>
                              <div>
                                  <span>{item.leanrs+' '}人已经学习</span>
                              </div>
                            </div>
                          </div> 
                        </Card>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>

        {/* 直播课程 */}
        <div className="index_content">
            <div className="index_content_zone">
                <div className="zone_header">
                  <div className="big_text">
                    <div style={{flex:1}}>
                      直播课程  
                      <span className="small_text">每个都是精品，准时开播</span> 
                    </div>
                    
                    <a href="/list" className="small_text link_text">
                      更多直播<RightOutlined />
                    </a>
                  </div>
                </div>
              
                <div className="zone_body">
           
                  {
                    live_reco.map((item)=>(
                      <div className="zone_body_item" key={item.name}>
                        {
                          item.sale_tag?
                          (
                            <div className="sale_tag">
                              优惠券
                              <div className="sale_tag_price">{item.sale_tag}</div>
                            </div>
                          ):
                          null
                        }
                        
                        <Card
                          hoverable
                          style={{ width: '100%' }}
                          cover={<img alt="example" src={item.img_url} className="card_img" />}
                        >
                          <div className="rel_div">
                            {
                              item.live_time?
                              (
                                <div className="live_time">开播时间: {item.live_time}</div>
                              ):
                              null
                            }
                            
                            <div className='zone_body_item_name'>
                              {item.name}
                            </div>
                            <div className='zone_body_item_tag'>
                              {
                                item.isfree?
                                (
                                  <div className="free">免费</div>
                                ):
                                (
                                  <div style={{display:'flex'}}>
                                    <div style={{ paddingRight: '10px',color: '#333'}}>￥100.00</div>
                                    <div style={{ color: '#fb6260'}}>SVIP:￥90.00</div>
                                  </div>
                                )
                              }
                            </div>
                            <div className='zone_body_item_info'>
                              <div className='zone_body_item_who_info'>
                                {
                                  item.avatar?
                                  (
                                    <Avatar size="small" src={item.avatar} />   
                                    // <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> 
                                  ):
                                  (
                                    <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> 
                                  )
                                }
                                
                                <div className="name">{item.username}</div>
                              </div>
                              <div>
                                  <span>{item.leanrs+' '}人已经学习</span>
                              </div>
                            </div>
                          </div> 
                        </Card>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
      

        {/* 新闻资讯 */}
        <div className="index_content">
            <div className="index_content_zone">
                <div className="zone_header">
                  <div className="big_text">
                    <div style={{flex:1}}>
                      新闻资讯  
                      <span className="small_text">传递最新动态</span> 
                    </div>
                    
                    <a href="/list" className="small_text link_text">
                      更多资讯<RightOutlined />
                    </a>
                  </div>
                </div>
              
                <div className="zone_body">
                  {
                    [1,2,3,4,5,6,7].map((item)=>(

                      <div className="info_item">
                        <div className="info_item_div" style={{padding: '20px',background: '#fff', borderRadius: '8px'}}>
                          
                            <div className="info_title">
                                <div  className="info_title_left"></div>
                                <div  className="info_title_name">行业动态</div>
                                <a href="/list" className="small_text" target="_bank">
                                  更多<RightOutlined />
                                </a>
                            </div>
                            <div>
                              <img src="https://static-dev.roncoo.com/course/20a864190ac74acda0838d0eb41d3a43.png" alt="资讯图片" className="info_img"/>
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
                                    <EyeOutlined  style={{ margin:'0 10px' }}/>148
                                    <LikeOutlined style={{ margin:'0 10px' }}/>1
                                  </div>
                                </div>
                            </div>
                          
                          
                        </div>
                
                      </div>
                    ))
                  }
                 
                </div>
            </div>
        </div>
      </div>
    </PcLayout>
  );
}
