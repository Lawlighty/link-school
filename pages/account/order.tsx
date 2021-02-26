import PcLayout from '@/components/layouts/PcLayout';
import {  message, Pagination } from 'antd';
import { useState, } from 'react';
import AccountLeft from '@/components/account_left/AccountLeft';
import {  DatabaseOutlined } from '@ant-design/icons';
import { orderStatusList, payTypeList, productTypeList } from '../../config';
import CashierDesk from '@/components/pay/CashierDesk';

export default function Order() {

    //订单 
    //0-->所有
    //1-->待支付
    //2-->已完成
    const [tabInde, setTabIndex] = useState(0)


    // 订单
    const order_list = [
        {
            courseLogo: 'http://static.roncoos.com/edu/edu.jpg', //图片
            gmtCreate: '2020-11-19 09:41:58', //订单创建时间
            orderNo: '20201119094158167', //订单号
            orderStatus: 0, //订单状态
            payType: 1, //支付方式
            pricePaid: '100.00', //金额
            productId: '1262283551264952322',
            productName: '极课教育系统', //唱片名称
            productType: 1, //产品类型
            userNo: '2020111010295868652', //用户id
        },
        {
            courseLogo:
                'https://static-dev.roncoo.com/course/429d3dbf96d440b1817d3be5db971b57.jpg',
            gmtCreate: '2020-11-19 09:41:48',
            orderNo: '20201119094148839',
            orderStatus: 0,
            payType: 1,
            pricePaid: '1.00',
            productId: '1266256417825828865',
            productName:
                '微服务架构的分布式事务解决方案（Dubbo分布式事务处理）',
            productType: 1,
            userNo: '2020111010295868652',
        },
        {
            courseLogo:
                'https://static-dev.roncoo.com/course/I8Ti4Cxg3PTXkoXLOGXEdhZIURB5LxNz.jpg',
            gmtCreate: '2020-11-19 09:41:38',
            orderNo: '20201119094138307',
            orderStatus: 0,
            payType: 1,
            pricePaid: '100.00',
            productId: '1296412634514468866',
            productName: '运营管理',
            productType: 1,
            userNo: '2020111010295868652',
        },
    ];

    //取消支付
    const cancelPay = (item) => {
        message.success("订单取消成功!")
    }

     const onChangePage = (page) => {
         console.log('page', page);
    };
    const [pay_code_visible, sePayCode] = useState(false); //支付二维码
    const [currentPro, seCurrentPro] = useState(null); //当前选择产品

    const toPay = (item:object) => {
        seCurrentPro(item)
        sePayCode(true)
    }
    const handleCancelCode =() => {
        sePayCode(false);
    }
    return (
        <PcLayout
            showHeader={true}
            customSeo={null}
            showFooter={true}
            isBlack={false}
        >
            <div className="info_page">
                <div className="container">
                    <AccountLeft showPerCenter showRecruit={false} />
                    <div className="main_box">
                        <ul className="tabs  relative">
                            <a
                                className={[
                                    tabInde === 0 ? 'on' : '',
                                    'tab',
                                ].join(' ')}
                                onClick={() =>
                                    tabInde != 0 ? setTabIndex(0) : null
                                }
                            >
                                所有订单
                            </a>
                            <a
                                className={[
                                    tabInde === 1 ? 'on' : '',
                                    'tab',
                                ].join(' ')}
                                onClick={() =>
                                    tabInde != 1 ? setTabIndex(1) : null
                                }
                            >
                                待支付订单
                            </a>
                            <a
                                className={[
                                    tabInde === 2 ? 'on' : '',
                                    'tab',
                                ].join(' ')}
                                onClick={() =>
                                    tabInde != 2 ? setTabIndex(2) : null
                                }
                            >
                                已完成订单
                            </a>
                        </ul>

                        {0 ? (
                            <div className="notdata">
                                <DatabaseOutlined style={{ marginRight: 20 }} />
                                暂时没有数据
                            </div>
                        ) : (
                            <div className="person_info">
                                {order_list.map((item) => (
                                    <div
                                        className="order_content"
                                        key={item.orderNo}
                                    >
                                        <div className="order_title">
                                            <div className="order_num">
                                                订单号:
                                                <span
                                                    style={{ marginLeft: 20 }}
                                                >
                                                    {item.orderNo}
                                                </span>
                                            </div>
                                            <div className="order_time">
                                                <span
                                                    style={{ marginLeft: 40 }}
                                                >
                                                    {item.gmtCreate}
                                                </span>
                                            </div>
                                            <div className="order_type flex_1">
                                                <span>
                                                    {
                                                        productTypeList[
                                                            item.productType
                                                        ]
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="order_body flex">
                                            <div className="body_left flex_1">
                                                <img
                                                    src={item.courseLogo}
                                                    alt=""
                                                />
                                                <div className="flex_1">
                                                    {item.productName}
                                                </div>
                                            </div>
                                            <ul className="body_right flex_1 flex">
                                                <li className="money">
                                                    ￥{item.pricePaid}
                                                </li>
                                                <li>
                                                    {payTypeList[item.payType]}
                                                    支付
                                                </li>
                                                <li className="paystate">
                                                    {
                                                        orderStatusList[
                                                            item.orderStatus
                                                        ]
                                                    }
                                                </li>
                                                <li>
                                                    <div
                                                        className="go_pay order_btn"
                                                        onClick={() =>
                                                            toPay(item)
                                                        }
                                                    >
                                                        继续支付
                                                    </div>
                                                    <div
                                                        className="cancel_pay order_btn"
                                                        onClick={() =>
                                                            cancelPay(item)
                                                        }
                                                    >
                                                        取消支付
                                                    </div>
                                                </li>
                                            </ul>
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
                                        marginTop: 20,
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <CashierDesk
                    pay_code_visible={pay_code_visible}
                    handleCancelCode={handleCancelCode}
                    pay_way={currentPro ? currentPro.payType : null}
                    pay_price={currentPro ? currentPro.pricePaid : null}
                />
            </div>
        </PcLayout>
    );
}
