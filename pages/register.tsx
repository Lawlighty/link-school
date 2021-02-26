import PcLayout from "@/components/layouts/PcLayout";
import Link from "next/link";
import { Input, Checkbox, Modal, Button, message } from "antd";
import { useState, useEffect } from "react";
import { timer_clock, psw_reg, phone_reg } from '../config';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import AccountState from '../store/accountinfo';
import { _register } from '@/server/server';

const { confirm } = Modal;

export default function Register() {
 const accountState = AccountState.useContainer();
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
  const tologin = ()=>{
    //表单验证
    if (!phoneNumber || !phone_reg.test(phoneNumber)) {
      console.log('phoneNumber==>', phoneNumber);
      message.error('请输入正确的手机号!');
      return;
    }
    if (!verifyCode) {
      console.log('verifyCode==>', verifyCode);
      message.error('请输入验证码!');
      return;
    }
    if (!passWord || !psw_reg.test(passWord)) {
      console.log('passWord==>', passWord);
      message.error('请输入正确的密码!');
      return;
    }
    if (!repassWord || !psw_reg.test(repassWord) || passWord != repassWord) {
      console.log('repassWord==>', repassWord);
      message.error('请输入正确的确认密码!');
      return;
    }
    //后台验证
    // if (1) {
    // }
    let asyRegister = async () => {
      await _register(phoneNumber, verifyCode, passWord, referralCode)
          .then((data: any) => {
              if (data.status && data.status === 201) { 
                confirm({
                style: { marginTop: 200 },
                title: '注册成功!',
                icon: <ExclamationCircleOutlined />,
                okText: '立即登录',
                cancelText: '取消',
                onOk() {
                    //去首页
                    router.push('/');
                    //更新全局accountInfo
                    //   let now_accountinfo = {
                    //     isLogin: true,
                    //     phoneNumber: phoneNumber,
                    //     userName: '',
                    //     profilephoto:
                    //       'https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg',
                    //     gender: 2,
                    //     age: null,
                    //   };
                    //   accountState.setAccount(now_accountinfo);
                },
                onCancel() {
                    //去登录界面
                    router.push('/login');
                },
                });
              }
            console.log('注册成功',data)
          //注册提示
          
        })
        .catch((err: any) => {message.error(err.message);});
      };
      asyRegister();
  }
  return (
      <PcLayout showHeader customSeo={null} showFooter={false} isBlack={false}>
          <div className="register_box">
              <div className="center_box">
                  <div className="register_form">
                      <div className="title">
                          <div className="title_tab">
                              <span>注册用户</span>
                          </div>
                          <Link href="/login">
                              <a className="tologin">已有账号，立即登录</a>
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
                          placeholder="6-20位密码，可用数字/字母/符号组合"
                          className="register_form_row"
                          onChange={(e) => {
                              setPassWord(e.target.value);
                          }}
                      />
                      <Input.Password
                          placeholder="确认密码"
                          className="register_form_row"
                          onChange={(e) => {
                              setRePassWord(e.target.value);
                          }}
                      />
                      <Input
                          prefix="推荐码"
                          placeholder="没有可不填"
                          className="register_form_row"
                          onChange={(e) => {
                              setReferralCode(e.target.value);
                          }}
                      />
                      <div className="protocol_div">
                          <Checkbox
                              onChange={onChangeIsRead}
                              className="protocol_check"
                          >
                              我已经阅读并同意{' '}
                          </Checkbox>
                          <span
                              onClick={() => setProtocolvisible(true)}
                              className="protocol"
                          >
                              《用户协议》
                          </span>
                      </div>

                      <Button
                          type="primary"
                          className={[isread ? 'active' : '', 'toregbtn'].join(
                              ' ',
                          )}
                          disabled={!isread}
                          onClick={tologin}
                      >
                          注册
                      </Button>

                      <Modal
                          className="protocol_modal"
                          title="用户协议"
                          visible={protocolvisible}
                          onOk={() => setProtocolvisible(false)}
                          onCancel={() => setProtocolvisible(false)}
                          closable={false}
                          okText="确认"
                          cancelText="取消"
                      >
                          <div className="protocol_body">
                              <p> 一、用户协议总则</p>
                              <p>
                                  {' '}
                                  1、本协议双方为科技有限公司（以下简称：科技）旗下的科技（域名为
                                  以下简称：科技）和科技的注册用户（以下简称：用户）。
                              </p>
                              <p>
                                  2、用户在注册前请仔细阅读本协议的条款，并按照页面上的提示完成全部注册程序。
                              </p>
                              <p>
                                  3、用户在进行注册过程中点击“同意”按钮，即表示用户已充分知悉和完全接受本协议项下全部条款，进而与科技达成本协议。
                              </p>
                              <p>二、用户服务使用说明</p>
                              <p>
                                  1、用户在注册时应按照注册提示填写准确的用户名、密码及真实的联系邮箱、手机号码等相关个人资料，符合完整、准确的要求。
                              </p>
                              <p>
                                  2、用户一旦注册成功，便成为科技网站合法的注册用户，将获得本网站的一个用户账号和相应密码，用户可随时修改自己的用户密码。用户应对其账号和密码安全负全部责任，并应对其用户名下所进行的所有行为和事件承担相应的法律责任。
                              </p>
                              <p>
                                  3、用户同意接受科技网站通过电子邮件或其他方式向用户发送有关商业信息。
                              </p>
                              <p>
                                  4、科技网站不对用户所发布信息的删除或储存失败负责。
                              </p>
                              <p>
                                  5、科技网站不提供账号删除服务，如果用户需要删除账号，请直接放弃使用即可。
                              </p>
                              <p>
                                  6、科技网站有判定用户的行为是否符合本网站服务条款要求的权利，如果用户违背了服务条款的规定，本网站有权对其用户所提供的网络服务进行中断或停止使用。
                              </p>
                              <p>
                                  7、用户不得以任何非法目的或其它方式对科技网站的个人用户账号进行转让、转借、倒卖、账号共享等行为（用户账号仅限由其本人使用）。
                              </p>
                              <p>三、协议内容的变更和修订</p>
                              <p>
                                  1、科技网站有权在必要时修改服务条款，科技网站服务条款一旦发生变动，将会在重要页面上提示修改内容。
                              </p>
                              <p>
                                  2、用户如果不同意科技所改动的内容，可自行停止使用本站网络服务。
                              </p>
                              <p>
                                  3、如果用户继续享用本站网络服务，则视为同意接受本网站服务条款的变动。
                              </p>
                              <p>
                                  4、科技网站可随时根据实际情况中断或终止一项或多项网络服务而无需对任何用户或第三方承担任何责任，如用户对一项或多项网络服务的中断或终止有异议，可以行使如下权利：
                              </p>
                              <p>（1）自行停止使用科技网站的网络服务。</p>
                              <p>
                                  （2）通知科技网站停止对该用户的服务。
                                  结束用户服务后，用户使用网络服务的权利立即终止，从终止时起，用户没有权利再进行处理任何未完成的信息或服务，科技网站也没有义务为其传送任何未处理的信息或未完成的服务给用户或任何第三方。
                              </p>
                              <p>四、用户隐私条款</p>
                              <p>
                                  科技网站将严格履行用户个人隐私保密义务，承诺不公开、编辑或透露用户个人信息，但以下特殊情况除外：
                              </p>
                              <p>1、经注册用户事先许可授权。</p>
                              <p>
                                  2、遵守国家法律法规或配合相关政府部门的要求。
                              </p>
                              <p>3、遵从科技网站合法服务程序。</p>
                              <p>
                                  4、为维护社会公众利益以及科技网站的合法权益所必须。
                              </p>
                              <p>五、注册用户的权利与义务</p>
                              <p>
                                  1、注册用户在使用科技网站服务时，必须遵守中华人民共和国相关法律法规的规定，用户应同意将不会利用本服务进行任何违法或不正当的活动，否则用户将自行承担由此产生的一切法律责任。
                              </p>
                              <p>
                                  2、用户在账号使用过程中不得上载、展示、张贴、传播或以其它方式传送含有下列内容之一的信息：
                              </p>
                              <p>
                                  （1）
                                  危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的。
                              </p>
                              <p>（2） 损害国家荣誉和利益的。</p>
                              <p>
                                  （3） 煽动民族仇恨、民族歧视、破坏民族团结的。
                              </p>
                              <p>
                                  （4） 破坏国家宗教政策，宣扬邪教和封建迷信的。
                              </p>
                              <p>
                                  （5） 散布谣言，扰乱社会秩序，破坏社会稳定的。
                              </p>
                              <p>
                                  （6）
                                  散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的。
                              </p>
                              <p>
                                  （7） 侮辱或者诽谤他人，侵害他人合法权利的。
                              </p>
                              <p>
                                  （8）
                                  含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容。
                              </p>
                              <p>3、不得为任何非法目的而使用网络服务系统。</p>
                              <p>
                                  4、不得利用科技网站服务故意制作、传播计算机病毒等破坏性程序，或其他从事任何危害计算机信息网络安全的行为。
                              </p>
                              <p>
                                  5、若用户行为违反上述约定，科技网站有权作出独立判断并立即取消用户的服务账号，用户应对自己网上的行为承担一切法律责任，科技网站的系统记录有可能作为用户违反法律的证据提交给相关主管部门。
                              </p>
                              <p>
                                  6、用户应同意保障和维护科技网站全体成员及其他用户的利益，如因违反本协议或违反有关的法律法规而给科技网站或任何第三者造成损失，用户应承担因此产生的法律责任。
                              </p>
                              <p>五、科技网络服务内容的所有权</p>
                              <p>
                                  1、科技网站定义的网络服务内容包括但不限于：教学视频、资料、源码、文字、软件、声音、图片、商标等。该等内容均受《著作权法》、《商标法》、《专利法》、《计算机软件保护条例》及其他相关法律法规的保护。
                              </p>
                              <p>
                                  2、科技网站所有的文章版权归原文作者和科技网站共同所有，任何人需要转载本网站版内的文章，必须事先取得原文作者和科技网站的授权同意。
                              </p>
                              <p>
                                  3、未经科技网站或其他有权第三方的事先许可授权，用户不得对包括但不限于：教学视频、学习软件、学习资料、源码、图片、音频内容等在内的任何内容进行翻录、复制、发行、破解、信息网络传播或其他违反知识产权相关法律、法规的行为，否则所导致的一切民事、行政或刑事责任，由用户自行承担。
                              </p>
                              <p>六、免责声明</p>
                              <p>
                                  1、用户同意承担使用科技网站服务所存在的一切风险以及因使用网络服务而产生的一切后果，科技网站对用户不承担任何责任。
                              </p>
                              <p>
                                  2、科技网站不担保服务一定能满足用户的要求，也不担保服务不会中断，亦对服务的及时性，安全性及可能发生的技术错误均不作任何担保。
                              </p>
                              <p>
                                  3、任何由于黑客攻击、计算机病毒侵入或发作、政府管制、硬件故障、不可抗力等非科技故意或严重过失而造成的用户个人资料泄露、丢失、被盗用、被篡改或服务暂定或终止的，对用户可能造成的风险或损失，科技不承担法律责任。
                              </p>
                              <p>七、其他约定</p>
                              <p>
                                  1、用户同意因本平台服务产生的任何争议均适用中华人民共和国法律，相关争议任何一方可向极课科技住所地人民法院提起诉讼解决。
                              </p>
                              <p>
                                  2、本协议中的标题仅为方便而设，不影响对于条款本身的解释。本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，其余条款仍应具有约束力。
                              </p>
                              <p>（完）</p>
                          </div>
                      </Modal>
                  </div>
              </div>
          </div>
      </PcLayout>
  );
}
