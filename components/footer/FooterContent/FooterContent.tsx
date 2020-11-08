import './FooterContent.css'
import { useState } from 'react'

export default function FooterContent(){

    //链接信息
    const info:any[] = [
        {
            title:'帮助中心',
            list:[
                {
                    name:'如何支付',
                    link:'',
                    target:'_self'
                },
                {
                    name:'如何学习',
                    link:'',
                    target:'_self'
                }
            ]
        },
        {
            title:'关于我们',
            list:[
                {
                    name:'联系我们',
                    link:'',
                    target:'_self'
                },
                {
                    name:'公司简介',
                    link:'',
                    target:'_self'
                }
            ]
        },
        {
            title:'协议相关',
            list:[
                {
                    name:'隐私协议',
                    link:'',
                    target:'_self'
                },
                {
                    name:'讲师协议',
                    link:'',
                    target:'_self'
                },
                {
                    name:'用户协议',
                    link:'',
                    target:'_self'
                }
            ]
        }, 
        {
            title:'商务合作',
            list:[
                {
                    name:'项目合作',
                    link:'',
                    target:'_self'
                },
                {
                    name:'课程合作',
                    link:'',
                    target:'_self'
                },
            ]
        },
        {
            title:'联系客服',
            list:[
                {
                    name:'客服QQ:513781560',
                    link:'',
                    target:'_blank'
                },
                {
                    name:'客服QQ:297115770',
                    link:'',
                    target:'_blank'
                },
            ]
        },

    ]
     
    const [footerMsg, setFooterMsg] = useState(info)

    //图片信息
    const footer_pic:any[] = [
        {
            title:'官方微信',
            pic:'/imgs/wx.jpg'
        },
        {
            title:'官方微博',
            pic:'/imgs/wx2.jpg'
        },
    ]
    const [footerPic, setFooterPic] = useState(footer_pic)

    //友情链接
    const friends_link:any[] = [
        {
            title:'看看',
            url:'https://www.baidu.com/',
            target:'_blank'
        },
        {
            title:'平台帮助文档',
            pic:'http://help.roncoo.net/',
            target:'_blank'
        },
        {
            title:'龙果学院',
            pic:'https://www.roncoo.com/',
            target:'_blank'
        },
        {
            title:'领课网络',
            pic:'https://www.roncoo.net/',
            target:'_blank'
        },
    ]
    const [friendsLink, setFriendsLink] = useState(friends_link)
    return(
        <>
            <div className="footer_content">
                {
                    footerMsg.map((item)=>(
                        <div className="footer_msg" key={item.title}>
                            <ul>
                                <li className="m_header">{item.title}</li>
                                 <li className="m_row"></li>
                                 {
                                     item.list.map((list_item)=>(
                                        <li key={list_item.name}>
                                            <a href="/terrace/1267348859224440834" className="" target={list_item.target}>{ list_item.name }</a>
                                        </li>
                                     ))
                                 }
                            </ul>

                        </div>
                    ))
                }
                <div className="m_right">
                    {
                        footerPic.map((item) => (
                            <div className="footer_msg" key={item.title}>
                                <ul>
                                    <li className="m_header">{ item.title }</li> 
                                    <li>
                                        <img  src={ item.pic } alt=""/>
                                    </li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
                
                <div className="friend_link">
                    <ul className="clearfix">
                        <li className="link_one">友情链接:</li>
                        {
                            friendsLink.map((item)=>(
                                <li key={item.title}>
                                    <a href={item.url} target={item.target}>{ item.title }</a>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        </>
    )
}