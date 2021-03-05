import PcLayout from '@/components/layouts/PcLayout';
import { Input, Avatar, Pagination, Affix, message, Tag, Tooltip, Button,Modal } from 'antd';
import { useState, useEffect, useRef } from 'react';
import {
    ExclamationCircleOutlined,
    PlusOutlined,
    ImportOutlined,
} from '@ant-design/icons';
import { withRouter } from 'next/router';
import {  getWeekDate } from '@/utils/utils';
import AccountState from '../../store/accountinfo';
import CategoryTags from '@/components/categoryTags/index';
import MEDitor from '@uiw/react-md-editor';
import { _post_question } from '@/server/questions';

const { confirm } = Modal;
const initCurrentQuestion = {
    name:'',
    content: ""
};
const EditQuestion = ({ router }) => {
    const childRef: any = useRef(null);

    const accountState = AccountState.useContainer();
    const [loading, setLoading] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(initCurrentQuestion);

  // 判断是否登录
  const isLogin = () => {
    if (
      JSON.parse(localStorage.getItem('userInfo')) &&
      localStorage.getItem('token')
    ) {
      return 
    } else {
      // 去登陆
      // router.push('/login');
      router.push(`/login?from=${router.asPath}`);
    }
  };
  useEffect(() => {isLogin()},[])
  const toReset =() => {
    setCurrentQuestion(initCurrentQuestion);
    childRef.current.clearTag();
  }
  const toPost = async () => {
    if (!childRef.current.getCurrentTag()) {
      message.info('请选择类型')
    }
    console.log('currentQuestion', currentQuestion);
    const category =childRef.current.getCurrentTag() ;
    const params = {
      ...currentQuestion,
      category,
    };
    await _post_question(params).then((data) => {
      if (data.status === 200 || data.status === 201) {
        message.success('发布成功!')
          router.push('/question');
        }
      });
    }
   

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
                <div className="flex_1">提问</div>
                <div className="flex_c flex_a_c">
                  <img
                    src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                    alt=""
                    className="img_w_50_cir ma_r_20"
                  />
                  <div className="font18">{getWeekDate() + '  ,好!'}</div>
                </div>
              </div>
              <div className="font20 mgb10">
                标题:
                <div className="mgt20">
                  <Input
                    value={currentQuestion.name}
                    onChange={(e) => {
                      setCurrentQuestion({
                        ...currentQuestion,
                        name: e.target.value,
                      });
                    }}
                    size="large"
                    placeholder="请输入标题"
                  ></Input>
                </div>
              </div>
              <div className="flex flex_a_c">
                <div className="flex flex_1">
                  <div className="ma_r_20 font20 mgt20">分类:</div>
                  <div className="flex_1">
                    <CategoryTags hasAll={false} cRef={childRef} changeFunc={() => { }} />
                  </div>
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
                    if (!currentQuestion.name) {
                      message.warning('请输入标题');
                      return;
                    }
                    if (!childRef.current.getCurrentTag()) {
                      message.warning('请选择类型');
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
            <MEDitor
              height={600}
              value={currentQuestion.content}
              onChange={(e) => {
                setCurrentQuestion({ ...currentQuestion, content: e });
              }}
            />
            <div style={{ padding: '50px 0 0 0' }} />
          </div>
        </div>
      </PcLayout>
    );
};
export default withRouter(EditQuestion);