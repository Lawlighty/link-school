import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    MessageOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Input, Pagination, Modal, Empty, message } from 'antd';
import {
  _get_comments_list,
  _post_comments,
  _delete_comments,
} from '@/server/comments';
import {  utc2beijing } from '@/utils/utils';
const { confirm } = Modal;

export default function Comment({
  type,
  object,
  replayto,
}: {
  type: string;
  object?: string;
  replayto?:string;
    }) {
  const router = useRouter();
  // 评论
  const [commentsList, setCommentsList] = useState([]);
  // 页码
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    //   total: courseListCount,
  });

  const getCommentsList = async (nowpaginatio = {}) => {
    const query = {
      where: {
        type,
        object: object || router.query.id,
      },
      if(replayto) {
        query['where']['replayto'] = replayto;
      },
      limit: nowpaginatio.pageSize || pagination.pageSize,
      page: nowpaginatio.current || pagination.current,
    };
    await _get_comments_list(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        const n_pagination = {
          ...pagination,
          current: data.data.page,
          total: data.data.total,
        };
        setPagination({ ...n_pagination });
        setCommentsList(data.data.data);
      }
    });
    };
    
    useEffect(() => {
     getCommentsList()
    }, [type, object,replayto]);
  const [currentComIndex, setcurrentComIndex] = useState(-1);
  const [topComm, setTopComm] = useState('');

  const onChangePage = (page) => {
      const n_pagination = { ...pagination, current: page };

      getCommentsList({ ...n_pagination });
    };
    const subCommon = async () => {
        const params = {
          type,
          object: object || router.query.id,
          content: topComm,
        };
        await _post_comments(params).then((data) => {
            console.log('评论res', data);
            if (data.data && data.data._id) {
                message.info('评论成功')
                getCommentsList();
             }
            setTopComm('')
        });
    };
    const delComm = async (id: string) => {
        await _delete_comments(id).then((data) => {
          console.log('评论删除res', data);
          if (data.status === 200) {
            message.info('删除成功');
            getCommentsList();
          }
        });
    }

  return (
    <div className="comm_comm">
      <div>
        <div className="comm">
          <div className="inputBox box_has_bor">
            <Input
              className="commentInput"
              value={topComm}
              onChange={(e) => {
                setTopComm(e.target.value.substr(0, 300));
              }}
            />
            <div
              disabled={!topComm}
              onClick={() => {
                subCommon();
              }}
              className={[
                'submitBtn',
                'pointer',
                topComm.length > 0 ? 'cancom' : '',
              ].join(' ')}
            >
              <span>评论</span>
            </div>
          </div>
          {!pagination.total && (
            <Empty
              style={{
                padding: '100px 0',
                color: '#999',
                fontSize: '16px',
              }}
              description={<span>暂无评论数据,快去评论把!</span>}
            />
          )}
          {pagination.total > 0 && (
            <div>
              <div className="tip">
                全部评论
                <span>
                  {` `}
                  {pagination.total}
                </span>
              </div>
              <div className="courseCommentList">
                {commentsList.map((item, index) => (
                  <div className="courseCommentItem flex" key={item._id}>
                    <div className="userLogo">
                      <img
                        src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                        alt="用户头像"
                      />
                    </div>
                    <div className="courseCommentItemText flex_1">
                      <div className="userName">{item.user.nickname}</div>
                      <div className="commentText">{item.content}</div>
                      <div className="courseCommentItemfooter flex">
                        <div className="flex_1">
                          {utc2beijing(item.createdAt)}
                        </div>
                        <div>
                          {false && (
                            <MessageOutlined
                              className="icon toComm"
                              onClick={() => {
                                currentComIndex === index
                                  ? setcurrentComIndex(-1)
                                  : setcurrentComIndex(index);
                              }}
                            />
                          )}

                          {JSON.parse(localStorage.userInfo)._id ===
                            item.user._id && (
                            <DeleteOutlined
                              className="icon delComm"
                              onClick={() => {
                                confirm({
                                  title: '确定删除这条评论?',
                                  icon: <ExclamationCircleOutlined />,
                                  okText: '确定',
                                  onOk() {
                                    delComm(item._id);
                                  },
                                  cancelText: '取消',
                                  onCancel() {},
                                });
                              }}
                            />
                          )}
                        </div>
                      </div>
                      {index === currentComIndex ? (
                        <div className="inputBox">
                          <Input
                            className="commentInput"
                            value={topComm}
                            onChange={(e) => {
                              setTopComm(e.target.value);
                            }}
                          />
                          <div
                            onClick={() => {
                              setTopComm('');
                            }}
                            className={[
                              'submitBtn',
                              'pointer',
                              topComm.length > 0 ? 'cancom' : '',
                            ].join(' ')}
                          >
                            <span>评论</span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}

                <Pagination
                  current={pagination.current}
                  total={pagination.total || 10}
                  onChange={onChangePage}
                  defaultPageSize={pagination.pageSize}
                  style={{ textAlign: 'center', marginTop: 20 }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
