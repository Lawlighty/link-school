import PcLayout from '@/components/layouts/PcLayout';
import {
    Modal,
    Drawer,
    Tree,
} from 'antd';
import { useState, useEffect } from 'react';
import {
    DatabaseOutlined,
    DownloadOutlined,
    DownOutlined,
    PlayCircleOutlined,

} from '@ant-design/icons';
import Comment from '@/components/comment/Comment';
import LecturerBrief from '@/components/lecturer/brief';
import HotCourses from '@/components/courses/hotCourses';
import EpisodesList from '@/components/courses/episodes/episodesList';
import LikeBtn from '@/components/actions/likeBtn';
import { useRouter } from 'next/router';
import { _get_courses_detail } from '@/server/courses';

export default function View() { 
    const router = useRouter();
    const [courseInfo, setCourseInfo] = useState<any>({});
    const [currentEpisodes, setCurrentEpisodes] = useState<any>({});
    const getCoursesDetail = async (id: string) => {
      await _get_courses_detail(id).then((data) => {
          if (data.status === 200) {
            setCourseInfo({ ...data.data });
          }
      });
    };
    useEffect(() => {
        if (router.query.id) {
          
            const id = router.query.id;
            getCoursesDetail(id);
        }
    },[])
    
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(!visible);
    };
    const onClose = () => {
        setVisible(false);
    };

    const [isColl, setIsColl] = useState(false);

    const [tabIndex, setTabIndex] = useState(0);


    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
    
  const changeEpisodes = (episode:any) => {
    console.log('原来的currentEpisodes', currentEpisodes);
    console.log('接受的episode', episode);
    let new_episode = Object.assign({}, currentEpisodes);
    new_episode = { ...episode };
    console.log('new_episode', new_episode);
    setCurrentEpisodes(new_episode);
    // console.log('setCurrentEpisodes', currentEpisodes);
    // forceUpdate();
  };
    return (
      <PcLayout
        showHeader={true}
        customSeo={null}
        showFooter={true}
        isBlack={false}
      >
        <div className="view_page">
          <div className="detail_video">
            <div className="video_body">
              <div className="video_content ">
                {currentEpisodes._id && (
                  <div className="win_box " style={{ position: 'relative' }}>
                    <Drawer
                      title="章节目录"
                      placement="right"
                      closable={false}
                      onClose={onClose}
                      visible={visible}
                      getContainer={false}
                      style={{ position: 'absolute', zIndex: 10 }}
                    >
                      <Tree
                        showLine
                        switcherIcon={<DownOutlined />}
                        defaultExpandedKeys={['0-0']}
                        defaultSelectedKeys={['0-0-0']}
                        onSelect={onSelect}
                        treeData={[
                          {
                            title: '第1章：数据',
                            key: '0-0',
                            children: [
                              {
                                title: '第一讲: 1',
                                key: '0-0-0',
                              },
                              {
                                title: '第一讲: 2',
                                key: '0-0-1',
                              },
                              {
                                title: '第一讲: 3',
                                key: '0-0-2',
                              },
                            ],
                          },
                        ]}
                      />
                    </Drawer>
                    <video
                      width="100%"
                      height="100%"
                      controls
                      src={currentEpisodes.file || ''}
                    >
                      {/* <source
                        src={currentEpisodes.file || ''}
                        type="video/mp4"
                      /> */}
                      您的浏览器不支持 HTML5 video 标签。
                    </video>
                  </div>
                )}

                <div className="video_info" style={{ display: 'none' }}>
                  <div className="video_info_tab" onClick={showDrawer}>
                    <DatabaseOutlined className="icon" />
                    <div>章节</div>
                  </div>
                  <div className="video_info_tab" onClick={showDrawer}>
                    <DownloadOutlined className="icon" />
                    <div>课件</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail_box">
            <div className="detail_info flex">
              <div className="layout_left">
                <ul className="course_tab flex">
                  <li
                    className={tabIndex === 0 ? 'on' : ''}
                    onClick={() => setTabIndex(0)}
                  >
                    <a>课程介绍</a>
                  </li>{' '}
                  <li
                    className={tabIndex === 1 ? 'on' : ''}
                    onClick={() => setTabIndex(1)}
                  >
                    <a>点播课程</a>
                  </li>{' '}
                  <li
                    className={tabIndex === 2 ? 'on' : ''}
                    onClick={() => setTabIndex(2)}
                  >
                    <a>课程评论</a>
                  </li>{' '}
                  <div
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}
                  >
                    <LikeBtn type="Course" title="收藏" object={router.query.id}>
                      <></>
                    </LikeBtn>
                  </div>
                </ul>

                <div className="content_info">
                  {tabIndex < 2 ? (
                    <>
                      {tabIndex === 0 && (
                        <div className="introduce">
                          <p>{courseInfo.introduce}</p>
                        </div>
                      )}

                      <div className="c_999">
                        <div className="font16 c_333 font_b mgt20 leftLine">
                          课程大纲
                        </div>
                        <EpisodesList
                          courseId={router.query.id || ''}
                          currentIndex={currentEpisodes._id || ''}
                          changeEpisodes={changeEpisodes}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <Comment type='Course'/>
                    </>
                  )}
                </div>
              </div>

              <div
                className="flex flex_1"
                style={{ justifyContent: 'flex-end' }}
              >
                <div className="layout_right">
                  <LecturerBrief author={courseInfo.author || {}} />
                  <HotCourses category={courseInfo.category} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PcLayout>
    );
}