import PcLayout from '@/components/layouts/PcLayout';
import { Empty, Pagination, Affix, message, Menu, Tag } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { withRouter } from 'next/router';
import AccountState from '../../store/accountinfo';
import CategoryTags from '@/components/categoryTags/index';
import QuestionItem from '@/components/questions';
import Notices from '@/components/notice';
import Visitors from '@/components/visitor';
import { _get_questions } from '@/server/questions';

const initPaging = {
  current: 1,
  pageSize: 10,
  //   total: courseListCount,
};
const Question = ({ router }) => {
    const childRef: any = useRef(null);
    const [top, setTop] = useState(90);
    const [currentIndex, setCurrentIndex] = useState<string>('all');
    const [questionList, setQuestionList] = useState([]);

    const [pagination, setPagination] = useState(initPaging);
  const [currentQuery, setCurrentQuery] = useState({});
  const [accountState, setAccountState] = useState<any>({});
  const [token, setToken] = useState({});
  
  const getQuestionLits = async (
    nowpaginatio = {},
    nowcurrentQuery = {},
    nowcurrentIndex='',
  ) => {
    const query = {
      where: nowcurrentQuery,
      limit: nowpaginatio.pageSize || pagination.pageSize,
      page: nowpaginatio.current || pagination.current,
    };
    if (nowcurrentIndex) {
      if (nowcurrentIndex === 'unsolved') {
        query['where']['$or'] = [
          { accept: { $exists: false } },
          { accept: null },
        ];
      } else if (nowcurrentIndex === 'solved') {
        query['where']['accept'] = { $exists: true };
      } else if (nowcurrentIndex === 'mine') {
        query['where']['author'] = accountState._id || '';
      }
    }
    else {
       if (currentIndex === 'unsolved') {
         query['where']['$or'] = [
           { accept: { $exists: false } },
           { accept: null },
         ];
       } else if (currentIndex === 'solved') {
         query['where']['accept'] = { $exists: true };
       } else if (currentIndex === 'mine') {
         query['where']['author'] = accountState._id || '';
       }
    }
    await _get_questions(JSON.stringify(query)).then((data) => {
      if (data.status === 200) {
        setQuestionList(data.data.data);
        console.log();
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
    setAccountState(JSON.parse(localStorage.getItem('userInfo')) || {});
       setToken(localStorage.getItem('token'));
      getQuestionLits({},{});
    }, []);
    const onChangePage = (page) => {
       const n_pagination = { ...pagination, current: page };
       getQuestionLits(n_pagination,{});
    };
    const handleClick = (e: any) => {
      setPagination({ ...initPaging });
      setCurrentIndex(e.key);
      const type = e.key
      getQuestionLits(initPaging, {}, type);
    };

  const changeFunc = (id: string) => {
    let queryInfo={};
    if (id) {
      queryInfo = {
        category: id,
      };
      setCurrentQuery({ ...queryInfo });
    }
    setCurrentQuery({  });
    setPagination({ ...initPaging });
    getQuestionLits(initPaging, queryInfo);
  };

    //发帖
    const toPostPage = () => {
        if (accountState._id) {
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
                {/* <Menu.Item key="latest">最新回答</Menu.Item> */}
                <Menu.Item key="unsolved">未解决</Menu.Item>
                <Menu.Item key="solved">已解决</Menu.Item>
                { token && <Menu.Item key="mine">我的问题</Menu.Item> }
               
              </Menu>
              <CategoryTags hasAll cRef={childRef} changeFunc={changeFunc} />
              <div className="post_items">
                {questionList.map((item, index) => (
                  <QuestionItem item={item} key={item._id} />
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
                <div className="flex_1"></div>

                <Pagination
                  current={pagination.current}
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