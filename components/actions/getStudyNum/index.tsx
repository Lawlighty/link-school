import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { _get_studys_num } from '@/server/studys';

// 获取对应类型的学习人数
export default function GetStudyNum({
  type,
  id,
}: {
  type: string;
  id: string;
    }) {
    const router = useRouter();
  const [current, setCurrent] = useState<number>(0);

  const getCoursesStudy = async () => {
    const query = {
      type,
      object: id || router.query.id,
    };
    await _get_studys_num(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        setCurrent(data.data.count);
      }
    });
  };
  useEffect(() => {
    switch (type) {
      case 'Course':
        getCoursesStudy();
        break;
    }
  }, [type, id]);

  return (
    <>
      <span>{current || 0}</span>
    </>
  );
}
