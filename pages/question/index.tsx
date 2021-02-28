import PcLayout from '@/components/layouts/PcLayout';
import { Empty, Pagination, Affix, message, Menu, Tag } from 'antd';
import { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import AccountState from '../../store/accountinfo';
import CategoryTags from '@/components/categoryTags/index';
import QuestionItem from '@/components/questions';
import Notices from '@/components/notice';
import Visitors from '@/components/visitor';
import { _get_questions } from '@/server/questions';

const Question = ({ router }) => {
    const accountState = AccountState.useContainer();
    const [top, setTop] = useState(90);
    const [currentIndex, setCurrentIndex] = useState<string>('all');
    const [questionList, setQuestionList] = useState([]);

     const [pagination, setPagination] = useState({
       current: 1,
       pageSize: 10,
       //   total: courseListCount,
     });
  
    const getQuestionLits = async (nowpaginatio = {}) => {
      const query = {
        where: {},
        limit: nowpaginatio.pageSize || pagination.pageSize,
        page: nowpaginatio.current || pagination.current,
      };
      await _get_questions(JSON.stringify(query)).then((data) => {
        if (data.status === 200) {
          setQuestionList(data.data.data);
          console.log()
          const n_pagination = {
            ...pagination,
            current: data.data.page,
            total: data.data.total,
          };
          setPagination({ ...n_pagination });
        }
      });
    };
    useEffect(() => {
      getQuestionLits();
    }, []);
    const onChangePage = (page) => {
       const n_pagination = { ...pagination, current: page };
       getQuestionLits(n_pagination);
    };
    const handleClick = (e:any) => {
        setCurrentIndex(e.key);
    };


    //发帖
    const toPostPage = () => {
        if (JSON.parse(localStorage.getItem('userInfo'))._id) {
          router.push('/question/EditQuestion');
        } else {
          router.push('/login?from=/question');
        }
    }
    return (
      <PcLayout
        showHeader={true}
        customSeo={null}
        showFooter={true}
        isBlack={false}
      >
        <div className="question_page">
          <div className="question_body flex">
            <div className="flex_1 question_div">
              <Menu
                className="question_menu"
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 8px 0 #e5e5e5',
                  borderRadius: '8px',
                }}
                onClick={handleClick}
                selectedKeys={[currentIndex]}
                mode="horizontal"
              >
                <Menu.Item key="all">全部问题</Menu.Item>
                <Menu.Item key="latest">最新回答</Menu.Item>
                <Menu.Item key="unsolved">未解决</Menu.Item>
                <Menu.Item key="solved">已解决</Menu.Item>
                <Menu.Item key="mine">我的问题</Menu.Item>
              </Menu>
              <CategoryTags hasAll />
              <div className="post_items">
                {questionList.map((item, index) => (
                  <QuestionItem item={item} />
                ))}
                {questionList.length === 0 && (
                  <Empty
                    style={{
                      padding: '100px 0',
                      color: '#999',
                      fontSize: '16px',
                    }}
                    description={<span>暂无问答数据,快去提问把!</span>}
                  />
                )}

                <Pagination
                  defaultCurrent={1}
                  total={pagination.total || 10}
                  onChange={onChangePage}
                  defaultPageSize={pagination.pageSize}
                  style={{
                    textAlign: 'center',
                    margin: '20px 0',
                    paddingBottom: '20px',
                  }}
                />
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
                    我要提问
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
export default withRouter(Question);