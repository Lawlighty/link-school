import { Modal, Button } from 'antd';


export default function CashierDesk({
    pay_code_visible,
    handleCancelCode,
    pay_way,
    pay_price,
}: {
    pay_code_visible: boolean;
    handleCancelCode: any;
    pay_way: number;
    pay_price: any;
}) {
    return (
        <div className="cashier_desk">
            <Modal
                title="收银台"
                visible={pay_code_visible}
                onCancel={handleCancelCode}
                footer={null}
                className="nopadding_modal codemodal "
            >
                <div className="tip">
                    {pay_way ? '微信' : '支付宝'}
                    支付￥{pay_price}元
                </div>
                <div className="code">二维码</div>
                <p className="tip2">
                    请使用支付宝扫描
                    <br /> 二维码以完成订单
                </p>
                <div className="tip_panel">
                    提示: <br />
                    支付成功前请勿手动关闭页面 <br />
                    二维码两小时内有效,请及时扫码支付
                </div>
            </Modal>
        </div>
    );
}