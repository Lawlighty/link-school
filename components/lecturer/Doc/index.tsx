import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Card, Avatar, Pagination, Affix, Empty } from 'antd';
import { _get_documents } from '@/server/documents';
import DocumentItem from '@/components/documents/documents';


const initPaging = {
  current: 1,
  pageSize: 10,
  //   total: courseListCount,
};
const LecturerResource = ({ router }) => {
  //文档
  const [documentList, setDocumentList] = useState([]);
  const [pagination, setPagination] = useState(initPaging);

  const getDocumentsList = async (id,nowpaginatio = {}) => {
    const query = {
      where: {
        author: id || router.query.id,
      },
      limit: nowpaginatio.pageSize || pagination.pageSize,
      page: nowpaginatio.current || pagination.current,
    };
    await _get_documents(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        const n_pagination = {
          ...pagination,
          current: data.data.page,
          total: data.data.total,
        };
        setPagination({ ...n_pagination });
        setDocumentList(data.data.data);
      }
    });
  };

     useEffect(() => {
       if (router.query.id) {
         const id = router.query.id;
         getDocumentsList(id, {});
       }
     }, [router]);

  const onChangePage = (page) => {
    const n_pagination = { ...pagination, current: page };
    getDocumentsList('', n_pagination  );
  };

  return (
    <div style={{marginTop: 20}}>
      <div className="flex_1 flex_c">
        {documentList.length === 0 && (
          <Empty
            style={{
              padding: '100px 0',
              color: '#999',
              fontSize: '16px',
              width: '100%',
            }}
            description={<span>暂无数据</span>}
          />
        )}
        {documentList.map((item) => (
          <DocumentItem item={item} key={item._id} />
        ))}

        <Pagination
          current={pagination.current}
          total={pagination.total || 10}
          onChange={onChangePage}
          defaultPageSize={pagination.pageSize}
          style={{ textAlign: 'center', marginTop: 20 }}
        />
      </div>
    </div>
  );
};
export default withRouter(LecturerResource);
