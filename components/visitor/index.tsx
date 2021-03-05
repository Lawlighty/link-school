import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input, Pagination, Modal } from 'antd';

// 登录信息
export default function Visitors({ }) {
    let router = useRouter();
    const [accountState, setAccountState] = useState<any>({});
    const [token, setToken] = useState({});
    useEffect(() => {
        setAccountState(JSON.parse(localStorage.getItem('userInfo'))||{});
        setToken(localStorage.getItem('token'));
    }, []);
  return (
    <div
      className="question_left_item flex"
      style={{
        alignItems: 'center',
        width: '100%',
        color: '#333',
        backgroundColor: '#fff',
        borderRadius: '6px',
        fontSize: '14px',
        marginBottom: '20px',
      }}
    >
      <div className="user_img_div">
        <img
          src={
            accountState.avatar ||
            'http://all.meedu.tech/images/default_avatar.jpg'
          }
          alt=""
          className="user_img"
        />
      </div>
      <div className="flex_1">
        {accountState._id ? (
          <div>
            <div
              style={{
                paddingBottom: '10px',
                maxWidth: '120px',
              }}
            >
              {accountState.nickname + '  ,你好'}
            </div>
            <div className="tologin_green">极客学院助你天天向上</div>
          </div>
        ) : (
          <div>
            <div
              style={{
                paddingBottom: '10px',
                maxWidth: '120px',
              }}
            >
              游客,你好
            </div>
            <div>
              <span
                style={{
                  textDecoration: 'underline',
                }}
                className="tologin_green"
                onClick={() => {
                  router.push('/login?from=/question');
                }}
              >
                登录
              </span>{' '}
              再玩耍，妥妥哒。
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
