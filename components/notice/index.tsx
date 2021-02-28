import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  MessageOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Input, Pagination, Modal } from 'antd';

const { confirm } = Modal;

// 公告板块
export default function Notices({}) {
  const [currentComIndex, setcurrentComIndex] = useState(-1);
  const [topComm, setTopComm] = useState('');


  return (
    <div className="comm_comm">
      <div className="question_left_item">
        <div className="question_left_title">公告组件</div>
        <div className="question_left_list">
          <ul>
            <li
              onClick={() => {
                // router.push('/question/aa');
              }}
            >
              极客教育开启新时代
            </li>
            <li
              onClick={() => {
              }}
            >
              彻底保护你的iPhone隐私，教你开启Apple ID两步验证
            </li>
            <li
              onClick={() => {
              }}
            >
              Amazon Polly 上手实验
            </li>
            <li
              onClick={() => {
              }}
            >
              揭秘你不知道的CloudFront用法
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
