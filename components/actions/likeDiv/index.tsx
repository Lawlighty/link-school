import { useState, useEffect, useRef } from 'react';
import {
  _get_actions_list,
  _get_actions_status,
  _post_actions_toogle,
} from '@/server/actions';
import { UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import GetUpVoteNum from '@/components/actions/getUpVoteNum';
import { Input, Avatar, Pagination, Modal, Card, Empty } from 'antd';
const { confirm } = Modal;
// 收藏操作
export default function LikeDiv({
  children,
  type,
  title,
  object,
}: {
  children: React.ReactNode;
  type: string;
  title?: string;
  object?: string;
}) {
  //   const childRef: any = useRef(null);
  const router = useRouter();
  const [likes, seLikes] = useState<boolean>(false);

  const getActionList = async () => {
    const query = {
      type: type,
      name: 'LIKE',
      object: object||router.query.id,
    };
    await _get_actions_status(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        seLikes(data.data.status);
      }
    });
  };
  const actionToogle = async () => {
    const query = {
      type: type,
      name: 'LIKE',
      object: object || router.query.id,
    };
    const params = {
      query: JSON.stringify(query),
    };
    await _post_actions_toogle(params).then((data) => {
      getActionList();
      //   childRef.current.getActionList();
    });
  };
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('userInfo')) &&
      localStorage.getItem('token')
    ) {
      getActionList();
    }
  }, [type, object]);

  const changeAction = () => {
    if (
      JSON.parse(localStorage.getItem('userInfo')) &&
      localStorage.getItem('token')
    ) {
      actionToogle();
    } else {
      // 去登陆
      // router.push('/login');
      router.push(`/login?from=${router.asPath}`);
    }
  };
  return (
    <>
      {likes ? (
        <div
          className="follow_btn c_bg_red"
          onClick={() => {
            confirm({
              title: '确定取消关注吗?',
              icon: <ExclamationCircleOutlined />,
              okText: '确定',
              cancelText: '取消',
              onOk() {
                changeAction();
              },
              onCancel() {
                console.log('Cancel');
              },
            });
          }}
        >
          √ 已关注
        </div>
      ) : (
        <div
          className="follow_btn"
          onClick={() => {
            changeAction();
          }}
        >
          + 关注
        </div>
      )}
    </>
  );
}
