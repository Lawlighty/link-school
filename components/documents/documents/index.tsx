import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { setSubStr } from '@/utils/utils';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// 文档样式
export default function DocumentItem({ item }: { item: any }) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/resource/${item._id}`);
      }}
      className="zone_body_item width100"
      key={item._id}
      style={{ marginBottom: 8 }}
    >
      <Card
        hoverable
        style={{
          width: '100%',
          position: 'relative',
        }}
        className="doc_div"
      >
        <div className="desc">
          <a className="text">{setSubStr(item.introduce, 400)}</a>
        </div>
        <div className="flex">
          <div>
            <img style={{ width: 230 }} src={item.cover} alt="" />
          </div>
          <div className="resource_item">
            <div className="zone_body_item_name flex_1">{item.name}</div>
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

                <div className="name">{item.nickname}</div>
              </div>
              <div>
                <span>
                  {item.leanrs + ' '}
                  人已经学习
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
