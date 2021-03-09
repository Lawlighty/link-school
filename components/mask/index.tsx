// 幕布
import { useState, useEffect } from 'react';
import { setSubStr } from '@/utils/utils';
import LikeBtn from '@/components/actions/likeBtn';
import GetStudyNum from '@/components/actions/getStudyNum';
import  './index.less';
import { _get_studys_status, _post_studys_toogle } from '@/server/studys';

export default function Mask({ currentInfo, changeStudy }: { currentInfo: any; changeStudy:any}) {
  const [isCollPer, setIsCollPer] = useState(false);
  const addStudy = async () => {
    // 免费课程--直接加入学习
    if (!currentInfo.price || currentInfo.price === 0) {
      const query = {
        type: 'Course',
        object: currentInfo._id,
      };
      const params = {
        query: JSON.stringify(query),
      };
        await _post_studys_toogle(params).then((data) => {
            if (data.status === 200 || data.status===201) {
              changeStudy(data.data.status);
            }
      });
    }
      // 需要购买
    else {
        console.log('购买')
         const query = {
           type: 'Course',
           object: currentInfo._id,
         };
         const params = {
           query: JSON.stringify(query),
         };
         await _post_studys_toogle(params).then((data) => {
           if (data.status === 200 || data.status === 201) {
             changeStudy(data.data.status);
           }
         });
    }
  };
  return (
    <div className="mask_page">
      <div className="left">
        <div>
          <img style={{ width: '600px' }} src={currentInfo.cover} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="box">
          <div className="title">{currentInfo.name}</div>
          <div className="view_price">
            <div>
              价格: <span>￥{currentInfo.price || 0}</span>
            </div>
            <div className="mgt10">
              SVIP: <span>￥{currentInfo.sprice || 0}</span>
              <a href="/vip" className="set_vip">
                更多权益&gt;&gt;
              </a>
            </div>
          </div>
          <div className="view_teacher">
            <span className="text_b">讲师:</span>{' '}
            {currentInfo.author ? currentInfo.author.nickname : ''}
          </div>
        </div>

        <div className="foot_box">
          <div className="flex_1">
            <button className="submit_btn" onClick={addStudy}>
              {!currentInfo.price || currentInfo.price === 0
                ? '加入学习'
                : '立即购买'}
            </button>
          </div>

          <div className="c_999">
            <GetStudyNum type="Course" id={currentInfo._id} /> 人已学习
          </div>
        </div>
      </div>
    </div>
  );
}
