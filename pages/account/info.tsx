import PcLayout from '../../components/layouts/PcLayout';
import {
    Modal,
    Input,
    message,
    InputNumber,
    Radio,  
    Upload,
} from 'antd';
import { useState, useEffect } from 'react';
import AccountLeft from '../../components/account_left/AccountLeft';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import AccountState from '../../store/accountinfo';
import { _update_user_info } from '../../server/server';


export default function AccountInfo() {

    const accountState = AccountState.useContainer();
    const [isEdit, setIsEdit] = useState(false);
    // let account = {
    //     phoneNumber:'13616859570',
    //     userName: 'Lawlighty',
    //     age: 18,
    //     gender: 0,
    //     profilephoto: 'https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg',
    // }
    // let account = accountState.account;
    
    let account = {};

    const [accountInfo, setAccountInfo] = useState<any>(account);

    useEffect(() => {
        setAccountInfo(JSON.parse(localStorage.getItem('userInfo')));
        console.log(
          'localStorage.getItem',
          JSON.parse(localStorage.getItem('userInfo')),
      );
      
    }, []);

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');


    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const changeAccountInfo = (key:string, value:any) => {
        let new_account = accountInfo;
        new_account[key] = value;
        // console.log('accountInfo', accountInfo);
        // console.log('new_account', new_account);
        setAccountInfo(new_account);
    }

    const getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload=(file)=> {
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
    }

    const handleChange = (info) => {
        console.log(info)
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) =>
                {
                setLoading(false);
                // setImageUrl(imageUrl);
                setAccountInfo({...accountInfo, ['avatar']:imageUrl});
               }
                
            );
        }
    };

    const getBase64NoBack=(file) =>{
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
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

  const updateAccountInfo = () => {
    
        if (!accountInfo.nickname) {
          message.error('请输入昵称');
        }
        // else if (!accountInfo.age) {
        //     message.error('请输入年龄!');
        // }
        else {
          // account = accountInfo;
          // accountState.setAccount(accountInfo);
          setIsEdit(false);
          updateInfo();
        }
        
  }
  const updateInfo = async () => {
    const user = {
      _id: accountInfo._id,
      avatar: accountInfo.avatar,
      nickname: accountInfo.nickname,
      gender: accountInfo.gender,
    };
    await _update_user_info(user._id, user)
      .then((data) => {
        if (data.data.code === 200) {
          const new_accountInfo = accountInfo;
          new_accountInfo['avatar'] = user.avatar;
          new_accountInfo['nickname'] = user.nickname;
          new_accountInfo['gender'] = user.gender;
          localStorage.setItem('userInfo', JSON.stringify(new_accountInfo));
          setAccountInfo(new_accountInfo);
          Modal.success({
            content: '修改成功!',
            okText: '确定',
          });
        }
      })
      .catch((err) => {
        console.log('更新err', err);
        message.error(err.message);
      });
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
              <ul className="tabs ">
                <a className="tab on">基础信息</a>
              </ul>

              <div className="main_cont form">
                <div className="form_item">
                  <div className="label">手机:</div>
                  <div className="text">{accountInfo.username}</div>
                </div>
                <div className="form_item">
                  <div className="label">昵称:</div>
                  {isEdit ? (
                    <Input
                      className="info_input"
                      placeholder="请输入昵称"
                      defaultValue={accountInfo.nickname}
                      onChange={(e) => {
                        changeAccountInfo('nickname', e.target.value);
                      }}
                    />
                  ) : (
                    <div className="text">{accountInfo.nickname}</div>
                  )}
                </div>
                <div className="form_item">
                  <div className="label">年龄:</div>
                  {isEdit ? (
                    <InputNumber
                      min={1}
                      max={150}
                      className="info_input"
                      placeholder="请输入年龄"
                      defaultValue={accountInfo.age}
                      onChange={(e) => {
                        changeAccountInfo('age', e);
                      }}
                    />
                  ) : (
                    <div className="text">{accountInfo.age}</div>
                  )}
                </div>
                <div className="form_item">
                  <div className="label">性别:</div>
                  {isEdit ? (
                    <Radio.Group
                      style={{ marginLeft: 20 }}
                      onChange={(e) => {
                        changeAccountInfo('gender', e.target.value);
                      }}
                      defaultValue={accountInfo.gender}
                    >
                      <Radio value={0}>男</Radio>
                      <Radio value={1}>女</Radio>
                      <Radio value={2}>保密</Radio>
                    </Radio.Group>
                  ) : (
                    <div className="text">
                      {accountInfo.gender === 0
                        ? '男'
                        : accountInfo.gender === 1
                        ? '女'
                        : '保密'}
                    </div>
                  )}
                </div>
                <div className="form_item">
                  <div className="label">头像:</div>
                  <div className="text">
                    {isEdit ? (
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
                        {accountInfo.avatar ? (
                          <img
                            src={accountInfo.avatar}
                            alt="avatar"
                            style={{ width: '100%' }}
                          />
                        ) : (
                          <div>
                            {loading ? <LoadingOutlined /> : <PlusOutlined />}
                            点击上传
                          </div>
                        )}
                      </Upload>
                    ) : (
                      <img
                        style={{ width: '120px' }}
                        // src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                        // src="/imgs/头像 (1).png"
                        src={
                          accountInfo.avatar
                            ? accountInfo.avatar
                            : '/imgs/头像 (1).png'
                        }
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="form_item">
                  <div className="label"></div>
                  <div className="text">
                    {isEdit ? (
                      <button
                        className="submit_btn"
                        onClick={() => {
                          updateAccountInfo();
                        }}
                      >
                        提交
                      </button>
                    ) : (
                      <button
                        className="submit_btn"
                        onClick={() => {
                          setIsEdit(true);
                        }}
                      >
                        修改
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={() => setPreviewVisible(false)}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
        </div>
      </PcLayout>
    );
}
