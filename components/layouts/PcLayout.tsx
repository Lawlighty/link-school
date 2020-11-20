import MyHead from "../header/MyHead";
import MyFooter from "../footer/MyFooter";
import styles from "../../styles/Home.module.css";
import RightWindow from '../rightWindow/RightWindow'
import StateProviders from '../../store';
import AccountState from '../../store/accountinfo';
import { useEffect, useState } from 'react';

export default function PcLayout({
    children,
    showHeader, //头部
    customSeo, //自定义seo
    showFooter, //底部
    isBlack, //底部颜色
}: // showFunc,   //右侧 功能
// showMini,   //小程序
// showService //客服
{
    children: React.ReactNode;
    showHeader: boolean;
    customSeo: any;
    showFooter: boolean;
    isBlack: boolean;
    // showFunc: boolean;
    // showMini: boolean;
    // showService: boolean;
}) {
    const accountState = AccountState.useContainer();

    return (
        <>
            {/* <ModelContextComp> */}
            <div className={styles.container}>
                <MyHead
                    customSeo={customSeo}
                    showHeader={showHeader}
                    isLogin={accountState.account.isLogin}
                ></MyHead>

                <main>{children}</main>

                <RightWindow
                    showFunc={true}
                    showMini={true}
                    showService={true}
                ></RightWindow>

                {showFooter ? (
                    //展示帮助中心...   是否为黑底

                    isBlack ? (
                        <MyFooter
                            props={{ showMoreFooter: true, isBlack: true }}
                        />
                    ) : (
                        <MyFooter
                            props={{ showMoreFooter: false, isBlack: true }}
                        />
                    )
                ) : (
                    <MyFooter
                        props={{ showMoreFooter: false, isBlack: false }}
                    />
                )}
            </div>
            {/* </ModelContextComp> */}
        </>
    );
}
