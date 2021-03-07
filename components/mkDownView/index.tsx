import { useState, useEffect, useImperativeHandle } from 'react';
import { useRouter } from 'next/router';
import { Modal, message } from 'antd';
import MEDitor from '@uiw/react-md-editor';
import {
  _get_comments_list,
  _post_comments,
  _delete_comments,
} from '@/server/comments';

// 富文本弹窗
export default function MkDownModal({
  cRef,
  object,
  type,
  replayto,
  flushPage,
}: {
  cRef: any;
  object: any;
  type: string;
  replayto?: string;
  flushPage:any;
}) {
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  const [currentComment, setCurrentComment] = useState<string>('');
  useImperativeHandle(cRef, () => ({
    changeMDVisible: (e) => {
      setVisible(e);
      setCurrentComment('');
    },
  }));
  const commitComm = async () => {
    console.log('提交评论 object', object);
    console.log('提交评论 type', type);
    console.log('提交评论 ', currentComment);
    console.log('提交评论 replayto', replayto);
    const params = {
      type,
      object: object || router.query.id,
      content: currentComment,
    };
    if (replayto) {
      params['replayto'] = replayto;
    }
    console.log('提交评论 params', params);
    await _post_comments(params)
      .then((data) => {
        console.log('评论res', data);
        if (data.data && data.data._id) {
            message.info('评论成功');
            flushPage();
        }
      })
      .finally(() => {
        setVisible(false);
      });
  };
  return (
    <div>
      <Modal
        destroyOnClose
        width="900px"
        title="内容"
        visible={visible}
        onOk={commitComm}
        onCancel={() => {
          setVisible(false);
        }}
        okText="提交"
        cancelText="取消"
      >
        <MEDitor
          height={600}
          value={currentComment}
          onChange={(e) => {
            setCurrentComment(e);
          }}
        />
        <div style={{ padding: '50px 0 0 0' }} />
      </Modal>
    </div>
  );
}
