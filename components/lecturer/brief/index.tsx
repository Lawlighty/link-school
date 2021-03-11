import { useState, useEffect } from 'react';
import { setSubStr } from '@/utils/utils';
import LikeBtn from '@/components/actions/likeBtn';
import Link from 'next/link';
// 讲师简介
export default function LecturerBrief({ author }: { author: any }) {

    const [isCollPer, setIsCollPer] = useState(false);
  return (
    <div className="teacher_info">
      <div className="head">讲师简介</div>
      <div className="teacher_msg">
        <div className="teacher_msg_right">
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={author.avatar || ''}
                alt=""
                className="item"
                style={{
                  borderRadius: '50%',
                  width: '45px',
                }}
              />
              <div className="teacher_name">
                <Link href={`/lecturer/${author._id}`}>
                  {author.nickname || ''}
                </Link>
              </div>

              <LikeBtn type="User" title="关注" object={author._id}>
                <></>
              </LikeBtn>
            </div>
          </div>
          <div className="info_box">
            <p>{setSubStr(author.introduc || '', 150)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
