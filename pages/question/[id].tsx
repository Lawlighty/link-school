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
import { _get_questions_detail } from '@/server/questions';
import { useRouter } from 'next/router';
import { utc2beijing } from '@/utils/utils';
import GetBrowserNum from '@/components/actions/getBrowseNum';
import GetCommentNum from '@/components/actions/getCommentNum';
import Visitors from '@/components/visitor';
import Notices from '@/components/notice';

export default function QuestionDetail() {
   const router = useRouter();
  const accountState = AccountState.useContainer();
  const [top, setTop] = useState(90);

    const [currentQuestion, setCurrentQuestion] = useState<any>({});
  const [topComm, setTopComm] = useState('');

  const [currentComIndex, setcurrentComIndex] = useState(-1);

  const getQuestionsDetail = async (id: string) => {
    await _get_questions_detail(id).then((data:any) => {
      if (data.status === 200) {
        setCurrentQuestion({ ...data.data });
      }
    });
  };
  useEffect(() => {
    if (router.query.id) {
      const id = router.query.id;
      getQuestionsDetail(id);
    }
  }, [router]);

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
          <div className="flex_1">
            <div
              className="flex_1 question_div"
              style={{ padding: '10px 20px', background: '#ffffff' }}
            >
              <div className="post_title">
                <div className="font24 font_b">{currentQuestion.name}</div>
                <div className="c_999 mgt20 pab10 bor_bot_f0 flex flex_a_c">
                  <div className="flex_1">
                    {' '}
                    {utc2beijing(currentQuestion.createdAt)}
                  </div>
                  <EyeOutlined
                    style={{
                      margin: '0 10px 0 20px',
                    }}
                  />
                  <GetBrowserNum
                    type="Question"
                    id={currentQuestion._id || ''}
                  />
                  <CommentOutlined
                    style={{
                      margin: '0 10px 0 20px',
                    }}
                  />
                  <GetCommentNum
                    type="Question"
                    id={currentQuestion._id || ''}
                  />
                </div>
              </div>

              <div className="post_main_body">
                <MEDitor.Markdown source={currentQuestion.content} />
              </div>
            </div>

            <div className="comm_box">
              <Comment type="Question" />
            </div>
          </div>

          <div className="question_left_div">
            <Affix offsetTop={top}>
              <Notices />

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

              <Visitors />
            </Affix>
          </div>
        </div>
      </div>
    </PcLayout>
  );
};
// export default withRouter(QuestionDetail);
