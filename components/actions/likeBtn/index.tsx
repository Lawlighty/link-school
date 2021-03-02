import { useState, useEffect, useRef } from 'react';
import {
  _get_actions_list,
  _get_actions_status,
  _post_actions_toogle,
} from '@/server/actions';
import { LikeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import GetUpVoteNum from '@/components/actions/getUpVoteNum';
// 收藏操作
export default function LikeBtn({
  children,
  type,
  title,
  object,
}: {
  children: React.ReactNode;
  type: string;
  title: string;
  object: string;
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
      <a
        onClick={() => changeAction()}
        className={['collect_btn', likes ? 'on' : ''].join(' ')}
      >
        {likes ? (
          <img src="/imgs/收藏 _red.png" alt="" />
        ) : (
          <img src="/imgs/收藏.png" alt="" />
        )}
        &nbsp;{likes ? '已' : ''}
        {title || '收藏'}
      </a>
    </>
  );
}
