//配置文件

//计时器
export const timer_clock: number = 60;

//校验
export const phone_reg = /^[1][3,4,5,7,8][0-9]{9}$/;
export const psw_reg = /((?=.*[a-z])|(?=.*\d)|(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{6,20}/i;

//订单状态
export const orderStatusList: string[] = ['待支付', '已完成'];

//支付方式
export const payTypeList: string[] = ['支付宝', '微信'];

//产品类型
export const productTypeList: string[] = ['购买会员','点播课程'];