import { useState, useEffect, useRef } from 'react';
import {
  _get_actions_list,
  _get_actions_status,
  _post_actions_toogle,
} from '@/server/actions';
import {  message } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import  GetUpVoteNum  from '@/components/actions/getUpVoteNum';
// 点赞操作
export default function UpVote({
  children,
  type,
  object,
}: {
  children: React.ReactNode;
  type: string;
  object?: string;
}) {
  const childRef: any = useRef(null);
  const router = useRouter();
  const [likes, seLikes] = useState<boolean>(false);

  const getActionList = async () => {
    const query = {
      type: type,
      name: 'UP_VOTE',
      object: object || router.query.id,
    };
    await _get_actions_status(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        seLikes(data.data.status);
      }
    })
  };
  const actionToogle = async () => {
    const query = {
      type: type,
      name: 'UP_VOTE',
      object: object || router.query.id,
    };
    const params = {
      query: JSON.stringify(query),
    };
    await _post_actions_toogle(params).then(() => {
      getActionList();
      childRef.current.getActionList();
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
      console.log('点赞动作')
      actionToogle();
    } else {
      // 去登陆
      // router.push('/login');
      router.push(`/login?from=${router.asPath}`);
    }
  };
  return (
    <>
      <div
        className={['hot_item can_click', likes ? 'c_red' : ''].join(' ')}
        onClick={() => {
          changeAction();
        }}
      >
        <span className="iconfont">
          <LikeOutlined />
        </span>
        {` `}
        <GetUpVoteNum cRef={childRef} type="Document" object={object}/>
        {` `}
        {children}
      </div>
    </>
  );
}
