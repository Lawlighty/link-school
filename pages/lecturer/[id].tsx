import PcLayout from '@/components/layouts/PcLayout';
import { Input, Avatar, Pagination, Modal, Card, Empty } from 'antd';
import { useState, useEffect } from 'react';
import { UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { _get_courses_list } from '@/server/courses';
import LecturerResource from '@/components/lecturer/Doc';
import LectuerCourse from '@/components/lecturer/Course';
import { _get_lecturer_detail } from '@/server/users';
import LikeDiv from '@/components/actions/likeDiv';
import GetFocusNum from '@/components/actions/getFocusNum';
import GetFanceNum from '@/components/actions/getFanceNum';
const { confirm } = Modal;

export default function Lectuer() {
    const router = useRouter();

    const [showMore, setShowMore] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const [focus, setFocus] = useState(false);
    const [accountInfo, setAccountInfo] = useState<any>({});

    const getLeturerInfo = async (id) => {
         await _get_lecturer_detail(id).then((data) => {
           console.log('获取的个人信息', data);
           if (data.status == 200) {
             setAccountInfo({ ...data.data });
           }
         });
    };
    useEffect(() => {
      if (router.query.id) {
        const id = router.query.id;
        getLeturerInfo(id);
      }
    }, [router]);

    return (
      <PcLayout
        showHeader={true}
        customSeo={null}
        showFooter={true}
        isBlack={false}
      >
        <div className="lectuer_page">
          <div className="top_div">
            <div className="top">
              <div className="lectuer_info_left">
                <div>
                  <div
                    style={{
                      width: '105px',
                      height: '105px',
                      marginBottom: '20px',
                      backgroundColor: '#fff',
                      borderRadius: '50%',
                    }}
                  >
                    <Avatar
                      style={{
                        width: '100px',
                        height: '100px',
                      }}
                      src={accountInfo.avatar}
                    />
                  </div>
                </div>
                <LikeDiv type="User" object={router.query.id}>
                  <></>
                </LikeDiv>
              </div>

              <div className="lectuer_info">
                <div className="lectuer_header">
                  <div>{accountInfo.nickname}</div>
                  <div style={{ fontSize: 16, marginLeft: 20 }}>
                    南京工程学院 - 副教授
                  </div>
                </div>
                <div style={{ margin: '10px 0' }}>
                  关注
                  <GetFocusNum type="User" id={accountInfo._id || ''} />人
                  <span style={{display: 'inline-block', margin:' 0 10px'}}>|</span>
                  粉丝
                  <GetFanceNum type="User" id={accountInfo._id || ''} />人
                </div>
                <div className="brief">{accountInfo.introduc}</div>
                <div className="look_more_div">
                  <div
                    className="look_more"
                    onClick={() => {
                      setShowMore(true);
                    }}
                  >
                    查看全部
                  </div>
                </div>
                <Modal
                  closable={false}
                  title="讲师简介"
                  visible={showMore}
                  okText="确定"
                  cancelText="取消"
                  onOk={() => {
                    setShowMore(false);
                  }}
                  onCancel={() => {
                    setShowMore(false);
                  }}
                >
                  <p>{accountInfo.introduc}</p>
                </Modal>
              </div>
            </div>
          </div>

          <div className="lectuer_boxer">
            <div className="lectuer_container">
              <ul className="tabs flex">
                <li
                  className={['tab', tabIndex === 0 ? 'active' : ''].join(' ')}
                  onClick={() => setTabIndex(0)}
                >
                  视频
                </li>{' '}
                <li
                  className={['tab', tabIndex === 1 ? 'active' : ''].join(' ')}
                  onClick={() => setTabIndex(1)}
                >
                  文档
                </li>{' '}
                {/* <li
                                className={[
                                    'tab',
                                    tabIndex === 2 ? 'active' : '',
                                ].join(' ')}
                                onClick={() => setTabIndex(2)}
                            >
                                论坛
                            </li>{' '} */}
              </ul>
            </div>

            {tabIndex === 0 && <LectuerCourse />}
            {tabIndex === 1 && <LecturerResource />}
          </div>
        </div>
      </PcLayout>
    );
}
