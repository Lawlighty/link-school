import PcLayout from '@/components/layouts/PcLayout';
import {  Modal } from 'antd';
import AccountLeft from '@/components/account_left/AccountLeft';
import {  DatabaseOutlined } from '@ant-design/icons';

const { confirm } = Modal;
export default function Attention() {
    const setAllRead = () => {
        console.log('确认已读');
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
                    <div className="main_box">
                        <ul className="tabs  relative">
                            <a className="tab on">我的关注</a>
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
