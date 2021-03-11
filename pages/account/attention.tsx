import PcLayout from '@/components/layouts/PcLayout';
import { Modal, Card, Avatar, Pagination, Popconfirm } from 'antd';
import AccountLeft from '@/components/account_left/AccountLeft';
import { DatabaseOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { _get_actions_list, _post_actions_toogle } from '@/server/actions';
import { setSubStr } from '@/utils/utils';
import { useRouter } from 'next/router';
import Link from 'next/link';
import './Attention.less'

const { confirm } = Modal;
const { Meta } = Card;

const initPaging = {
  current: 1,
  pageSize: 9,
  //   total: courseListCount,
};
export default function Attention() {
   const router = useRouter();
    const [pagination, setPagination] = useState(initPaging);
    const [attentionList, setAttentionList] = useState([]);
    
    const getAttentionLits = async (nowpaginatio = {}) => {
      const query = {
        where: {
          user: JSON.parse(localStorage.getItem('userInfo'))['_id'],
          type: 'User',
          name: 'LIKE',
        },
        limit: nowpaginatio.pageSize || pagination.pageSize,
        page: nowpaginatio.current || pagination.current,
      };
        await _get_actions_list(JSON.stringify(query)).then((data) => {
          console.log('获取关注的列表', data);
          if (data.status === 200) {
            
          setAttentionList(data.data.data);
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
      getAttentionLits({});
    }, []);
    const onChangePage = (page) => {
      const n_pagination = { ...pagination, current: page };
      getAttentionLits(n_pagination);
    };
      const actionToogle = async (item:any) => {
        const query = {
          type: 'User',
          name: 'LIKE',
          object: item.object._id
        };
        const params = {
          query: JSON.stringify(query),
        };
        await _post_actions_toogle(params).then((data) => {
          getAttentionLits();
          //   childRef.current.getActionList();
        });
      };
    const unLike = (item) => {
        console.log('取消关注')
        actionToogle(item);
    };
    return (
      <PcLayout
        showHeader={true}
        customSeo={null}
        showFooter={true}
        isBlack={false}
      >
        <div className="info_page">
          <div className="container">
            <AccountLeft showPerCenter showRecruit={false} />
            <div className="main_box" style={{ paddingBottom: '20px' }}>
              <ul className="tabs  relative">
                <a className="tab on">我的关注</a>
              </ul>

              {attentionList.length === 0 && (
                <div className="notdata">
                  <DatabaseOutlined style={{ marginRight: 20 }} />
                  暂时没有数据
                </div>
              )}

              <div>
                <div className="list_items">
                  {attentionList.map((item) => (
                    <div className="list_item" key={item._id}>
                      <Card
                        hoverable
                        style={{ width: 300 }}
                        actions={[
                          <div>
                            <Popconfirm
                              title="确定要取消关注吗?"
                              onConfirm={(e) => {
                                e.stopPropagation(), unLike(item);
                              }}
                              // onCancel={cancel}
                              okText="确定"
                              cancelText="取消"
                            >
                              <div className="pointer c_red">取消关注</div>
                            </Popconfirm>
                          </div>,
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src={item.object.avatar} />}
                          title={
                            <Link
                              href={`/lecturer/${item.object._id}`}
                            >
                              {item.object.nickname}
                            </Link>
                          }
                          description={setSubStr(
                            item.object.introduc || '',
                            150,
                          )}
                        />
                      </Card>
                    </div>
                  ))}
                </div>
                <Pagination
                  current={pagination.current}
                  total={pagination.total || 9}
                  onChange={onChangePage}
                  defaultPageSize={pagination.pageSize}
                  style={{ textAlign: 'center', margin: '20px 0' }}
                />
              </div>
            </div>
          </div>
        </div>
      </PcLayout>
    );
}
