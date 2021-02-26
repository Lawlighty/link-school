import PcLayout from "@/components/layouts/PcLayout";
import Link from "next/link";
import { Input, Modal, Button, message } from "antd";
import { useState, useEffect } from "react";
import { timer_clock, phone_reg, psw_reg } from '../config';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

const { confirm } = Modal;

export default function Reset() {
  const router = useRouter()
  const { Search } = Input;

  //手机号
  const [ phoneNumber, setPhoneNumber ] = useState('');
  //验证码
  const [ verifyCode, setVerifyCode ] = useState('');
  //密码
  const [ passWord, setPassWord ] = useState('');
  //确认密码
  const [ repassWord, setRePassWord ] = useState('');
  //推荐码
  const [ referralCode, setReferralCode] = useState('');
  //是否勾选
  const [isread, setIsread] = useState(false);
  const onChangeIsRead = (e:any) => {
    setIsread(e.target.checked)
  }

  //验证码倒计时
  const [codeString, setCodeString] = useState('获取验证码');
  //是否发送验证码
  const [isSendCode, setIsSendCode] = useState(false);

  const getVerifyCode=()=>{
    //验证信息
    if(phoneNumber&&phone_reg.test(phoneNumber)){
      setIsSendCode(true)
      setCodeString(timer_clock+'')
    }else{
      message.error('请输入正确的手机号!');
    } 
  }
  
  useEffect(()=>{
    if(isSendCode){
      let timerId = null;
      const run = () => {
        if (parseInt(codeString) <= 0) {
          setCodeString('重新获取')
          setIsSendCode(false)
          return;
        }
        setCodeString(parseInt(codeString)  - 1+'');
        timerId = setTimeout(run, 1000);
      };
      timerId = setTimeout(run, 1000);
      return () => {
        timerId && clearTimeout(timerId);
      };
    }
  }, [codeString,isSendCode])

  //是否展示协议
  const [protocolvisible, setProtocolvisible] = useState(false);
  

  //注册
  const toRest = ()=>{
    //表单验证
    if(!phoneNumber||!phone_reg.test(phoneNumber)){
      console.log('phoneNumber==>',phoneNumber)
      message.error('请输入正确的手机号!');
      return
    }
    if(!verifyCode){
      console.log('verifyCode==>',verifyCode)
      message.error('请输入验证码!');
      return
    }
    if(!passWord||!psw_reg.test(passWord)){
      console.log('passWord==>',passWord)
      message.error('请输入正确的密码!');
      return
    }
    if(!repassWord||!psw_reg.test(repassWord)||passWord!=repassWord){
      console.log('repassWord==>',repassWord)
      message.error('请输入正确的确认密码!');
      return
    }
    //后台验证
    if(1){
      //修改密码提示
      confirm({
        style:{marginTop:200},
        title: '密码修改成功!',
        icon: <ExclamationCircleOutlined />,
        okText: '立即登录',
        cancelText: '取消',
        onOk() {
          //去首页
          router.push('/')
        },
        onCancel() {
          //去登录界面
          router.push('/login')
        },
      });
    }
  }
  return (
      <PcLayout showHeader customSeo={null} showFooter={false} isBlack={false}>
          <div className="register_box">
              <div className="center_box">
                  <div className="register_form">
                      <div className="title">
                          <div className="title_tab">
                              <span>重置密码</span>
                          </div>
                          <Link href="/login">
                              <a className="tologin">返回登录</a>
                          </Link>
                      </div>
                      <Input
                          placeholder="请输入手机号"
                          className="register_form_row"
                          onChange={(e) => {
                              setPhoneNumber(e.target.value);
                          }}
                      />
                      <div className="register_form_row verify_code">
                          <Input
                              placeholder="请输入手机验证码"
                              className="input_verify_code"
                              onChange={(e) => {
                                  setVerifyCode(e.target.value);
                              }}
                          />
                          <Button
                              type="primary"
                              className="get_verify_code"
                              disabled={isSendCode}
                              onClick={getVerifyCode}
                          >
                              {parseInt(codeString)
                                  ? codeString + ' s'
                                  : codeString}
                          </Button>
                      </div>
                      <Input.Password
                          placeholder="6-20位新密码，可用数字/字母/符号组合"
                          className="register_form_row"
                          onChange={(e) => {
                              setPassWord(e.target.value);
                          }}
                      />
                      <Input.Password
                          placeholder="确认新密码"
                          className="register_form_row"
                          onChange={(e) => {
                              setRePassWord(e.target.value);
                          }}
                      />

                      <div style={{ marginTop: 20 }}></div>
                      <Button
                          type="primary"
                          className="toregbtn active"
                          onClick={toRest}
                      >
                          确定
                      </Button>
                  </div>
              </div>
          </div>
      </PcLayout>
  );
}
