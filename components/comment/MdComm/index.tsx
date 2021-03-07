import { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { useRouter } from 'next/router';
import {
  MessageOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  SmileTwoTone,
  HeartTwoTone,
} from '@ant-design/icons';
import { Input, Pagination, Modal, Empty, message } from 'antd';
import {
  _get_comments_list,
  _post_comments,
  _delete_comments,
} from '@/server/comments';
import { _post_question_accept } from '@/server/questions';
import { utc2beijing } from '@/utils/utils';
import MkDownModal from '@/components/mkDownView';
import DeepComment from '@/components/comment/deepComm';
const { confirm } = Modal;

export default function MdWithComment({
  type,
  object,
  replayto,
  accept,
  cRef,
  refushDetail,
  author,
}: {
  type: string;
  object?: string;
  replayto?: string;
  accept: any;
  cRef: any;
  refushDetail: any;
  author: string;
}) {
  const router = useRouter();
  useImperativeHandle(cRef, () => ({
    refushCommonList: () => {
      getCommentsList();
    },
  }));
  const deepchildRef: any = useRef(null);
  // 评论
  const [commentsList, setCommentsList] = useState([]);
  const [acceptComm, setAcceptComm] = useState({});
  // 页码
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    //   total: courseListCount,
  });
  const [accountState, setAccountState] = useState<any>({});
  const childRef: any = useRef(null);
  useEffect(() => {
    setAccountState(JSON.parse(localStorage.getItem('userInfo')) || {});
    if (accept) {
      // 查询采纳的答案
      queryAccept();
    }
  }, []);
  useEffect(() => {
    if (accept) {
      console.log('查询采纳的答案', accept);
      // 查询采纳的答案
      queryAccept();
    }
  }, [accept]);

  const queryAccept = async () => {
    const query = {
      where: {
        _id: accept,
      },
    };
    await _get_comments_list(JSON.stringify(query)).then((data) => {
      console.log('查询采纳信息', data);
      if (data.status === 200) {
        setAcceptComm(data.data.data[0]);
      }
    });
  };
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
    getCommentsList();
  }, [type, object, replayto]);
  const [currentComIndex, setcurrentComIndex] = useState(-1);
  const [topComm, setTopComm] = useState('');
  const [commObj, setCommObj] = useState('');
  const [deepComm, setDeepComm] = useState(false);

  const onChangePage = (page) => {
    const n_pagination = { ...pagination, current: page };

    getCommentsList({ ...n_pagination });
  };
  const subCommon = async () => {
    if (accountState._id) {
      const params = {
        type,
        object: object || router.query.id,
        content: topComm,
      };
      await _post_comments(params).then((data) => {
        console.log('评论res', data);
        if (data.data && data.data._id) {
          message.info('评论成功');
          getCommentsList();
        }
        setTopComm('');
      });
    } else {
      router.push(`/login?from=${router.asPath}`);
    }
  };
  // 采纳答案
  const toBeAccept = async (id: string) => {
    const params = {
      id: object,
      accept: id,
    };
    await _post_question_accept(params).then((data) => {
      console.log('采纳答案', data);
      if (data.status === 200 || data.status === 201) {
        message.info('采纳成功!');
        getCommentsList();
        refushDetail(router.query.id);
      }
    });
  };

  const toComm = (id, deepComm) => {
    if (accountState._id) {
      setCommObj(id);
      setDeepComm(deepComm);
      childRef.current.changeMDVisible(true);
    } else {
      router.push(`/login?from=${router.asPath}`);
    }
  };
  const flushDeepComm = () => {
    deepchildRef.current.refushDeepCommonList();
  };
  return (
    <div className="comm_comm">
      <div>
        <div className="comm">
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
                {acceptComm._id && (
                  <div
                    className="courseCommentItem"
                    key={acceptComm._id}
                    style={{ position: 'relative', overflow: 'hidden' }}
                  >
                    <div className="correct_answer">
                      <span>已采纳</span>
                    </div>
                    <div className="myComm">
                      <div className="userLogo">
                        <img
                          src={acceptComm.user ? acceptComm.user.avatar : ''}
                          alt="用户头像"
                        />
                      </div>
                      <div className="courseCommentItemText flex_1">
                        <div className="userName">
                          {acceptComm.user ? acceptComm.user.nickname : ''}
                        </div>
                        <div className="commentText">{acceptComm.content}</div>
                        <div className="courseCommentItemfooter flex">
                          <div className="flex_1">
                            {utc2beijing(acceptComm.createdAt)}
                          </div>
                          <div>
                            <MessageOutlined
                              className="icon toComm"
                              onClick={(e) => {
                                toComm(acceptComm._id, false);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <DeepComment
                        cRef={deepchildRef}
                        type="Comment"
                        object={acceptComm._id}
                      />
                    </div>
                  </div>
                )}

                {commentsList.map((item, index) => {
                  if (!accept || item._id !== accept._id) {
                    return (
                      <div className="courseCommentItem" key={item._id}>
                        <div className="myComm">
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
                                <MessageOutlined
                                  className="icon toComm"
                                  onClick={(e) => {
                                    toComm(item._id, false);
                                  }}
                                />
                                {!accept &&
                                JSON.parse(localStorage.userInfo)._id ===
                                  author ? (
                                  <a
                                    style={{
                                      fontSize: '16px',
                                      marginRight: 20,
                                      cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                      confirm({
                                        title: '确定采纳?',
                                        icon: <ExclamationCircleOutlined />,
                                        okText: '确定',
                                        onOk() {
                                          toBeAccept(item._id);
                                        },
                                        cancelText: '取消',
                                        onCancel() {},
                                      });
                                    }}
                                  >
                                    采纳为答案
                                  </a>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <DeepComment
                            cRef={deepchildRef}
                            type="Comment"
                            object={item._id}
                          />
                        </div>
                      </div>
                    );
                  }
                })}

                <MkDownModal
                  cRef={childRef}
                  object={commObj}
                  type="Comment"
                  replayto={deepComm ? commObj : null}
                  flushPage={flushDeepComm}
                />
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
