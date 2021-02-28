import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, Avatar } from 'antd';
import {  UserOutlined } from '@ant-design/icons';

// 直播课程展示
export default function LiveCoursesItem({ item,index }: { item: any, index: number}) {
  const router = useRouter();
  return (
    <div className="zone_body_item" key={item.name+index}>
      {item.sale_tag ? (
        <div className="sale_tag">
          优惠券
          <div className="sale_tag_price">{item.sale_tag}</div>
        </div>
      ) : null}

      <Card
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="example" src={item.img_url} className="card_img" />}
      >
        <div className="rel_div">
          {item.live_time ? (
            <div className="live_time">开播时间: {item.live_time}</div>
          ) : null}

          <div className="zone_body_item_name">{item.name}</div>
          <div className="zone_body_item_tag">
            {item.isfree ? (
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
                  ￥100.00
                </div>
                <div
                  style={{
                    color: '#fb6260',
                  }}
                >
                  SVIP:￥90.00
                </div>
              </div>
            )}
          </div>
          <div className="zone_body_item_info">
            <div className="zone_body_item_who_info">
              {item.avatar ? (
                <Avatar size="small" src={item.avatar} />
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
                  router.push('/lecturer/' + index);
                }}
              >
                {item.username}
              </div>
            </div>
            <div>
              <span>
                {item.leanrs + ' '}
                人已经学习
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
