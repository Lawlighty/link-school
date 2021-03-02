import React,{ useState, useEffect, useImperativeHandle } from 'react';
import { _get_actions_list } from '@/server/actions';


// 获取对应类型的点赞量
export default function GetUpVoteNum({ type, cRef,object }: { type: string, cRef:any,object:string }) {
  const [current, setCurrent] = useState<any>(0);

  useImperativeHandle(cRef, () => ({
    getActionList: getActionList,
  }));

  const getActionList = async () => {
    const query = {
      where: { type: type, name: 'UP_VOTE', object: object },
    };
    await _get_actions_list(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        setCurrent(data.data.total);
      }
    });
  };
  useEffect(() => {
    getActionList();
  }, [type, object]);

  return (
    <>
      <span>{current || 0}</span>
    </>
  );
}
