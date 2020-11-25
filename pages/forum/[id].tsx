import PcLayout from '../../components/layouts/PcLayout';
import { Input, Pagination, Affix, Modal } from 'antd';
import { useState, useEffect } from 'react';
import {
    EyeOutlined,
    CommentOutlined,
    MessageOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import { withRouter } from 'next/router';
import { getWeekDate } from '../../utils/utils';
import AccountState from '../../store/accountinfo';
import Comment from '../../components/comment/Comment';


const { confirm } = Modal;
const Forum_Post = ({ router }) => { 
    const accountState = AccountState.useContainer();
    const [top, setTop] = useState(90);
    

    const [topComm, setTopComm] = useState('');

    const [currentComIndex, setcurrentComIndex] = useState(-1);

    const onChangePage = (page) => {
        console.log('page', page);
    };

    return (
        <PcLayout
            showHeader={true}
            customSeo={null}
            showFooter={true}
            isBlack={false}
        >
            <div className="forum_page">
                <div className="forum_body flex">
                    <div>
                        <div
                            className="flex_1 forum_div"
                            style={{ padding: '10px 20px' }}
                        >
                            <div className="post_title">
                                <div className="font24 font_b">
                                    Java学习的正确打开方式
                                </div>
                                <div className="c_999 mgt20 pab10 bor_bot_f0">
                                    2020-10-26 19:00:28
                                    <EyeOutlined
                                        style={{
                                            margin: '0 10px 0 20px',
                                        }}
                                    />
                                    53
                                    <CommentOutlined
                                        style={{
                                            margin: '0 10px 0 20px',
                                        }}
                                    />
                                    33
                                </div>
                            </div>

                            <div className="post_main_body">
                                在博主认为，对于入门级学习java的最佳学习方法莫过于视频+博客+书籍+总结，前三者博主将淋漓尽致地挥毫于这篇博客文章中，至于总结在于个人
                                ，实际上越到后面你会发现学习的最好方式就是阅读参考官方文档其次就是国内的书籍，博客次之，这又是一个层次了，这里暂时不提后面再谈。博主将为各位入门java保驾护航，各位只管冲鸭！！！上天是公平的，只要不辜负时间，时间自然不会辜负你。
                                何谓学习？博主所理解的学习，它是一个过程，是一个不断累积、不断沉淀、不断总结、善于传达自己的个人见解以及乐于分享的过程。
                                1、Java基础教学视频 Java零基础教程视频（适合Java
                                0基础，Java初学入门）【推荐】
                                JavaSE进阶入门项目实战视频教程_动力节点【推荐】
                                毕向东Java基础视频教程25天【相对老旧，但也是金典啊！】
                                说句实在的，博主当年大一下学期就是看的毕老师Java基础25天的视频，可谓金典啊！现在看来算是比较老旧了，
                                可谓画质感人，若不是老毕的风趣，博主有种怎会坚持看完说句实在的，主要是当时没有学习资源才莫得办法，相比之下其余二者都是比较新颖的视频教程了，都是近一两年的没有质量博主也不会推荐鸭，对吧这个时候就会有童鞋要说了，怎么都是bilibili上的鸭？
                                博主认为B站可谓是最大的学习网站了最重要的是免费免费免费！！！
                                是的！加油学吧！上天是公平的，只要不辜负时间，时间自然不会辜负你。
                                2、Java基础博客文章目录
                                这些是博主近半个月重新总结的一些javase基础方面的博客，当然，学习总结！学习后才有的总结！建议哪里不懂点哪里进行参考…
                                在博主认为，对于入门级学习java的最佳学习方法莫过于视频+博客+书籍+总结，前三者博主将淋漓尽致地挥毫于这篇博客文章中，至于总结在于个人
                                ，实际上越到后面你会发现学习的最好方式就是阅读参考官方文档其次就是国内的书籍，博客次之，这又是一个层次了，这里暂时不提后面再谈。博主将为各位入门java保驾护航，各位只管冲鸭！！！上天是公平的，只要不辜负时间，时间自然不会辜负你。
                                何谓学习？博主所理解的学习，它是一个过程，是一个不断累积、不断沉淀、不断总结、善于传达自己的个人见解以及乐于分享的过程。
                                1、Java基础教学视频 Java零基础教程视频（适合Java
                                0基础，Java初学入门）【推荐】
                                JavaSE进阶入门项目实战视频教程_动力节点【推荐】
                                毕向东Java基础视频教程25天【相对老旧，但也是金典啊！】
                                说句实在的，博主当年大一下学期就是看的毕老师Java基础25天的视频，可谓金典啊！现在看来算是比较老旧了，
                                可谓画质感人，若不是老毕的风趣，博主有种怎会坚持看完说句实在的，主要是当时没有学习资源才莫得办法，相比之下其余二者都是比较新颖的视频教程了，都是近一两年的没有质量博主也不会推荐鸭，对吧这个时候就会有童鞋要说了，怎么都是bilibili上的鸭？
                                博主认为B站可谓是最大的学习网站了最重要的是免费免费免费！！！
                                是的！加油学吧！上天是公平的，只要不辜负时间，时间自然不会辜负你。
                                2、Java基础博客文章目录
                                这些是博主近半个月重新总结的一些javase基础方面的博客，当然，学习总结！学习后才有的总结！建
                                在博主认为，对于入门级学习java的最佳学习方法莫过于视频+博客+书籍+总结，前三者博主将淋漓尽致地挥毫于这篇博客文章中，至于总结在于个人
                                ，实际上越到后面你会发现学习的最好方式就是阅读参考官方文档其次就是国内的书籍，博客次之，这又是一个层次了，这里暂时不提后面再谈。博主将为各位入门java保驾护航，各位只管冲鸭！！！上天是公平的，只要不辜负时间，时间自然不会辜负你。
                                何谓学习？博主所理解的学习，它是一个过程，是一个不断累积、不断沉淀、不断总结、善于传达自己的个人见解以及乐于分享的过程。
                                1、Java基础教学视频 Java零基础教程视频（适合Java
                                0基础，Java初学入门）【推荐】
                                JavaSE进阶入门项目实战视频教程_动力节点【推荐】
                                毕向东Java基础视频教程25天【相对老旧，但也是金典啊！】
                                说句实在的，博主当年大一下学期就是看的毕老师Java基础25天的视频，可谓金典啊！现在看来算是比较老旧了，
                                可谓画质感人，若不是老毕的风趣，博主有种怎会坚持看完说句实在的，主要是当时没有学习资源才莫得办法，相比之下其余二者都是比较新颖的视频教程了，都是近一两年的没有质量博主也不会推荐鸭，对吧这个时候就会有童鞋要说了，怎么都是bilibili上的鸭？
                                博主认为B站可谓是最大的学习网站了最重要的是免费免费免费！！！
                                是的！加油学吧！上天是公平的，只要不辜负时间，时间自然不会辜负你。
                                2、Java基础博客文章目录
                                这些是博主近半个月重新总结的一些javase基础方面的博客，当然，学习总结！学习后才有的总结！建
                                在博主认为，对于入门级学习java的最佳学习方法莫过于视频+博客+书籍+总结，前三者博主将淋漓尽致地挥毫于这篇博客文章中，至于总结在于个人
                                ，实际上越到后面你会发现学习的最好方式就是阅读参考官方文档其次就是国内的书籍，博客次之，这又是一个层次了，这里暂时不提后面再谈。博主将为各位入门java保驾护航，各位只管冲鸭！！！上天是公平的，只要不辜负时间，时间自然不会辜负你。
                                何谓学习？博主所理解的学习，它是一个过程，是一个不断累积、不断沉淀、不断总结、善于传达自己的个人见解以及乐于分享的过程。
                                1、Java基础教学视频 Java零基础教程视频（适合Java
                                0基础，Java初学入门）【推荐】
                                JavaSE进阶入门项目实战视频教程_动力节点【推荐】
                                毕向东Java基础视频教程25天【相对老旧，但也是金典啊！】
                                说句实在的，博主当年大一下学期就是看的毕老师Java基础25天的视频，可谓金典啊！现在看来算是比较老旧了，
                                可谓画质感人，若不是老毕的风趣，博主有种怎会坚持看完说句实在的，主要是当时没有学习资源才莫得办法，相比之下其余二者都是比较新颖的视频教程了，都是近一两年的没有质量博主也不会推荐鸭，对吧这个时候就会有童鞋要说了，怎么都是bilibili上的鸭？
                                博主认为B站可谓是最大的学习网站了最重要的是免费免费免费！！！
                                是的！加油学吧！上天是公平的，只要不辜负时间，时间自然不会辜负你。
                                2、Java基础博客文章目录
                                这些是博主近半个月重新总结的一些javase基础方面的博客，当然，学习总结！学习后才有的总结！建
                            </div>
                        </div>

                        <div className="comm_box">
                            <Comment />
                          
                        </div>
                    </div>

                    <div className="forum_left_div">
                        <Affix offsetTop={top}>
                            <div
                                className="forum_left_item flex"
                                style={{
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >
                                <div className="user_img_div">
                                    <img
                                        src="https://static-dev.roncoo.com/course/0948d9f30817454ea5386118fe1ac20a.jpg"
                                        alt=""
                                        className="user_img"
                                    />
                                </div>
                                <div className="flex_1">
                                    <div className="poster_tag">
                                        <img
                                            src="/imgs/forum/louzhu.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="poster_div">
                                        <div
                                            className="poster_name"
                                            style={{
                                                paddingBottom: '10px',
                                                color: '#333',
                                            }}
                                        >
                                            爷傲奈我何
                                        </div>
                                        <div className="poster_info">
                                            <div className="posts">
                                                帖子:{' '}
                                                <span className="c_red">
                                                    10
                                                </span>
                                            </div>
                                            <div style={{ margin: '0 10px' }}>
                                                |
                                            </div>
                                            <div className="serum">
                                                精华:{' '}
                                                <span className="c_red">1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="forum_left_item">
                                <div className="forum_left_title">公告</div>
                                <div className="forum_left_list">
                                    <ul>
                                        <li
                                            onClick={() => {
                                                router.push('/forum/aa');
                                            }}
                                        >
                                            极客教育开启新时代
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/forum/aa');
                                            }}
                                        >
                                            彻底保护你的iPhone隐私，教你开启Apple
                                            ID两步验证
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/forum/aa');
                                            }}
                                        >
                                            Amazon Polly 上手实验
                                        </li>
                                        <li
                                            onClick={() => {
                                                router.push('/forum/aa');
                                            }}
                                        >
                                            揭秘你不知道的CloudFront用法
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Affix>
                    </div>
                </div>
            </div>
        </PcLayout>
    );
}
export default withRouter(Forum_Post);