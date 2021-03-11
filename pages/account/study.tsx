import PcLayout from '@/components/layouts/PcLayout';
import { Modal, Card, Avatar, Pagination, Popconfirm } from 'antd';
import AccountLeft from '@/components/account_left/AccountLeft';
import { DatabaseOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { _get_studys_list, _post_studys_toogle } from '@/server/studys';
import { setSubStr } from '@/utils/utils';
import './study.less';
const { confirm } = Modal;
const { Meta } = Card;

const initPaging = {
  current: 1,
  pageSize: 9,
  //   total: courseListCount,
};
export default function Study() {
const [pagination, setPagination] = useState(initPaging);
  const [studyList, setStudyList] = useState([]);
  
  const getAttentionLits = async (nowpaginatio = {}) => {
    const query = {
      where: {
        user: JSON.parse(localStorage.getItem('userInfo'))['_id'],
        type: 'Course',
        // name: 'LIKE',
      },
      limit: nowpaginatio.pageSize || pagination.pageSize,
      page: nowpaginatio.current || pagination.current,
    };
    await _get_studys_list(JSON.stringify(query)).then((data) => {
      console.log('获取学习的列表', data);
      if (data.status === 200) {
        setStudyList(data.data.data);
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
  const actionToogle = async (item: any) => {
    const query = {
      type: 'User',
      name: 'LIKE',
      object: item.object._id,
    };
    const params = {
      query: JSON.stringify(query),
    };
    await _post_studys_toogle(params).then((data) => {
      getAttentionLits();
      //   childRef.current.getActionList();
    });
  };
  const unLike = (item) => {
    console.log('取消关注');
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
          <div className="main_box" style={{ paddingBottom: 20 }}>
            <ul className="tabs  relative">
              <a className="tab on">我的学习</a>
            </ul>

            {studyList.length === 0 && (
              <div className="notdata">
                <DatabaseOutlined style={{ marginRight: 20 }} />
                暂时没有数据
              </div>
            )}
            <div>
              <div className="list_items">
                {studyList.map((item) => (
                  <div className="list_item" key={item._id}>
                    <Card
                      hoverable
                      style={{ width: 300 }}
                      cover={<img alt="example" src={item.object.cover} />}
                      actions={[
                        <div>
                          <Popconfirm
                            title="确定要取消学习吗?"
                            onConfirm={(e) => unLike(item)}
                            okText="确定"
                            cancelText="取消"
                          >
                            <div className="pointer c_red">取消学习</div>
                          </Popconfirm>
                        </div>,
                        <div className="pointer c_green">继续学习</div>,
                      ]}
                    >
                      <Meta
                        title={item.object.name}
                        description={setSubStr(item.object.introduc || '', 150)}
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
