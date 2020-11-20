import PcLayout from '../../components/layouts/PcLayout';
import {
    Button,
    Input,
    message,
} from 'antd';
import { useState, useEffect } from 'react';
import AccountLeft from '../../components/account_left/AccountLeft';
import AccountState from '../../store/accountinfo';
import { useRouter } from 'next/router';
import { timer_clock, phone_reg ,psw_reg } from '../../config';


export default function AccountInfo() {
    const router = useRouter();
    const accountState = AccountState.useContainer();
    console.log('accountState', accountState);
    //表单信息
    const old_account = {
        phoneNumber: accountState.account.phoneNumber,
        code: '',
        psw: '',
        re_psw: '',
    };
    const [account, setAccount] = useState(old_account);

    const changeAccountInfo = (key, value) => {
        let new_account = account;
        new_account[key] = value;
        // console.log('accountInfo', accountInfo);
        // console.log('new_account', new_account);
        setAccount(new_account);
    };

    //验证码倒计时
    const [codeString, setCodeString] = useState('获取验证码');
    //是否发送验证码
    const [isSendCode, setIsSendCode] = useState(false);

     useEffect(() => {
         if (isSendCode) {
             let timerId = null;
             const run = () => {
                 if (parseInt(codeString) <= 0) {
                     setCodeString('重新获取');
                     setIsSendCode(false);
                     return;
                 }
                 setCodeString(parseInt(codeString) - 1 + '');
                 timerId = setTimeout(run, 1000);
             };
             timerId = setTimeout(run, 1000);
             return () => {
                 timerId && clearTimeout(timerId);
             };
         }
     }, [codeString, isSendCode]);
    const getVerifyCode = () => {
        // 验证信息
        if (old_account.phoneNumber && phone_reg.test(old_account.phoneNumber)) {
            setIsSendCode(true);
            setCodeString(timer_clock + '');
        } else {
            message.error('请输入正确的手机号!');
        }
    };
    const changePsw = () => {
        if (!account.code) {
            message.error('请输入验证码!');
            return;
        } else if (!account.psw || !psw_reg.test(account.psw)) {
            message.error('请输入正确的密码!');
            return;
        } else if (account.psw != account.re_psw) {
            message.error('确认密码必须一致!');
            return;
        } else {
            message.success('修改成功!');
            router.replace('/login');
        }
    };
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
                        <ul className="tabs ">
                            <a className="tab on">修改密码</a>
                        </ul>

                        <div className="main_cont form">
                            <div className="form_item">
                                <div className="label">手机:</div>
                                <Input
                                    className="info_input"
                                    defaultValue={account.phoneNumber}
                                    disabled={true}
                                />
                            </div>
                            <div className="form_item">
                                <div className="label">验证码:</div>
                                <Input
                                    className="info_input"
                                    placeholder="请输入手机验证码"
                                    defaultValue={account.code}
                                    onChange={(e) => {
                                        changeAccountInfo(
                                            'code',
                                            e.target.value,
                                        );
                                    }}
                                />
                                <Button
                                    type="primary"
                                    className="reset_get_code_btn"
                                    disabled={isSendCode}
                                    onClick={getVerifyCode}
                                >
                                    {parseInt(codeString)
                                        ? codeString + ' s'
                                        : codeString}
                                </Button>
                            </div>
                            <div className="form_item">
                                <div className="label">重置密码:</div>
                                <Input.Password
                                    className="info_input"
                                    placeholder="请输入密码"
                                    defaultValue={account.psw}
                                    onChange={(e) => {
                                        changeAccountInfo(
                                            'psw',
                                            e.target.value,
                                        );
                                    }}
                                />
                            </div>
                            <div className="form_item">
                                <div className="label">确定密码:</div>
                                <Input.Password
                                    className="info_input"
                                    placeholder="请再次输入新密码"
                                    defaultValue={account.re_psw}
                                    onChange={(e) => {
                                        changeAccountInfo(
                                            're_psw',
                                            e.target.value,
                                        );
                                    }}
                                />
                            </div>
                            <div className="form_item">
                                <div className="label"></div>
                                <div className="text">
                                    <button
                                        disabled={
                                            account.re_psw.length > 0 &&
                                            account.psw.length > 0 &&
                                            account.code.length > 0
                                        }
                                        style={{ width: '250px' }}
                                        className="submit_btn"
                                        onClick={() => {
                                            changePsw();
                                        }}
                                    >
                                        确认
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PcLayout>
    );
}
