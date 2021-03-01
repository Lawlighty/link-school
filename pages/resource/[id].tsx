import PcLayout from '@/components/layouts/PcLayout';
import {  message } from 'antd';
import { useState, useEffect } from 'react';
import { EyeOutlined, LikeOutlined } from '@ant-design/icons';
import RecommendDoc from '@/components/documents/recommendDoc';
import { _get_documents_detail } from '@/server/documents';
import MEDitor from '@uiw/react-md-editor';
import { utc2beijing } from '@/utils/utils';
import { useRouter } from 'next/router';
import GetBrowserNum from '@/components/actions/getBrowseNum';
import GetUpVoteNum from '@/components/actions/getUpVoteNum';
import UpVote from '@/components/actions/upVote';
// const Doc = ({ router }) => { 
export default function Doc() { 
  const router = useRouter();
  const [currentDoc, setCurrentDoc] = useState<any>({})
  const getDocumentsDetail = async (id: string) => {
    await _get_documents_detail(id).then((data) => {
      if (data.status === 200) {
        setCurrentDoc({ ...data.data });
      }
    });
  };

  useEffect(() => {
    if (router.query.id) {
      const id = router.query.id;
      getDocumentsDetail(id);
    }
  }, [router]);
    const [top, setTop] = useState(90);
    const [isColl, setColl] = useState(false);
    const [likes, setLikesl] = useState(false);
    const [likesNum, setLikesNum] = useState(177);

    return (
      <PcLayout
        showHeader={true}
        customSeo={null}
        showFooter={true}
        isBlack={false}
      >
        <div className="doc_page">
          <div className="doc_div flex">
            <div className="doc_body flex_1">
              <div className="pd20 c_ccc font14 b_fff flex_c border_top">
                <p className="font24 font_b c_333">{currentDoc.name || ''}</p>{' '}
                <div className="flex" style={{ width: '100%' }}>
                  <div className="flex_1" style={{ textAlign: 'left' }}>
                    {utc2beijing(currentDoc.createdAt)}
                  </div>

                  <div
                    className="flex_1 hot_div"
                    style={{ textAlign: 'right' }}
                  >
                    <UpVote type="Document">
                      {` `}
                      <GetUpVoteNum type="Document" />
                    </UpVote>
                    
                    <div className="hot_item">
                      <span className="iconfont">
                        <EyeOutlined />
                      </span>{' '}
                      <GetBrowserNum
                        type="Document"
                        id={currentDoc._id || ''}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc_info_body">
                <MEDitor.Markdown
                  source={currentDoc.content}
                  style={{ marginBottom: '50px' }}
                />
                <div className="func">
                  <div
                    className="func_item"
                    onClick={() => message.success('分享成功!')}
                  >
                    <img src="/imgs/分享.png" alt="" className="icon" />
                    分享
                  </div>
                  <div
                    className={['func_item', isColl ? 'c_red' : ''].join(' ')}
                    onClick={() => setColl(!isColl)}
                  >
                    <img
                      style={{ width: '36px' }}
                      src={!isColl ? '/imgs/收藏.png' : '/imgs/收藏 _red.png'}
                      alt=""
                      className="icon"
                    />
                    收藏
                  </div>
                </div>
              </div>
            </div>
            <div className="resource_page ma_l_20">
              <RecommendDoc top={top} />
            </div>
          </div>
        </div>
      </PcLayout>
    );
}
// export default withRouter(Doc);
