import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, Avatar } from 'antd';
import {
  RightOutlined,
  UserOutlined,
} from '@ant-design/icons';
import GetBrowserNum from '@/components/actions/getBrowseNum';

// 课程展示
export default function CoursesItem({ item }: { item: any }) {
  const router = useRouter();
  return (
    <div className="zone_body_item" key={item._id}>
      <Card
        onClick={() => {
          router.push(`view/${item._id}`);
        }}
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="example" src={item.cover} className="card_img" />}
      >
        <div>
          <div className="zone_body_item_name">{item.name}</div>
          <div className="zone_body_item_tag">
            {!item.price || item.price === 0 ? (
              <div className="free">免费</div>
            ) : (
              <div
                style={{
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    paddingRight: '10px',
                    color: '#333',
                  }}
                >
                  ￥{item.price}
                </div>
                <div
                  style={{
                    color: '#fb6260',
                  }}
                >
                  SVIP:￥{item.sprice || 0}
                </div>
              </div>
            )}
          </div>
          <div className="zone_body_item_info">
            <div className="zone_body_item_who_info">
              {item.author ? (
                <Avatar size="small" src={item.author.avatar} />
              ) : (
                <Avatar
                  size="small"
                  style={{
                    backgroundColor: '#87d068',
                  }}
                  icon={<UserOutlined />}
                />
              )}

              <div
                className="name"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/lecturer/${item.author._id}`);
                }}
              >
                {item.author.nickname}
              </div>
            </div>
            <div>
              <span>
                <GetBrowserNum type="Course" id={item._id}/> 人已经学习
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
