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
          
    </div>
  );
}
