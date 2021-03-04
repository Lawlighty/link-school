import PcLayout from '@/components/layouts/PcLayout';
import { withRouter } from 'next/router';
import { Card, Avatar, Pagination, Empty } from 'antd';
import { useState, useEffect } from 'react';
import {
    UserOutlined,
} from '@ant-design/icons';
import { _get_courses_list } from '@/server/courses';
import CoursesItem from '@/components/courses';
import CategoryMenu from '@/components/categoryMenu';



const initPaging = {
  current: 1,
  pageSize: 16,
  //   total: courseListCount,
};
const List = ({ router }) => {

    const [courseList, setCourseList] = useState([]);
    const [pagination, setPagination] = useState(initPaging);
   const [currentQuery, setCurrentQuery] = useState({});

  const getCoursesLits = async (nowpaginatio = {}, nowqueryInfo={}) => {
      const query = {
        where: nowqueryInfo,
        limit: nowpaginatio.pageSize || pagination.pageSize,
        page: nowpaginatio.current || pagination.current,
      };
    console.log('请求接口的query==>', query);
      await _get_courses_list(JSON.stringify(query)).then((data) => {
        if (data.status === 200) {
          setCourseList(data.data.data);
          const n_pagination = {
            ...pagination,
            current: data.data.page,
            total: data.data.total,
          };
          setPagination({ ...n_pagination });
        }
      });
    };
     useEffect(() => {
       getCoursesLits({},currentQuery);
     }, []);
    const onChangePage = (page) => {
        const n_pagination = { ...pagination, current:page};
        getCoursesLits(n_pagination, currentQuery);
  }
  const changeFunction = (queryInfo) => {
    setCurrentQuery(queryInfo);
    setPagination({ ...initPaging });
    getCoursesLits(initPaging, queryInfo);
  };
    return (
      <PcLayout
        showHeader={true}
        customSeo={null}
        showFooter={true}
        isBlack={false}
      >
        <div className="list_page">
          <CategoryMenu changeFunction={changeFunction} />
          <div className="course_content">
            <div className="index_content_zone">
              <div className="zone_body">
                {courseList.length === 0 && (
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

                {courseList.map((item) => (
                  <CoursesItem item={item} key={item._id}/>
                ))}
              </div>
              <Pagination
                current={pagination.current}
                total={pagination.total || 16}
                onChange={onChangePage}
                defaultPageSize={pagination.pageSize}
                style={{ textAlign: 'center', marginTop: 20 }}
              />
            </div>
          </div>
        </div>
      </PcLayout>
    );
}
export default withRouter(List);
