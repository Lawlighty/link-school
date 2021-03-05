import PcLayout from '@/components/layouts/PcLayout';
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Card, Avatar, Pagination, Affix, Empty } from 'antd';
import {
    UserOutlined,
} from '@ant-design/icons';
import { _get_documents } from '@/server/documents';
import  DocumentItem  from '@/components/documents/documents';
import RecommendDoc from '@/components/documents/recommendDoc';
import CategoryMenu from '@/components/categoryMenu';


const initPaging = {
  current: 1,
  pageSize: 10,
  //   total: courseListCount,
};
const Resource = ({ router }) => {
  const [top, setTop] = useState(90);
  //文档
  const [documentList, setDocumentList] = useState([]);
 const [pagination, setPagination] = useState(initPaging);
    
  const [currentQuery, setCurrentQuery] = useState({});
    const getDocumentsList = async (nowpaginatio = {}, nowqueryInfo = {}) => {
      const query = {
        where: nowqueryInfo,
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
    getDocumentsList({}, currentQuery);
    }, []);

   const onChangePage = (page) => {
     const n_pagination = { ...pagination, current: page }
     getDocumentsList({ ...n_pagination, currentQuery });
   };

   const changeFunction = (queryInfo) => {
     setCurrentQuery(queryInfo);
     setPagination({ ...initPaging });
     getDocumentsList(initPaging, queryInfo);
   };
  return (
    <PcLayout
      showHeader={true}
      customSeo={null}
      showFooter={true}
      isBlack={false}
    >
      <div className="resource_page">
        <CategoryMenu changeFunction={changeFunction} />
        <div className="course_content">
          <div className="index_content_zone flex">
            <RecommendDoc top={top} />
            <div className="flex_1 flex_c" style={{ marginLeft: 15 }}>
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
        </div>
      </div>
    </PcLayout>
  );
};
export default withRouter(Resource);