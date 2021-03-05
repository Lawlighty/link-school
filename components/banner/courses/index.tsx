import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { _get_courses_list } from '@/server/courses';
import Link from 'next/link';

// 公告板块
export default function CourseRecommendByCategory({ categoryId }: { categoryId: string } ) {
    const [courseList, setCourseList] = useState([]);
  const getCoursesRecommend = async () => {
      const query = {
        where: { category: categoryId },
        limit: 3,
      };
    await _get_courses_list(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        setCourseList(data.data.data);
      }
    });
  };
    useEffect(() => {
      getCoursesRecommend();
  },[]);

  return (
    <div className="foot_courses">
      <div className="courses_top">课程推荐</div>
      {courseList.map((item) => (
        <div key={item._id}>
          <div className="foot_course fl">
            <div className="img_box">
              <a href={`view/${item._id}`} className="">
                <img src={item.cover} alt="" className="course_img" />
              </a>
            </div>
            <div className="course_info">
              <a
                href={`view/${item._id}`}
                className="course_name"
              >
                {item.name}
              </a>
              {!item.price ||
                (item.price === 0 && <div className="course_price">免费</div>)}
              {item.price && (
                <div className="course_price">
                  ￥{item.price}
                  <p className="font_12 c_gold course_price_vip">
                    SVIP:￥
                    {item.sprice}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
