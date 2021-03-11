import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { _get_actions_list } from '@/server/actions';


// 获取对应用户的关注数量
export default function GetFocusNum({
  type,
  id,
}: {
  type: string;
  id: string;
}) {
  const [current, setCurrent] = useState<any>(0);
  const router = useRouter()
  const getCurrentFocusNum = async () => {
    const query = {
      where: {
        type: type,
        user: id || router.query.id,
        name:'LIKE'
      },
    };
    await _get_actions_list(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        setCurrent(data.data.total);
      }
    });
  };
  useEffect(() => {
   getCurrentFocusNum();
  }, [type, id]);

  return (
    <>
      <span>{current || 0}</span>
    </>
  );
}
