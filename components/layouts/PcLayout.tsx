import MyHead from "../header/MyHead";
import MyFooter from "../footer/MyFooter";
import styles from "../../styles/Home.module.css";
import { ModelContextComp } from "../../models/main";
import { BackTop } from 'antd';
import RightWindow from '../rightWindow/RightWindow'
import { HeaderIndexer } from '../../models/main_unstated';

export default function PcLayout({
    children,
    showFooter, //底部
    isBlack, //底部颜色
}: // showFunc,   //右侧 功能
// showMini,   //小程序
// showService //客服
{
    children: React.ReactNode;
    showFooter: boolean;
    isBlack:boolean;
    // showFunc: boolean;
    // showMini: boolean;
    // showService: boolean;
}) {
    return (
        <HeaderIndexer.Provider initialState={0}>
            <ModelContextComp>
                <div className={styles.container}>
                    <MyHead isLogin={false}></MyHead>

                    <main>{children}</main>

                    <RightWindow
                        showFunc={true}
                        showMini={true}
                        showService={true}
                    ></RightWindow>

                    {showFooter ? 
                        //展示帮助中心...   是否为黑底
                        
                            isBlack?
                                (
                                <MyFooter
                                    props={{ showMoreFooter: true, isBlack: true }}
                                />
                            )
                        :
                            (
                                <MyFooter
                                    props={{ showMoreFooter: false, isBlack: true }}
                                />
                            )
                        
                        
                    : (
                        <MyFooter
                            props={{ showMoreFooter: false, isBlack: false }}
                        />
                    )}
                </div>
            </ModelContextComp>
        </HeaderIndexer.Provider>
    );
}
