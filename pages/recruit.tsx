import PcLayout from '@/components/layouts/PcLayout';
import AccountLeft from '@/components/account_left/AccountLeft';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Recuit() {
    const router = useRouter()

    return (
        <PcLayout
            showHeader={true}
            customSeo={null}
            showFooter={true}
            isBlack={false}
        >
            <div className="info_page recruit_page">
                <div className="container">
                    <AccountLeft showPerCenter={false} showRecruit={true} />
                    <div className="person_content">
                        <div className="person_title">本平台讲师招募</div>
                        <div className="person_info flex_1">
                            <div className="clearfix">
                                <div>
                                    <p>
                                        本平台是专注于在线教育内容提供的平台，致力于为用户提供优质的在线教育内容。
                                        为适应平台的发展和给用户提供更多高质量的内容，
                                        我们期待有理想、有追求的您能加入我们一起通过互联网无边界的方式进行传播服务到更多努力求知的用户!
                                        <br />
                                        <br />
                                        讲师权益
                                        <br />
                                        ·
                                        1、能力变现：技术能力的兑现且收益可持续
                                        <br />
                                        · 2、精湛加密：保护你的知识版权
                                        <br />
                                        ·
                                        3、品牌塑造：帮你打造在线教育领域个人品牌
                                        <br />
                                        <br />
                                        申请条件
                                        <br />
                                        ·
                                        1、教育行业内2年以上从业经验，自身有丰富的教学知识体系及经验
                                        <br />
                                        · 2、拥有过讲师、培训讲师经历
                                        <br />
                                        ·
                                        3、喜欢在行业内分享心得（写博客，逛论坛等）
                                        <br />· 4、参与过知名教育行业峰会讲师
                                    </p>
                                </div>
                                <p></p>
                            </div>
                            <div>
                                <Link href="/apply">
                                    <a>
                                        <div
                                            className="apply_btn"
                                            // onClick={() =>
                                            //     router.push('/apply')
                                            // }
                                        >
                                            申请成为讲师
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PcLayout>
    );
}
