import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, Avatar } from 'antd';
import { RightOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';

//新闻资讯
export default function NewsItem({
  item,
  index,
}: {
  item: any;
  index: number;
}) {
  const router = useRouter();
  return (
    <div className="info_item" key={index}>
      <div
        className="info_item_div"
        style={{
          padding: '20px',
          background: '#fff',
          borderRadius: '8px',
        }}
      >
        <div className="info_title">
          <div className="info_title_left"></div>
          <div className="info_title_name">行业动态</div>
          <a href="/list" className="small_text" target="_bank">
            更多
            <RightOutlined />
          </a>
        </div>
        <div>
          <img
            src="https://static-dev.roncoo.com/course/20a864190ac74acda0838d0eb41d3a43.png"
            alt="资讯图片"
            className="info_img"
          />
        </div>

        <div className="info_content_name">
          超全！2020年互联网大厂薪资和职级一览
        </div>
        <div className="info_content">
          以BAT为代表的互联网大厂，一直是求职者眼中的香饽饽，“大厂经历”在国内就业环境中无异于一块金子招牌。本文来源：运营黑客社区。感谢社区分享对于企业和HR来说，大...
        </div>
        <div className="info_footer">
          <div className="time">2020-11-03 12:45</div>
          <div className="more">
            <div>
              <EyeOutlined
                style={{
                  margin: '0 10px',
                }}
              />
              148
              <LikeOutlined
                style={{
                  margin: '0 10px',
                }}
              />
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
