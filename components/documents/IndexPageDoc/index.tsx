import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { _get_courses_list } from '@/server/courses';
import { setSubStr } from '@/utils/utils';
import GetBrowserNum from '@/components/actions/getBrowseNum';
// 首页文档样式
export default function IndexPageDoc({ item }: { item: any }) {
   const router = useRouter();

  return (
    <div className="exam_div doc_div" key={item._id}>
      <div
        className="exam_item"
        onClick={() => {
          router.push(`/resource/${item._id}`);
        }}
      >
        <div className="desc">
          <a className="text">{setSubStr(item.introduce, 50)}</a>
        </div>
        <div className="">
          {item.cover ? (
            <img
              style={{
                width: '100px',
                height: '60px',
                marginRight: '20px',
              }}
              src={item.cover}
              alt=""
            />
          ) : (
            <img
              style={{
                width: '100px',
                height: '60px',
                marginRight: '20px',
              }}
              src="https://a1.jikexueyuan.com/home/201507/22/d4b9/55af0345ca2d0.jpg"
              alt=""
            />
          )}
        </div>
        <div className="flex_1">
          <div className="exam_item_title_div">
            <div className="exam_item_title">{item.name}</div>
          </div>

          <div className="exam-item-tip">
            浏览:
            <span style={{ margin: '0 5px' }}>
              <GetBrowserNum type="Document" id={item._id} />
            </span>{' '}
            点赞:
            <span style={{ margin: '0 5px' }}>{item.download}</span>次
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
