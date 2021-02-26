import PcLayout from '@/components/layouts/PcLayout';
import { Input, Avatar, Pagination, Affix, message, Tag, Tooltip, Button,Modal } from 'antd';
import { useState, useEffect, useRef } from 'react';
import {
    ExclamationCircleOutlined,
    PlusOutlined,
    ImportOutlined,
} from '@ant-design/icons';
import { withRouter } from 'next/router';
import { getTagColor, getWeekDate } from '@/utils/utils';
import AccountState from '../../store/accountinfo';
import dynamic from 'next/dynamic';
import { postTags } from '../../config/config';
// import BraftEditor from 'braft-editor';
// const BraftEditor = dynamic(() => import('braft-editor'), {
//     ssr: false, //这个要加上,禁止使用 SSR
// });


const BraftEditor = dynamic(
    () => import('../../components/BraftEditor/BraftEditor'),
    { ssr: false },
);

const { confirm } = Modal;
const ForumMarkDown = ({ router }) => {
    const childRef: any = useRef(null);

    const accountState = AccountState.useContainer();
    const [loading, setLoading] = useState(false);
    //标签
    const [tags, setTags] = useState(postTags);

    //标题输入
    const [titleValue, setTitleValue] = useState('');
    //tag输入
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');

    const [input, setInput] = useState(null);
    const [editInput, setEditInput] = useState(null);

    //富文本
    const [editorState, setEditorState] = useState(
        null
    );


    const toReset =() => {
        setTags(postTags);
        setInputVisible(false);
        setInputValue('');
        setEditInputIndex(-1);
        setEditInputValue('');
        setTitleValue("");
         childRef.current.clearEditorStatel();
    }

    const updateChildState = () => {
        // childRef.current.submitContent();
    };
    const toPost = () => {
        setLoading(true);
        //保存 富文本
        childRef.current.submitContent();
        //获取富文本
        console.log(childRef.current.getHtmlContent());

        //获取标题
        console.log(titleValue);
        //标签
        console.log(tags);

        setTimeout(() => {
            setLoading(false);
            message.success('发布成功!');
        }, 2000);
    }
    const handleClose = (removedTag) => {
        const nowtags = tags.filter((tag) => tag !== removedTag);
        console.log(tags);
        setTags(nowtags);
    };

    const showInput = () => {
        setInputVisible(true);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };
    const handleInputConfirm = () => {
        let newtags = [...tags];
        if (inputValue && tags.indexOf(inputValue) === -1) {
            newtags = [...tags, inputValue];
        }
        console.log(newtags);
        setTags(newtags);
        setInputVisible(false);
        setInputValue('');
    };
    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
        
    };

    const saveInputRef = (input) => {
        setInput(input)
    };

    const saveEditInputRef = (input) => {
        setEditInput(editInput);
    };
   

    const onChangePage = (page) => {
        console.log('page', page);
    };
    return (
        <PcLayout
            showHeader={true}
            customSeo={null}
            showFooter={true}
            isBlack={false}
        >
            <div className="forum_post_page page_f5f5f5">
                <div className="div_1200">
                    <div className="page_fff ma_t_b_20 pd20 bor_r_8">
                        <div className="font24 mgb10 flex flex_a_c">
                            <ImportOutlined
                                className="ma_r_20 pointer font30"
                                onClick={() => router.back()}
                            />{' '}
                            <div className="flex_1">发布创作</div>
                            <div className="flex_c flex_a_c">
                                <img
                                    src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                                    alt=""
                                    className="img_w_50_cir ma_r_20"
                                />
                                <div className="font18">
                                    {getWeekDate() + '  ,好!'}
                                </div>
                            </div>
                        </div>
                        <div className="font20 mgb10">
                            标题:
                            <Input
                                value={titleValue}
                                onChange={(e) => {
                                    setTitleValue(e.target.value);
                                }}
                            ></Input>
                        </div>
                        <div className="flex flex_a_c">
                            <div className="ma_r_20">标签:</div>
                            <div className="flex_1">
                                {tags.map((tag, index) => {
                                    if (editInputIndex === index) {
                                        return (
                                            <Input
                                                ref={saveEditInputRef}
                                                key={tag}
                                                size="small"
                                                className="tag-input"
                                                value={editInputValue}
                                                onChange={handleEditInputChange}
                                                onBlur={handleEditInputConfirm}
                                                onPressEnter={
                                                    handleEditInputConfirm
                                                }
                                            />
                                        );
                                    }

                                    const isLongTag = tag.length > 20;

                                    const tagElem = (
                                        <Tag
                                            color={getTagColor(tag)}
                                            className="edit-tag"
                                            key={tag}
                                            // closable={index !== 0}
                                            closable
                                            onClose={() => handleClose(tag)}
                                        >
                                            <span
                                                onDoubleClick={(e) => {
                                                    if (index !== 0) {
                                                        setEditInputIndex(
                                                            index,
                                                        );
                                                        setEditInputValue(tag);
                                                        editInput.focus();
                                                        e.preventDefault();
                                                    }
                                                }}
                                            >
                                                {isLongTag
                                                    ? `${tag.slice(0, 20)}...`
                                                    : tag}
                                            </span>
                                        </Tag>
                                    );
                                    return isLongTag ? (
                                        <Tooltip title={tag} key={tag}>
                                            {tagElem}
                                        </Tooltip>
                                    ) : (
                                        tagElem
                                    );
                                })}
                                {inputVisible && (
                                    <Input
                                        ref={saveInputRef}
                                        type="text"
                                        size="small"
                                        className="tag-input"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleInputConfirm}
                                        onPressEnter={handleInputConfirm}
                                    />
                                )}
                                {tags.length < 5 && !inputVisible && (
                                    <Tag
                                        className="site-tag-plus"
                                        onClick={showInput}
                                    >
                                        <PlusOutlined /> New Tag
                                    </Tag>
                                )}
                            </div>
                            <Button
                                type="primary"
                                danger
                                className="ma_r_20"
                                onClick={() => {
                                    confirm({
                                        title: '确定重置所有内容信息吗?',
                                        icon: <ExclamationCircleOutlined />,
                                        content: '输入的信息都将被重置',
                                        okText: '确定',
                                        cancelText: '取消',
                                        onOk() {
                                            toReset();
                                        },
                                        onCancel() {},
                                    });
                                }}
                            >
                                重置
                            </Button>
                            <Button
                                loading={loading}
                                type="primary"
                                onClick={() => {
                                    if (!titleValue) {
                                        message.warning('请输入标题');
                                        return;
                                    }
                                    confirm({
                                        title: '确定发布吗?',
                                        icon: <ExclamationCircleOutlined />,
                                        okText: '确定',
                                        cancelText: '取消',
                                        onOk() {
                                            toPost();
                                        },
                                        onCancel() {},
                                    });
                                }}
                            >
                                {loading ? '发布中...' : '发布'}
                            </Button>
                        </div>
                    </div>
                    <div className="page_fff bor_r_8">
                        <BraftEditor cRef={childRef} />
                    </div>
                </div>
            </div>
        </PcLayout>
    );
};
export default withRouter(ForumMarkDown);