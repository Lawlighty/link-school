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
  _get_deep_comments_list,
} from '@/server/comments';
import { _post_question_accept } from '@/server/questions';
import { utc2beijing } from '@/utils/utils';
import MkDownModal from '@/components/mkDownView';
import Id from '@/pages/search/[id]';
const { confirm } = Modal;

export default function DeepComment({
  type,
  object,
  replayto,
  cRef,
}: {
  type: string;
  object?: string;
  replayto?: string;
  cRef:any;
}) {
  const router = useRouter();
    useImperativeHandle(cRef, () => ({
      refushDeepCommonList: () => {
        console.log('refushDeepCommonList');
        getDeepCommentsList();
      },
    }));
  // 评论
  const [commentsList, setCommentsList] = useState([]);
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
  }, []);

  const getDeepCommentsList = async (nowpaginatio = {}) => {
    const query = {
      type: 'Comment',
      object: object || router.query.id,
    };
    await _get_deep_comments_list(JSON.stringify(query)).then((data) => {
      console.log('getDeepCommentsList', data);
      if (data.status === 200) {
        setCommentsList(data.data);
      }
    });
  };

  useEffect(() => {
    getDeepCommentsList();
  }, [type, object, replayto]);
  const [currentComIndex, setcurrentComIndex] = useState(-1);
  const [topComm, setTopComm] = useState('');
  const [commObj, setCommObj] = useState('');
  const [deepComm, setDeepComm] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const onChangePage = (page) => {
    const n_pagination = { ...pagination, current: page };

    getDeepCommentsList({ ...n_pagination });
  };

  const toComm = (id) => {
    if (accountState._id) {
      setCommObj(id);
      childRef.current.changeMDVisible(true);
    } else {
      router.push(`/login?from=${router.asPath}`);
    }
  };
  return (
    <div className="comm_comm" style={{ marginLeft: 100 }}>
      <div>
        <div className="comm">
          {commentsList.length > 0 && (
            <div>
              <div className="tip">
                全部回复
                <span>
                  {` `}
                  {commentsList.length}
                </span>
              </div>
              <div className="courseCommentList">
                {commentsList.map((item, index) => {
                  if (showAll) {
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
                            <div className="userName">
                              {item.user.nickname}
                              {'   '}
                              {item.replayto ? (
                                <span>
                                  <span className="c_999">回复</span>
                                  {`  `}
                                  {item.replayto.user.nickname}
                                </span>
                              ) : null}
                            </div>
                            <div className="commentText">{item.content}</div>
                            <div className="courseCommentItemfooter flex">
                              <div className="flex_1">
                                {utc2beijing(item.createdAt)}
                              </div>
                              <div>
                                <MessageOutlined
                                  className="icon toComm"
                                  onClick={(e) => {
                                    toComm(item._id);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    if (index <= 4) {
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
                              <div className="userName">
                                {item.user.nickname}
                                {'   '}
                                {item.replayto ? (
                                  <span>
                                    <span className="c_999">回复</span>
                                    {`  `}
                                    {item.replayto.user.nickname}
                                  </span>
                                ) : null}
                              </div>
                              <div className="commentText">{item.content}</div>
                              <div className="courseCommentItemfooter flex">
                                <div className="flex_1">
                                  {utc2beijing(item.createdAt)}
                                </div>
                                <div>
                                  <MessageOutlined
                                    className="icon toComm"
                                    onClick={(e) => {
                                      toComm(item._id);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    else {
                      return null
                    }
                  }
                })}
                {commentsList.length > 5&&!showAll && (
                  <div className="tip">
                    共
                    <span>
                      {` `}
                      {commentsList.length}
                      {` `}
                    </span>
                    条回复,
                    <a onClick={(e) => {
                      e.stopPropagation();
                      setShowAll(true)
                    }} className="lookMore">点击查看</a>
                  </div>
                )}

                <MkDownModal
                  cRef={childRef}
                  object={object}
                  type="Comment"
                  replayto={commObj}
                  flushPage={getDeepCommentsList}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
