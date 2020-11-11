import PcLayout from "../components/layouts/PcLayout";
import './index.css';
import { Carousel, Menu, Card, Avatar  } from 'antd';
import { useState } from 'react'
import { relative } from "path";
import {RightOutlined, UserOutlined } from '@ant-design/icons';
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
  return (
    <PcLayout showFooter={true} >
      <div className="index_page">
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
                          cover={<img alt="example" src={item.img_url} />}
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
      </div>
    </PcLayout>
  );
}
