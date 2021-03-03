import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { _get_comments_list } from '@/server/comments';


// 获取对应类型的评论量
export default function GetCommentNum({
  type,
  id,
}: {
  type: string;
  id: string;
}) {
  const [current, setCurrent] = useState<any>(0);
  const router = useRouter()
  const getCurrentCommentNum = async () => {

      const query = {
        where: {
          type: type,
          object: id||router.query.id,
          $or: [{ replayto: { $exists: false } }, { replayto: null }],
        },
      };
    await _get_comments_list(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        setCurrent(data.data.total);
      }
    });
  };
  useEffect(() => {
   getCurrentCommentNum();
  }, [type, id]);

  return (
    <>
      <span>{current || 0}</span>
    </>
  );
}
