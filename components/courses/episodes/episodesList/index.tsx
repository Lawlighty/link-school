import { useState, useEffect } from 'react';
import { setSubStr } from '@/utils/utils';
import { Modal } from 'antd';
import {
  PlayCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { _get_episodes_list } from '@/server/episodes';
// 子课程列表
export default function EpisodesList({
  isStudy,
  courseId,
  currentIndex,
  changeEpisodes,
}: {
  isStudy: boolean;
  courseId: any;
  currentIndex: string;
  changeEpisodes: any;
}) {
  const [episodesList, setEpisodesList] = useState<any>([]);
  const [currentEpisodes, setCurrentEpisodes] = useState<string>('');
  const getEpisodesLits = async (courseId: string) => {
    if (courseId) {
      const query = {
        where: {
          course: courseId,
        },
      };
      await _get_episodes_list(JSON.stringify(query)).then((data) => {
        if (data.status === 200) {
          setEpisodesList(data.data.data);
          if (!currentIndex) {
            setCurrentEpisodes(data.data.data[0] || {});
            changeEpisodes(data.data.data[0] || {});
          }
        }
      });
    }
  };
  useEffect(() => {
    getEpisodesLits(courseId);
  }, [courseId]);
  useEffect(() => {
    setCurrentEpisodes(currentIndex);
  }, [currentIndex]);

    const confirm = () => {
      Modal.confirm({
        title: '提示',
        icon: <ExclamationCircleOutlined />,
        content: '加入学习后才能观看',
        okText: '确认',
        cancelText: '取消',
      });
    };
  const changeEpisodesItem = (item) => {
    if (isStudy) {
        setCurrentEpisodes(item._id);
        changeEpisodes(item);
     } else {
       confirm();
     }
   
  };
  return (
    <div
      className="content_items"
      style={{ overflowY: 'auto', maxHeight: '800px' }}
    >
      {episodesList.map((item) => (
        <div className="content_item" key={item._id}>
          <div className="content_item_item">
            <div
              onClick={(item) => {
                changeEpisodesItem(item);
              }}
              className={[
                'content_item_item_title',
                currentEpisodes === item._id ? 'c_red' : '',
              ].join(' ')}
            >
              <PlayCircleOutlined
                style={{
                  marginRight: 5,
                }}
              />
              {item.name}
            </div>
            <div className="content_item_item_end">{item.duration}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
