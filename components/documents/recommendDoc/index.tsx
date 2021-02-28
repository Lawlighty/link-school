import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { setSubStr } from '@/utils/utils';
import { Affix } from 'antd';
import { _get_documents } from '@/server/documents';

// 推荐文档
export default function RecommendDoc({ top }: { top: number }) {
  const router = useRouter();
    const [documentList, setDocumentList] = useState([]);
    const getDocumentsList = async (nowpaginatio = {}) => {
      const query = {
        where: {
          recommend:true,
        },
      };
      await _get_documents(JSON.stringify(query)).then((data) => {
        if (data.status === 200) {
          setDocumentList(data.data.data);
        }
      });
    };
     useEffect(() => {
       getDocumentsList();
     }, []);
  return (
    <Affix offsetTop={top}>
      <div className="resource_left">
        <div className="resource_left_title">推荐文库</div>
        <div className="resource_left_list">
          <ul>
            {documentList.map((item) => (
                <li
                    key={item._id}
                    onClick={() => {
                    router.push(`/resource/${item._id}`);
                    }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Affix>
  );
}
