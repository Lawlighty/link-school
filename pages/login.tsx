import PcLayout from "../components/layouts/PcLayout";
import Link from "next/link";
import "./register.css";
import "./login.css";
import { Input, Checkbox, Modal, Button, message } from "antd";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { timer_clock } from '../config'


export default function Login() {
  const router = useRouter()
  const phone_reg = /^[1][3,4,5,7,8][0-9]{9}$/;

  //登录选项
  const [ loginTab, setLoginTab ] = useState(0);
  //手机号
  const [ phoneNumber, setPhoneNumber ] = useState('');
  //密码
  const [ passWord, setPassWord ] = useState('');
  //验证码
  const [ verifyCode, setVerifyCode ] = useState('');

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

  const toLogin = ()=>{
    if(!phoneNumber||!phone_reg.test(phoneNumber)){
      message.error('请输入正确的手机号!');
    }
    else{
      if(loginTab===0){
        //密码登录
        if(!passWord){
          message.error('请输入密码!');
        }
        else{
          //后台验证

        }
        
      }
      else{
        //短信登录
        if(!verifyCode){
          message.error('请输入验证码!');
        }
        else{
          //后台验证
          console.log('verifyCode==>',verifyCode)

        }
  
      }
    }
    
  }
  return (
    <PcLayout showFooter={false} >
      <div className="register_box">
        <img src="/imgs/logins_bg.png" alt="" className="login_img"/>
        <div className="login_center_box">
          <div className="login_form">
            <div className="login_tabs">
              <div className="login_tabs_item" onClick={()=>{loginTab?setLoginTab(0):null}}>
                <span className={loginTab?'':'on'}>账号登录</span>
              </div>
              <div className="login_tabs_item" onClick={()=>{loginTab?null:setLoginTab(1)}}>
                <span className={loginTab?'on':''}>短信登录</span>
              </div>
            </div>
            <div className="login_form_body"> 
              <Input placeholder="请输入手机号" className="register_form_row" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
              {
                loginTab===0?
                (
                  <Input.Password placeholder="6-20位密码，可用数字/字母/符号组合" value={passWord}  className="register_form_row" onChange={(e)=>{setPassWord(e.target.value)}}/>
                )
                :
                (
                  <div className="register_form_row verify_code">
                  <Input placeholder="请输入手机验证码" className="input_verify_code" value={verifyCode} onChange={(e)=>{setVerifyCode(e.target.value)}}/>
                  <Button type="primary" className="get_verify_code" disabled={isSendCode} onClick={getVerifyCode}>{ codeString }</Button>
                </div>
                )
              }
              

              <Button className="login_btn" onClick={toLogin}>登录</Button>
              <div className="login_form_footer">
                <div onClick={()=>{router.push('/register')}}  className="login_form_footer_item">用户注册</div>
                <div onClick={()=>{router.push('/reset')}}  className="login_form_footer_item">忘记密码</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PcLayout>
  );
}