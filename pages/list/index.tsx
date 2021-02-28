import PcLayout from '@/components/layouts/PcLayout';
import { withRouter } from 'next/router';
import { Card, Avatar, Pagination } from 'antd';
import { useState, useEffect } from 'react';
import {
    UserOutlined,
} from '@ant-design/icons';
import { _get_courses_list } from '@/server/courses';
import CoursesItem from '@/components/courses';

const List = ({ router }) => {

    const [courseList, setCourseList] = useState([]);
    const [pagination, setPagination] = useState({
      current: 1,
      pageSize: 16,
    //   total: courseListCount,
    });

      const [current_categoryno1, setCurrentCategoryno1] = useState(0);
      const [current_categoryno2, setCurrentCategoryno2] = useState(0);
      const [current_categoryno3, setCurrentCategoryno3] = useState(0);
      const [current_four, setCurrentFour] = useState(0);
      const categoryno1 = [
        {
          name: '全部',
          index: 0,
        },
        {
          name: '云计算/大数据',
          index: 1,
        },
        {
          name: '产品/策划/运营',
          index: 2,
        },
        {
          name: '前端/后台/框架',
          index: 3,
        },
      ];
      const categoryno2 = [
        {
          name: '全部',
          index: 0,
        },
        {
          name: '产品',
          index: 1,
        },
        {
          name: '策划',
          index: 2,
        },
        {
          name: '运营',
          index: 3,
        },
      ];
      const categoryno3 = [
        {
          name: '全部',
          index: 0,
        },
        {
          name: '测试1',
          index: 1,
        },
        {
          name: '测试2',
          index: 2,
        },
        {
          name: '测试3',
          index: 3,
        },
      ];
      const four = [
        {
          name: '全部',
          index: 0,
        },
        {
          name: '免费',
          index: 1,
        },
        {
          name: 'SVIP免费',
          index: 2,
        },
        {
          name: '付费',
          index: 3,
        },
      ];
    const getCoursesLits = async (nowpaginatio={}) => {
      const query = {
        where: {},
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
       getCoursesLits();
     }, []);

    console.log('视频界面的router', router);
    const query = router.query
    console.log('视频界面的query', query);

  

    const changeCat1 = (index: number) => {
        setCurrentCategoryno1(index)
    }
    const changeCat2 = (index: number) => {
        setCurrentCategoryno2(index);
    };
    const changeCat3= (index: number) => {
        setCurrentCategoryno3(index);
    };
    const changeFour = (index: number) => {
        setCurrentFour(index);
    };
  
    const onChangePage = (page) => {
        const n_pagination = { ...pagination, current:page};
      
        getCoursesLits(n_pagination);
    }
    return (
      <PcLayout
        showHeader={true}
        customSeo={null}
        showFooter={true}
        isBlack={false}
      >
        <div className="list_page">
          <div className="header_list">
            <div className="list_content">
              <ul className="content_ul">
                {categoryno1.map((item) => (
                  <li
                    className={current_categoryno1 === item.index ? 'now' : ''}
                    onClick={() => {
                      changeCat1(item.index);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="list_content">
              <ul className="content_ul">
                {categoryno2.map((item) => (
                  <li
                    className={current_categoryno2 === item.index ? 'now' : ''}
                    onClick={() => {
                      changeCat2(item.index);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="list_content">
              <ul className="content_ul">
                {categoryno3.map((item) => (
                  <li
                    className={current_categoryno3 === item.index ? 'now' : ''}
                    onClick={() => {
                      changeCat3(item.index);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="list_content" style={{ borderBottom: 'none' }}>
              <ul className="content_ul">
                {four.map((item) => (
                  <li
                    className={current_four === item.index ? 'now' : ''}
                    onClick={() => {
                      changeFour(item.index);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="course_content">
            <div className="index_content_zone">
              <div className="zone_body">
                {courseList.map((item) => (
                  <CoursesItem item={item} />
                ))}
              </div>
              {/* <Pagination
                defaultCurrent={1}
                total={50}
                onChange={onChangePage}
                defaultPageSize={20}
                style={{ textAlign: 'center', marginTop: 20 }}
              /> */}
              <Pagination
                defaultCurrent={1}
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
