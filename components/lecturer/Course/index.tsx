import { Input, Avatar, Pagination, Modal, Card, Empty } from 'antd';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { _get_courses_list } from '@/server/courses';
import CoursesItem from '@/components/courses';


const { confirm } = Modal;
const initPaging = {
  current: 1,
  pageSize: 16,
  //   total: courseListCount,
};
export default function LectuerCourse() {
  const router = useRouter();
  const [courseList, setCourseList] = useState([]);
  const [pagination, setPagination] = useState(initPaging);

  const getCoursesLits = async (id, nowpaginatio = {}) => {
    const query = {
      where: {
        author: id || router.query.id,
      },
      limit: nowpaginatio.pageSize || pagination.pageSize,
      page: nowpaginatio.current || pagination.current,
    };
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
    if (router.query.id) {
      const id = router.query.id;
      getCoursesLits(id, {});
    }
  }, [router]);

  const onChangePage = (page) => {
    const n_pagination = { ...pagination, current: page };
    getCoursesLits('', n_pagination);
  };

  return (
    <div>
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
          <CoursesItem item={item} key={item._id} />
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
  );
}
