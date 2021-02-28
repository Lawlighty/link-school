import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Tag } from 'antd';
import { CommentOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';
import { getColorByStrLength, utc2beijing } from '@/utils/utils';

// 问答
export default function QuestionItem({
  item,
}: {
  item: any;
}) {
  const router = useRouter();
  return (
    <div className="post_item" key={item._id}>
      <div className="post_item_body flex_1">
        <div
          className="post_item_body_title"
          onClick={() => {
            router.push(`/question/${item._id}`);
          }}
        >
          {item.name}

          <div className="post_item_body_info clock_color">
            <div>
              {item.author && (
                <Tag
                  color={getColorByStrLength(item.author.nickname)}
                  key={item.author._id}
                >
                  {item.author.nickname.toUpperCase()}
                </Tag>
              )}

              {utc2beijing(item.createdAt)}
            </div>
          </div>
        </div>
        <div className="post_item_body_info">
          <div className="other_info">
            <EyeOutlined
              style={{
                margin: '0 10px 0 20px',
                fontSize: 18,
              }}
            />
            {item.looks}
            <CommentOutlined
              style={{
                margin: '0 10px 0 20px',
              }}
            />
            {item.talks}
          </div>
        </div>
      </div>
    </div>
  );
}
