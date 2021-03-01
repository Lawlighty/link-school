import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {_get_courses_list} from '@/server/courses';

// 热门课程推荐(置顶)--->1.若有 课程类型则推送该类型的热门课程 2.默认直接推送热门
export default function HotCourses({ category }: { category: string }) {
    const [courseList, setCourseList] = useState([])

    const getCoursesList = async () => {
      const query = {
        where: {
          stick: true,
        },
        limit: 5,
      };
      await _get_courses_list(JSON.stringify(query)).then((data) => {
        if (data.status === 200) {
          setCourseList(data.data.data);
          if (data.data.data.length) {
          }
        }
      });
    };
  const getCoursesListbyC = async () => {
    const query = {
      where: {
        stick: true,
      },
      limit: 5,
    };
    if (category) {
      query['where']['category'] = category;
    }
    await _get_courses_list(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        setCourseList(data.data.data);
          if (!data.data.data.length) {
            getCoursesList();
        }
      }
    });
  };
  useEffect(() => {
    getCoursesListbyC();
  }, [category]);
  return (
    <div className="recommend_box">
      <div className="header">热门推荐</div>
      <div className="course_items">
        {courseList.map((item) => (
          <div className="course_item" key={item._id}>
            <div className="img_box">
              <img src={item.cover} alt="" className="course_img" />
            </div>
            <div className="course_info ">
              <div className="course_text">{item.name}</div>
              <div className="course_info_bottom">
                {item.price ? (
                  <>
                    <div className="c_red">￥{item.price}</div>
                    {item.v_price ? (
                      <div className="c_gold font_12 ">
                        SVIP:￥
                        {item.sprice}
                      </div>
                    ) : (
                      <div className="c_gold font_12 ">SVIP:免费</div>
                    )}
                  </>
                ) : (
                  <div className="c_red">免费</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
