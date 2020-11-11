import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import './RightWindow.css'

// showFunc,   //右侧 功能
// showMini,   //小程序
// showService //客服

export default function RightWindow({showFunc, showMini, showService}:{showFunc:boolean, showMini:boolean, showService:boolean}){
    return(
        <>
            {/* 是否展示功能 */}
            {
                showFunc?
                (
                    <div className="func_div">
                        {
                            showMini?
                            (
                                <div className="func_div_item mimi_img">
                                    <div className="middle_ware"></div>
                                    <img src="/imgs/小程序_black.png" alt="" className="func_div_item_img"/>
                                    <div>小程序</div>

                                    <div className="mini_code_div">

                                        <img className="mini_code_pic" src="/imgs/mini_code_pic.jpg" alt=""/>
                                        <div style={{color:'#999'}}>
                                            关注小程序<br/>
                                            学习更健康
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            null
                        }
                        {
                            showService?
                            (
                                <div className="func_div_item kefu_img">
                                    <div className="middle_ware"></div>
                                    <img src="/imgs/客服_black.png" alt="" className="func_div_item_img"/>
                                    <div>客服</div>

                                    <div className="kefu_div">
                                        <div className="kefu_div_item1">
                                            <img className="qq_icon" src="/imgs/QQ.png" alt=""/> <a>客服:123456</a>
                                        </div>
                                        <div className="kefu_div_item2">
                                            <img className="qq_icon" src="/imgs/QQ.png" alt=""/> <a>客服:123456</a>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            null
                        }
                    </div>
                ):
                null
            }

            
            
            <BackTop>
                <UpOutlined className="toTop"/>
            </BackTop> 
        </>
    )
}