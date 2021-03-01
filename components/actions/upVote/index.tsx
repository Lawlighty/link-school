import { useState, useEffect } from 'react';
import { _get_actions_list } from '@/server/actions';
import { LikeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
// 点赞操作
export default function UpVote({
  children,
  type,
}: {
    children: React.ReactNode,
    type: string;
    }) {
  const router = useRouter();
  const [likes, seLikes] = useState<boolean>(false);

  const getActionList = async () => {
    const query = {
      where: { type: type, name: 'UP_VOTE' },
    };
    await _get_actions_list(JSON.stringify(query)).then((data) => {
    //   if (data.status === 200) {
    //     setCurrent(data.data.total);
    //   }
    });
  };
  useEffect(() => {
    getActionList();
  }, [type]);

    const changeAction = () => {
        if (JSON.parse(localStorage.getItem('userInfo')) && localStorage.getItem('token')) {
            
        }
        else {
            // 去登陆
           router.push('/login');
        }
    };
  return (
    <>
      <div
        className={['hot_item can_click', likes ? 'c_red' : ''].join(' ')}
        onClick={() => {
            changeAction()
        }}
      >
        <span className="iconfont">
          <LikeOutlined />
        </span>
        {` `}
        {children}
      </div>
    </>
  );
}
