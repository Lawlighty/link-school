import PcLayout from '../components/layouts/PcLayout';
import { useRouter } from 'next/router';
import { useState, useEffect} from 'react';
// import './apply.css'
import { Checkbox, message, Form, Input, Button, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { timer_clock, phone_reg } from '../config';
import dynamic from 'next/dynamic';

const BraftEditor = dynamic(() => import('braft-editor'), {
    ssr: false, //这个要加上,禁止使用 SSR
});

export default function Apply() {
     const controls = [
         'bold',
         'italic',
         'underline',
         'text-color',
         'separator',
         'link',
         'separator',
         'media',
     ];
    const [form] = Form.useForm();
    const router = useRouter();

    const [step, setStep] = useState(0);
    const [isCheck, setCheck] = useState(false);

    //验证码
    const [verifyCode, setVerifyCode] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');
    //验证码倒计时
    const [codeString, setCodeString] = useState('获取验证码');
    //是否发送验证码
    const [isSendCode, setIsSendCode] = useState(false);

    const getVerifyCode = () => {
        console.log('phoneNumber', phoneNumber);
        console.log('form', form);
        //验证信息
        if (phoneNumber && phone_reg.test(phoneNumber)) {
        // if (1) {
            setIsSendCode(true);
            setCodeString(timer_clock + '');
        } else {
            message.error('请输入正确的手机号!');
        }
    };

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

    const onChange = (e) => {
        setCheck(e.target.checked);
    };

    const nextStep = () => {
        if (isCheck) {
            switch (step) {
                case 0:
                    setStep(1);
                    break;
                case 1:
                    console.log('提交申请');
                    form.submit();
                    // setStep(2);
                    break;
                case 2:
                    router.push('/');
                    break;
            }
        } else {
            message.error('请先阅读协议!');
        }
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        setStep(2);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        let values =errorInfo.values;
        if (values.psw && values.psw != values.re_psw) {
            message.error('两次密码必须一致!');
        }
    };

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const beforeUpload = (file) => {
        const isJpgOrPng =
            file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('只能上传JPG/PNG格式文件!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图片大小不能大于2M!');
        }
        return isJpgOrPng && isLt2M;
    };

    const handleChange = (info) => {
        console.log(info);
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) => {
                setLoading(false);
                setImageUrl(imageUrl);
            });
        }
    };
    const getBase64NoBack = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64NoBack(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewVisible(
            file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        );
    };

    return (
        <PcLayout
            showHeader={false}
            customSeo={{ title: '申请成为讲师' }}
            showFooter={true}
            isBlack={false}
        >
            <div className="apply_page">
                <div className="register">
                    <div className="register_body">
                        <div className="register_header">
                            <div className="register_logo">
                                <a href="/" className="nuxt-link-active">
                                    <img
                                        src="https://static-dev.roncoo.com/course/QXWYm2L6itxhAlAJAq11UkHRpHTvL58h.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="register_content">
                            <div className="register_title">申请成为讲师</div>
                            <div className="steps">
                                <span className="step step_ok">签订协议</span>
                                {'   '}
                                <span
                                    className={[
                                        'step',
                                        step > 0 ? 'step_ok' : '',
                                    ].join(' ')}
                                >
                                    填写资料
                                </span>
                                {'   '}
                                <span
                                    className={[
                                        'step',
                                        step > 1 ? 'step_ok' : '',
                                    ].join(' ')}
                                >
                                    审核
                                </span>
                            </div>

                            {step === 0 ? (
                                //签订协议
                                <div>
                                    <div className="step_info">
                                        <p>
                                            甲方：科技信息科技有限公司（简称“科技”）
                                            <br />
                                            乙方：提交有效申请并经科技平台审核通过后，有权在科技平台制作，并在科技平台发布付费作品的自然人、法人、其他机构组织。
                                            <br />
                                            一、合作协议总则
                                            <br />
                                            <br />
                                            1、
                                            本协议双方为甲方和乙方（以下简称“讲师”或“您”）。
                                            <br />
                                            2、
                                            乙方在注册前请仔细阅读本协议的条款，并按照页面上的提示完成全部注册程序。
                                            <br />
                                            3、
                                            乙方在进行注册过程中点击“同意”按钮，即表示您已充分知悉和完全接受本协议项下全部条款，进而与甲方达成本协议。
                                            <br />
                                            4、
                                            甲方有权不时对本协议项下各类业务规则作出修改或补充，并通过甲方网站公布。您若继续使用即视为您接受修订后的本协议条款。否则,您有权在确保用户权益的情况下终止与甲方的合作。
                                            <br />
                                            1、乙方作为甲方旗下: 科技
                                            的签约讲师，基于甲方
                                            的在线教育平台，为甲方的用户提供远程培训课程及答疑服务。乙方主要工作包括录制课程和定期在线答疑。
                                            <br />
                                            2、甲方提供对乙方的课程信息（讲师）展示和推广服务，提供对课程播放的技术维护、服务器宽带、客服销售支持工作。
                                            <br />
                                            三、分成比例与结算方式
                                            <br />
                                            <br />
                                            1、乙方享有对提供的课程的定价权，甲方可提出定价参考建议。
                                            <br />
                                            2、甲乙双方按约定比例分成，按乙方在甲方平台的课程交易额，乙方收取销售额的比例为
                                            60% ，甲方获取销售额的比例为 40% ；
                                            <br />
                                            3、乙方提供的课程在甲方平台上销售收入和销售分成以甲方系统中实际记录的数据为准,若有异议的双方可协商处理,并于协商之日起7个工作日内予以确认。双方无法协商一致的，任何一方可按本协议争议解决条款维护权益。
                                            <br />
                                            4、乙方分成收益的结算周期为1个月,
                                            甲方于每个月的前10个工作日（法定节假日顺延）汇总统计乙方的应得收益，经乙方确认无误之日起（以电子邮件或微信的形式确认），甲方在3个工作日内将款项支付至乙方指定银行账户。
                                            <br />
                                            5、乙方的银行卡信息若变更需及时通知甲方,否则造成的损失由乙方负责。
                                            <br />
                                            四、课程内容规定
                                            <br />
                                            <br />
                                            1、乙方提供的录制课程不得含有下列内容：
                                            <br />
                                            （1） 违反宪法确定的基本原则的。
                                            <br />
                                            （2）
                                            危害国家的统一、主权和领土完整的。
                                            <br />
                                            （3）
                                            泄漏国家秘密、危害国家安全或者损害国家的荣誉和利益的。
                                            <br />
                                            （4）
                                            煽动民族仇恨、分裂和歧视，侵害少数民族风俗习惯，破坏民族团结的。
                                            <br />
                                            （5）
                                            宣扬邪教、迷信的，扰乱社会秩序，破坏社会稳定的。
                                            <br />
                                            （6）
                                            宣扬淫秽、赌博或者渲染暴力、教唆犯罪的，危害社会公德和民族优秀文化传统的。
                                            <br />
                                            （7）
                                            侮辱或者诽谤他人，侵害他人合法权益的。
                                            <br />
                                            （8）
                                            有法律、行政法规和国家规定禁止的其他内容的。
                                            <br />
                                            2、如因乙方课程内容违法违规造成的一切损失和责任，由乙方自行独立承担。如甲方发现乙方课程存在前述不合法不合规的情况，有权告知乙方并建议调整及整改；乙方应积极配合，主动整改。自收到甲方建议之日起7个工作日内未整改完毕的，甲方有权单方解除本合同。
                                            <br />
                                            五、课程交付规则
                                            <br />
                                            <br />
                                            1、乙方提交课程大纲经甲方审核通过之日起（以电子邮件或微信的形式确认），乙方应在1个月内提交第一次课时内容（首次提交的课时内容不得少于全部课时内容的50%），并承诺保证以后每周至少提交3个课时以上的内容，全部课时必须在3个月以内完成提交。
                                            <br />
                                            2、如乙方由于不可抗力导致不能按时提交/更新课程时，须在出现该原因之日起5日内通知甲方，双方另行约定课程的更新/交付日期。
                                            <br />
                                            3、如果因乙方个人原因导致无法按时完成全部课程时，乙方需提前7个工作日与甲方进行协商沟通,
                                            双方另行约定课程的更新/交付日期。
                                            <br />
                                            4、如果在双方另行约定更新/交付日期到期时，乙方仍不能更新/交付课件，甲方有权选择下线该课程，单方解除合作关系而不承担任何违约责任；乙方同意对已上线的课程收入所得进行冻结，用以垫付用户/学员退款（退款金额全部由乙方承担）；如果乙方课程收入所得无法满足向用户/学员退款的金额，不足部分由乙方承担差额补足责任，并对由此给甲方造成的损失承担法律责任。
                                            <br />
                                            六、课程发布规则
                                            <br />
                                            <br />
                                            1、乙方提供的课程中，必须有1个课时（包含1个课时）以上的免费课时。
                                            <br />
                                            2、乙方提交课程之日起7个工作日内，甲方应完成课程审核，并发布上线，如审核未通过将会在审核结束后3个工作日内以电子邮件方式通知乙方。
                                            <br />
                                            3、如因任何一方出现不可抗力而需要推迟课程发布日期时，存在不可抗力的一方应向另一方及时说明，双方另行协商确定课程发布日期。
                                            <br />
                                            4、如甲方由于不可抗力停止该课程的合作，甲方应按照本合作协议项下的分成比例条款向乙方支付该课程剩余销售所得。
                                            <br />
                                            七、播放权与版权规则
                                            <br />
                                            <br />
                                            1、乙方提供给甲方在线教育平台所发布的课程以及课件（包括但不限于文档），在本协议有效期内，甲方拥有课程及课件的播放权、使用权。本协议有效期届满（或经双方协商一致同意提前终止合作协议后），为保证已付费用户利益，甲方仍保留该课程对已付费用户的播放权，但不会再销售该课程。
                                            <br />
                                            2、如出现因乙方提供的课程涉嫌违反相关法律法规规定，有可能导致甲方承担法律责任、经济或名誉损失的，甲方有权决定停播此课程。
                                            <br />
                                            3、如发现乙方提供的课程在其它网站（包含乙方自己的网站）销售价格低于在甲方网站上销售的价格，甲方有权决定停播此课程。课程停播后，如果出现需要向付费用户退款的情况，乙方同意将乙方课程收入所得用以垫付用户/学员退款（退款金额由乙方承担）；如果乙方课程收入所得无法满足向用户/学员退款的金额，不足部分由乙方承担差额补足责任，并对由此给甲方造成的损失承担法律责任。
                                            <br />
                                            4、除本条第1点约定的播放权和使用权外，本课程的版权归乙方所有。
                                            <br />
                                            5、乙方承诺向甲方提供的课程不存在与第三方的任何版权纠纷或潜在争议。否则，由此带来的一切法律后果由乙方自行独立承担。
                                            <br />
                                            八、服务规则
                                            <br />
                                            <br />
                                            1、乙方按照提交的课程大纲录制作品，并在甲乙双方商定时间内交付/更新。
                                            <br />
                                            2、课程上线后，乙方（讲师）应在48小时内线上回复付费用户与该课程有关的疑问。
                                            <br />
                                            3、本协议有效期届满（或经双方协商一致同意提前终止合作后），乙方仍需回复付费用户与该课程有关的疑问。
                                            <br />
                                            九、保密规则
                                            <br />
                                            <br />
                                            1、甲乙双方应对因履行本协议而取得的对方的各种形式的技术或商业信息保密（包括本协议内容本身），法律法规另有规定的除外；未经一方事先书面允许，另一方不得将双方合作信息，如价格，销售分成比例等透露给第三方。
                                            <br />
                                            十、其他约定
                                            <br />
                                            <br />
                                            1、本协议项下任何争议，双方应友好协商解决；协商不成的，任何一方均可向甲方所在地人民法院提起诉讼。
                                            <br />
                                            2、课程的具体录制内容等其他条款，双方在《课程制作规范》进行约定。《课程制作规范》和本协议具有同等的法律效力。
                                            <br />
                                            3、自乙方点击同意接受本协议全部条款之时生效。
                                        </p>
                                    </div>
                                    <div className="info_footer">
                                        <Checkbox onChange={onChange}>
                                            我已阅读并同意此协议
                                            <span style={{ color: '#d51423' }}>
                                                （温馨提示：阅读整个协议，才能进行下一步。）
                                            </span>
                                        </Checkbox>
                                    </div>
                                </div>
                            ) : step === 1 ? (
                                //填写资料
                                <div className="apply_page_data_form">
                                    <Form
                                        form={form}
                                        name="basic"
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                    >
                                        <Form.Item
                                            label="名称"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入昵称',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="请输入讲师名称" />
                                        </Form.Item>
                                        <Form.Item
                                            label="邮箱"
                                            name="email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message:
                                                        'The input is not valid E-mail!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="请输入邮箱" />
                                        </Form.Item>
                                        <Form.Item label="简介">
                                            <div className="braftEditor_box">
                                                <BraftEditor
                                                    className="my-editor"
                                                    // controls={controls}
                                                    placeholder="请输入简介"
                                                />
                                            </div>
                                        </Form.Item>
                                        <hr></hr>
                                        <Form.Item label="讲师头像">
                                            <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                className="avatar-uploader"
                                                showUploadList={false}
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                beforeUpload={beforeUpload}
                                                onChange={handleChange}
                                                onPreview={handlePreview}
                                            >
                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt="avatar"
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                ) : (
                                                    <div>
                                                        {loading ? (
                                                            <LoadingOutlined />
                                                        ) : (
                                                            <PlusOutlined />
                                                        )}
                                                        点击上传
                                                    </div>
                                                )}
                                            </Upload>
                                        </Form.Item>
                                        <Form.Item
                                            label="手机号"
                                            name="phone"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入手机号',
                                                },
                                            ]}
                                        >
                                            <div className="flex">
                                                <Input
                                                    placeholder="请输入手机号"
                                                    style={{ width: '200px' }}
                                                    onChange={(e) =>
                                                        setPhoneNumber(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <Button
                                                    type="primary"
                                                    size="small"
                                                    className="get_verify_code"
                                                    disabled={isSendCode}
                                                    onClick={getVerifyCode}
                                                >
                                                    {parseInt(codeString)
                                                        ? codeString + ' s'
                                                        : codeString}
                                                </Button>
                                            </div>
                                        </Form.Item>
                                        <Form.Item
                                            label="验证码"
                                            name="code"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入验证码',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="请输入验证码" />
                                        </Form.Item>
                                        <Form.Item
                                            label="密码"
                                            name="psw"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入密码',
                                                },
                                            ]}
                                        >
                                            <Input.Password
                                                placeholder="请输入密码"
                                                style={{ maxWidth: 300 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="确认密码"
                                            name="re_psw"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入确认密码',
                                                },
                                            ]}
                                        >
                                            <Input.Password
                                                placeholder="请输入确认密码"
                                                style={{ maxWidth: 300 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="推荐码"
                                            name="app_code"
                                        >
                                            <Input placeholder="请输入推荐码" />
                                        </Form.Item>
                                    </Form>
                                </div>
                            ) : (
                                //审核
                                <div>
                                    <div className="success_msg flex">
                                        <img src="/imgs/成功.png" alt="" />
                                        <div>
                                            <p className="success_one">
                                                资料提交成功！
                                            </p>{' '}
                                            <p className="success_two">
                                                审核结果将在2个工作日内完成，请留意。！
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div
                                className="next_btn"
                                onClick={() => nextStep()}
                            >
                                {step === 0
                                    ? '下一步'
                                    : step === 1
                                    ? '提交审核'
                                    : '返回首页'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PcLayout>
    );
}
