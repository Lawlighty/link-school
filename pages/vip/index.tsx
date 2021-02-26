import PcLayout from '@/components/layouts/PcLayout';
import { Modal, Button } from 'antd';
import { useState } from 'react';
import CashierDesk from '@/components/pay/CashierDesk';


export default function Vip() {
    const [current_buy_index, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const [pay_way, sePayWay] = useState(0); //0-->支付宝  1-->微信
    const [pay_way_loading, sePayWayLoading] = useState(false); //选择支付方式 loading
    const [pay_code_visible, sePayCode] = useState(false); //支付二维码

    const vip_items = [
        {
            name: '月度会员',
            now_price: 9.99,
            days: 30,
            old_price: 15,
            buyInfo: '学院会员1个月使用期(30天)',
        },
        {
            name: '季度会员',
            now_price: 29.99,
            days: 90,
            old_price: 45,
            buyInfo: '学院会员3个月使用期(90天)',
        },
        {
            name: '年度会员',
            now_price: 99.99,
            days: 360,
            old_price: 180,
            buyInfo: '学院会员12个月使用期(360天)',
        },
    ];
    const changeBuyIndex = (index: number) => {
        setCurrentIndex(index);
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const changePayWay = (index: number) => {
        sePayWay(index);
    };

    const choseWayTopay = () => {
        sePayWayLoading(true);
        setTimeout(() => {
            sePayCode(true);
            sePayWayLoading(false);
            setVisible(false);
        }, 3000);
    };

    const handleCancelCode =() => {
        sePayCode(false);
    }
    return (
        <PcLayout
            showHeader={true}
            customSeo={{ title: '超级会员(SVIP)-极课学院' }}
            showFooter={true}
            isBlack={false}
        >
            <div className="vip_page">
                <div className="cover">
                    <h3 className="cover-title">超级会员（SVIP）享专属特权</h3>
                    <p className="cover-tip">
                        海量课程专享，付费课程免费学习，超低折扣课程，一切只为助力您的学习成长
                    </p>

                    <ul className="cover-activity">
                        <li className="cover-activity-item">
                            <img
                                src="/imgs/vip/free.png"
                                alt=""
                                className="cover-activity-icon"
                            />
                            <h5 className="cover-activity-title">免费课程</h5>
                            <p className="cover-activity-tip">专属课程免费看</p>
                        </li>
                        <li className="cover-activity-item">
                            <img
                                src="/imgs/vip/off.png"
                                alt=""
                                className="cover-activity-icon"
                            />
                            <h5 className="cover-activity-title">超低折扣</h5>
                            <p className="cover-activity-tip">最低5折起</p>
                        </li>
                        <li className="cover-activity-item">
                            <img
                                src="/imgs/vip/gift.png"
                                alt=""
                                className="cover-activity-icon"
                            />
                            <h5 className="cover-activity-title">活动专享</h5>
                            <p className="cover-activity-tip">活动期享折上折</p>
                        </li>
                    </ul>
                </div>
                <div className="vip-box">
                    <div className="vip-side">
                        <img
                            src="/imgs/vip/vip_cust.svg"
                            alt=""
                            className="vip-img"
                        />
                        <h5 className="vip-side-title">超级会员</h5>
                        <p className="vip-side-tip">开通即刻生效</p>
                    </div>

                    <div className="vip_main">
                        {vip_items.map((item, index) => (
                            <div
                                className={[
                                    index === current_buy_index ? 'active' : '',
                                    'vip_item',
                                ].join(' ')}
                            >
                                <div>
                                    <img
                                        src="/imgs/vip/v_icon.png"
                                        alt=""
                                        className="v_icon"
                                    />
                                </div>
                                <div className="v_name">{item.name}</div>
                                <div className="v_price">
                                    ￥
                                    <span style={{ fontSize: 36 }}>
                                        {item.now_price}
                                    </span>
                                    / {item.days}天
                                </div>
                                <div className="v_original">
                                    ￥ {item.old_price}
                                </div>
                                <button
                                    className="vip_pay_btn"
                                    onClick={() => changeBuyIndex(index)}
                                >
                                    立即购买
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="vip-tip">
                    <p className="vip-side-explain">会员权益与服务说明</p>
                    <p className="vip-side-explain-text">
                        <span>1、</span>
                        会员有效期内可免费学习会员免费课。
                    </p>
                    <p className="vip-side-explain-text">
                        <span>2、</span>
                        会员折扣：会员有效期内，购买学院付费课程可享有对应会员折扣。
                    </p>
                    <p className="vip-side-explain-text">
                        <span>3、</span>
                        会员到期：自购买之日起，所购会员对应的权益随会员过期自动到期，临近到期您可进行会员续费。
                    </p>
                    <p className="vip-side-explain-text">
                        <span>4、</span>
                        会员续费：当前会员未到期进行续费的用户，权益和有效期自动顺延。
                    </p>
                    <p className="vip-side-explain-text">
                        <span>5、</span>
                        会员属于虚拟商品，一经售出，不予退费。
                    </p>
                    <p className="vip-side-explain-text">
                        <span>6、</span>
                        禁止用户使用任何方式利用本站文库为他人提供有偿服务，一经发现，本站有权查封该账号并追究法律责任
                    </p>
                </div>
                <div style={{ height: 50 }}></div>
                <Modal
                    title="订单详情"
                    visible={visible}
                    onCancel={handleCancel}
                    footer={null}
                    className="nopadding_modal"
                >
                    <div className="vip_buy_title">
                        <div style={{ width: '50%', textAlign: 'center' }}>
                            购买信息
                        </div>
                        <div style={{ width: '30%', textAlign: 'center' }}>
                            价格
                        </div>
                        <div style={{ flex: 1 }}></div>
                    </div>
                    <div className="vip_buy_info">
                        <div style={{ width: '50%', textAlign: 'center' }}>
                            {vip_items[current_buy_index]['buyInfo']}
                        </div>
                        <div
                            style={{
                                width: '30%',
                                textAlign: 'center',
                                color: 'red',
                            }}
                        >
                            ￥{vip_items[current_buy_index]['now_price']}
                        </div>
                        <div style={{ flex: 1 }}></div>
                    </div>
                    <div className="buy_way_pay flex">
                        <div className="flex_1 pay_way_item">
                            <img
                                src="/imgs/vip/支付宝.png"
                                alt=""
                                className="pay_icon"
                                onClick={() => changePayWay(0)}
                            />
                            {pay_way == 0 ? (
                                <img
                                    src="/imgs/vip/选中.png"
                                    alt=""
                                    className="pay_icon_chose"
                                />
                            ) : null}
                        </div>
                        <div className="flex_1 pay_way_item">
                            <img
                                src="/imgs/vip/微信.png"
                                alt=""
                                className="pay_icon"
                                onClick={() => changePayWay(1)}
                            />
                            {pay_way == 1 ? (
                                <img
                                    src="/imgs/vip/选中.png"
                                    alt=""
                                    className="pay_icon_chose"
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="modal_foot">
                        <Button
                            className="next_btn"
                            loading={pay_way_loading}
                            onClick={choseWayTopay}
                        >
                            {!pay_way_loading ? '下一步' : '正在提交'}
                        </Button>
                    </div>
                </Modal>

                <CashierDesk
                    pay_code_visible={pay_code_visible}
                    handleCancelCode={handleCancelCode}
                    pay_way={pay_way}
                    pay_price={vip_items[current_buy_index]['now_price']}
                />
            </div>
        </PcLayout>
    );
}