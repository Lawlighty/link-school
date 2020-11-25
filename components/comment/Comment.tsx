import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    MessageOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Input, Pagination, Modal } from 'antd';

const { confirm } = Modal;

export default function Comment({ }) {

    const [currentComIndex, setcurrentComIndex] = useState(-1);
    const [topComm, setTopComm] = useState('');

    const onChangePage = (page) => {
        console.log('page', page);
    };

    return (
        <div className="comm_comm">
            <div>
                <div className="comm">
                    <div className="inputBox box_has_bor">
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
                                topComm.length > 0 ? 'cancom' : '',
                            ].join(' ')}
                        >
                            <span>评论</span>
                        </div>
                    </div>
                    <div className="tip">
                        全部评论
                        <span>3</span>
                    </div>
                    <div className="courseCommentList">
                        {[1, 2, 3].map((item, index) => (
                            <div className="courseCommentItem flex">
                                <div className="userLogo">
                                    <img
                                        src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                                        alt="用户头像"
                                    />
                                </div>
                                <div className="courseCommentItemText flex_1">
                                    <div className="userName">陈平安</div>
                                    <div className="commentText">
                                        可以说很是牛逼了
                                    </div>
                                    <div className="courseCommentItemfooter flex">
                                        <div className="flex_1">0分钟之前</div>
                                        <div>
                                            <MessageOutlined
                                                className="icon toComm"
                                                onClick={() => {
                                                    currentComIndex === index
                                                        ? setcurrentComIndex(-1)
                                                        : setcurrentComIndex(
                                                              index,
                                                          );
                                                }}
                                            />

                                            <DeleteOutlined
                                                className="icon delComm"
                                                onClick={() => {
                                                    confirm({
                                                        title:
                                                            '确定删除这条评论?',
                                                        icon: (
                                                            <ExclamationCircleOutlined />
                                                        ),
                                                        okText: '确定',
                                                        onOk() {
                                                            console.log('OK');
                                                        },
                                                        cancelText: '取消',
                                                        onCancel() {
                                                            console.log(
                                                                'Cancel',
                                                            );
                                                        },
                                                    });
                                                }}
                                            />
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
                                                    topComm.length > 0
                                                        ? 'cancom'
                                                        : '',
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
                            defaultCurrent={1}
                            total={50}
                            onChange={onChangePage}
                            defaultPageSize={10}
                            style={{
                                textAlign: 'center',
                                marginTop: 20,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
