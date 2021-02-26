import PcLayout from '../../components/layouts/PcLayout';
import { Input, Pagination, Affix, Modal } from 'antd';
import { useState, useEffect } from 'react';
import {
  EyeOutlined,
  CommentOutlined,
  MessageOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { withRouter } from 'next/router';
import { getWeekDate } from '../../utils/utils';
import AccountState from '../../store/accountinfo';
import Comment from '../../components/comment/Comment';
import MEDitor from '@uiw/react-md-editor';

const { confirm } = Modal;
const QuestionDetail = ({ router }) => {
  const accountState = AccountState.useContainer();
  const [top, setTop] = useState(90);

    const [currentQuestion, setCurrentQuestion] = useState({
      content: `
你好！ 这是你第一次使用 **Markdown编辑器** 所展示的欢迎页。如果你想学习如何使用Markdown编辑器, 可以仔细阅读这篇文章，了解一下Markdown的基本语法知识。

## 新的改变

我们对Markdown编辑器进行了一些功能拓展与语法支持，除了标准的Markdown编辑器功能，我们增加了如下几点新功能，帮助你用它写博客：
 1. **全新的界面设计** ，将会带来全新的写作体验；
 2. 在创作中心设置你喜爱的代码高亮样式，Markdown **将代码片显示选择的高亮样式** 进行展示；
 3. 增加了 **图片拖拽** 功能，你可以将本地的图片直接拖拽到编辑区域直接展示；
 4. 全新的 **KaTeX数学公式** 语法；
 5. 增加了支持**甘特图的mermaid语法[^1]** 功能；
 6. 增加了 **多屏幕编辑** Markdown文章功能；
 7. 增加了 **焦点写作模式、预览模式、简洁写作模式、左右区域同步滚轮设置** 等功能，功能按钮位于编辑区域与预览区域中间；
 8. 增加了 **检查列表** 功能。
 [^1]: [mermaid语法说明](https://mermaidjs.github.io/)
        `,
    });
  const [topComm, setTopComm] = useState('');

  const [currentComIndex, setcurrentComIndex] = useState(-1);

  const onChangePage = (page) => {
    console.log('page', page);
    };
    
     const toPostPage = () => {
       if (JSON.parse(localStorage.getItem('userInfo'))._id) {
         router.push('/question/EditQuestion');
       } else {
         router.push('/login?from=/question');
       }
     };

  return (
    <PcLayout
      showHeader={true}
      customSeo={null}
      showFooter={true}
      isBlack={false}
    >
      <div className="question_page">
        <div className="question_body flex">
          <div>
            <div
              className="flex_1 question_div"
              style={{ padding: '10px 20px', background:'#ffffff' }}
            >
              <div className="post_title">
                <div className="font24 font_b">Java学习的正确打开方式</div>
                <div className="c_999 mgt20 pab10 bor_bot_f0">
                  2020-10-26 19:00:28
                  <EyeOutlined
                    style={{
                      margin: '0 10px 0 20px',
                    }}
                  />
                  53
                  <CommentOutlined
                    style={{
                      margin: '0 10px 0 20px',
                    }}
                  />
                  33
                </div>
              </div>

              <div className="post_main_body">
                <MEDitor.Markdown source={currentQuestion.content} />
              </div>
            </div>

            <div className="comm_box">
              <Comment />
            </div>
          </div>

          <div className="question_left_div">
            <Affix offsetTop={top}>
              <div className="question_left_item">
                <div className="question_left_title">公告</div>
                <div className="question_left_list">
                  <ul>
                    <li
                      onClick={() => {
                        router.push('/question/aa');
                      }}
                    >
                      极客教育开启新时代
                    </li>
                    <li
                      onClick={() => {
                        router.push('/question/aa');
                      }}
                    >
                      彻底保护你的iPhone隐私，教你开启Apple ID两步验证
                    </li>
                    <li
                      onClick={() => {
                        router.push('/question/aa');
                      }}
                    >
                      Amazon Polly 上手实验
                    </li>
                    <li
                      onClick={() => {
                        router.push('/question/aa');
                      }}
                    >
                      揭秘你不知道的CloudFront用法
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question_left_item flex">
                <div
                  className="btn_item left1"
                  style={{
                    borderRight: '1px solid #e4e4e4',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                  onClick={toPostPage}
                >
                  <div className="item_div">
                    <img
                      src="/imgs/forum/发布.png"
                      alt=""
                      className="item_div_img"
                    />
                  </div>
                  我来回答
                </div>
              </div>

              <div
                className="question_left_item flex"
                style={{ alignItems: 'center' }}
              >
                <div className="user_img_div">
                  <img
                    src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                    alt=""
                    className="user_img"
                  />
                </div>
                <div className="flex_1">
                  {accountState.account.isLogin ? (
                    <div>
                      <div
                        style={{
                          paddingBottom: '10px',
                          maxWidth: '120px',
                        }}
                      >
                        {accountState.account.phoneNumber + '  ,你好'}
                      </div>
                      <div className="tologin_green">极客学院助你天天向上</div>
                    </div>
                  ) : (
                    <div>
                      <div
                        style={{
                          paddingBottom: '10px',
                          maxWidth: '120px',
                        }}
                      >
                        游客,你好
                      </div>
                      <div>
                        <span
                          style={{
                            textDecoration: 'underline',
                          }}
                          className="tologin_green"
                          onClick={() => {
                            router.push('/login?from=/question');
                          }}
                        >
                          登录
                        </span>{' '}
                        再玩耍，妥妥哒。
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Affix>
          </div>
        </div>
      </div>
    </PcLayout>
  );
};
export default withRouter(QuestionDetail);
