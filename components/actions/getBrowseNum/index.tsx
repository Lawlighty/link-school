import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { _get_courses_list } from '@/server/courses';
import { _get_documents } from '@/server/documents';

// 获取对应类型的浏览量
export default function GetBrowserNum({ type,id }: { type: string,id: string}) {
    const [current, setCurrent] = useState<any>({});
    
  const getCoursesBrowser = async () => {
    const query = {
      where: { _id: id }
    };
    await _get_courses_list(JSON.stringify(query)).then((data) => {
        if (data.status === 200) {
        setCurrent(data.data.data[0]);
      }
    });
  };
  const getDocumentsBrowser = async () => {
    if (id) {
         const query = {
           where: { _id: id },
         };
         await _get_documents(JSON.stringify(query)).then((data) => {
           if (data.status === 200) {
             setCurrent(data.data.data[0]);
           }
         });
       }
         
     };
    useEffect(() => {
      switch (type) {
        case 'Course':
          getCoursesBrowser();
          break;
        case 'Document':
          getDocumentsBrowser();
          break;
        case 'Question':
          getDocumentsBrowser();
          break;
      }
    }, [type, id]);

    return (
      <>
        <span>{current.browse || 0}</span>
      </>
    );
}
