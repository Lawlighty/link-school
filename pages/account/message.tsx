import PcLayout from '@/components/layouts/PcLayout';
import { Button,  Modal } from 'antd';
import AccountLeft from '@/components/account_left/AccountLeft';
import { ExclamationCircleOutlined, DatabaseOutlined } from '@ant-design/icons';


const { confirm } = Modal;
export default function Message() {
  const setAllRead = () => {
    console.log('确认已读')
  }
  
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
                  <div className="main_box">
                      <ul className="tabs  relative">
                          <a className="tab on">系统通知</a>
                          <Button
                              className="readed_btn"
                              onClick={() => {
                                  confirm({
                                      title: '确认设置所有信息都已读吗?',
                                      icon: <ExclamationCircleOutlined />,
                                      okText: '确认',
                                      cancelText: '取消',
                                      onOk() {
                                          setAllRead();
                                      },
                                      onCancel() {},
                                  });
                              }}
                          >
                              一键设置已读
                          </Button>
                      </ul>

                      <div className="notdata">
                          <DatabaseOutlined style={{ marginRight: 20 }} />
                          暂时没有数据
                      </div>
                  </div>
              </div>
          </div>
      </PcLayout>
  );
}
