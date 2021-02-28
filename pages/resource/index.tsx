import PcLayout from '@/components/layouts/PcLayout';
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Card, Avatar, Pagination, Affix } from 'antd';
import {
    UserOutlined,
} from '@ant-design/icons';
import { _get_documents } from '@/server/documents';
import  DocumentItem  from '@/components/documents/documents';
import RecommendDoc from '@/components/documents/recommendDoc';


const Resource = ({ router }) => {
  const [top, setTop] = useState(90);
  //文档
  const [documentList, setDocumentList] = useState([]);
 const [pagination, setPagination] = useState({
   current: 1,
   pageSize: 10,
   //   total: courseListCount,
 });
    
    const getDocumentsList = async (nowpaginatio={}) => {
      const query = {
        where: {},
        limit: nowpaginatio.pageSize || pagination.pageSize,
        page: nowpaginatio.current || pagination.current,
      };
      await _get_documents(JSON.stringify(query)).then((data) => {
        if (data.status === 200) {
          const n_pagination = {
            ...pagination,
            current: data.data.page,
            total: data.data.total,
          };
          setPagination({ ...n_pagination });
          setDocumentList(data.data.data);
        }
      });
    };

    useEffect(() => {
    getDocumentsList();
    }, []);
  const [current_categoryno1, setCurrentCategoryno1] = useState(0);
  const [current_categoryno2, setCurrentCategoryno2] = useState(0);
  const [current_categoryno3, setCurrentCategoryno3] = useState(0);
  const [current_four, setCurrentFour] = useState(0);
  const categoryno1 = [
    {
      name: '全部',
      index: 0,
    },
    {
      name: '云计算/大数据',
      index: 1,
    },
    {
      name: '产品/策划/运营',
      index: 2,
    },
    {
      name: '前端/后台/框架',
      index: 3,
    },
  ];
  const categoryno2 = [
    {
      name: '全部',
      index: 0,
    },
    {
      name: '产品',
      index: 1,
    },
    {
      name: '策划',
      index: 2,
    },
    {
      name: '运营',
      index: 3,
    },
  ];
  const categoryno3 = [
    {
      name: '全部',
      index: 0,
    },
    {
      name: '测试1',
      index: 1,
    },
    {
      name: '测试2',
      index: 2,
    },
    {
      name: '测试3',
      index: 3,
    },
  ];
  const four = [
    {
      name: '全部',
      index: 0,
    },
    {
      name: '免费',
      index: 1,
    },
    {
      name: 'SVIP免费',
      index: 2,
    },
    {
      name: '付费',
      index: 3,
    },
  ];

  const changeCat1 = (index: number) => {
    setCurrentCategoryno1(index);
  };
  const changeCat2 = (index: number) => {
    setCurrentCategoryno2(index);
  };
  const changeCat3 = (index: number) => {
    setCurrentCategoryno3(index);
  };
  const changeFour = (index: number) => {
    setCurrentFour(index);
  };

  //精品推荐
  const boutique_reco = [
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201507/22/ff2e/55af4bf0d4eed.jpg',
      name: 'Android 开发实战：微博之发微博页面图片处理',
      isfree: true,
      price: '',
      vip_price: '',
      avatar: '',
      username: '张三',
      leanrs: 135,
      desc:
        ' 通过本课程的学习，您将学会： 1.如何配置和连接到 Amazon Aurora Serverless。 创建并配置新的 Aurora Serverless 数据库集',
    },
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201507/17/94b9/55a86c6be0ac1.jpg',
      name: 'Cocos2d-x CURL 和 HttpClient',
      isfree: true,
      price: '',
      vip_price: '',
      avatar: '',
      username: '张三',
      leanrs: 135,
      sale_tag: 10,
      live_time: '2020-09-09 22:31:00',
      desc:
        '本课程主要向大家讲解Android Studio的使用，从基本的安装配置，到进阶的插件安装、代码模板设计等。帮助大家通过熟练使用Android Studio提高自己的开发效率',
    },
    {
      img_url:
        'https://static-dev.roncoo.com/course/gLlVYUikWX4PXn7vw1NYwgcLQRhe4ctl.jpg',
      name: 'Mysql入门到精通',
      isfree: true,
      price: '',
      vip_price: '',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username: '张三',
      leanrs: 135,
      desc:
        '本课程是为初学者准备的版本控制工具课程，主要从本地操作、远程操作、图形工具化三个方面，带领你学会现今流行的 Git/GitHub 工具的使用。',
    },
    {
      img_url:
        'https://static-dev.roncoo.com/course/ZtTftX23I4jJ7QsMubVrVm65srIGgsRS.jpg',
      name: '大数据',
      isfree: false,
      price: 100,
      vip_price: 59.9,
      avatar: '',
      username: '李四',
      leanrs: 135,
      desc:
        '网络编程是Android开发中核心功能模块，涉及的知识较多。本门课程由Java到Android，对网络编程进行全方面讲解。',
    },
    {
      img_url:
        'https://static-dev.roncoo.com/course/8ad63395b81f41c58cbae578019a40da.jpg',
      name: 'Java SpringBoot',
      isfree: true,
      price: '',
      vip_price: '',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username: '王五',
      leanrs: 135,
      desc:
        '本课程介绍3d开发中常用的模型文件、模型文件格式，以及Three.js中对模型的解析方式',
    },
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201507/30/cf6e/55b98d818c820.jpg',
      name: 'React 组件性能调优',
      isfree: false,
      price: 100,
      vip_price: 59.9,
      avatar: '',
      username: '张三',
      leanrs: 135,
      desc:
        '本课程主要介绍点击拾取的基本原理，以及如何使用Three.js提供的RayCaster来做相交处理。',
    },
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201507/22/8f57/55aeffca72c34.jpg',
      name: 'css 兼容',
      isfree: false,
      price: 100,
      vip_price: 59.9,
      avatar: '',
      username: '李四',
      leanrs: 135,
      desc:
        '本课程主要讲解 3D 图形学入门基础知识，内容包括坐标系、点、线和面，转换的通俗概念以及矩阵、纹理和着色器等。',
    },
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201609/30/3910/57ee150c63c28.jpg',
      name: '如何一小时快速搭建一个应用号',
      isfree: true,
      price: '',
      vip_price: '',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      username: '王五',
      leanrs: 135,
      desc:
        '本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧',
    },
    {
      img_url:
        'https://a1.jikexueyuan.com/home/201811/28/4fb5/5bfe769f8b7e1.png',
      name: '光线投射',
      isfree: false,
      price: 100,
      vip_price: 59.9,
      avatar: '',
      username: '张三',
      leanrs: 135,
      desc:
        '本节课我们来了解Three.js中提供的几个相机控制类，每个类都有一套独立的控制算法，我们以OrbitControls为例详细讲解该控',
    },
  ];

   const onChangePage = (page) => {
     const n_pagination = { ...pagination, current: page };

     getDocumentsList(n_pagination);
   };

  return (
    <PcLayout
      showHeader={true}
      customSeo={null}
      showFooter={true}
      isBlack={false}
    >
      <div className="resource_page">
        <div className="header_list">
          <div className="list_content">
            <ul className="content_ul">
              {categoryno1.map((item) => (
                <li
                  className={current_categoryno1 === item.index ? 'now' : ''}
                  onClick={() => {
                    changeCat1(item.index);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="list_content">
            <ul className="content_ul">
              {categoryno2.map((item) => (
                <li
                  className={current_categoryno2 === item.index ? 'now' : ''}
                  onClick={() => {
                    changeCat2(item.index);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="list_content">
            <ul className="content_ul">
              {categoryno3.map((item) => (
                <li
                  className={current_categoryno3 === item.index ? 'now' : ''}
                  onClick={() => {
                    changeCat3(item.index);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="list_content" style={{ borderBottom: 'none' }}>
            <ul className="content_ul">
              {four.map((item) => (
                <li
                  className={current_four === item.index ? 'now' : ''}
                  onClick={() => {
                    changeFour(item.index);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="course_content">
          <div className="index_content_zone flex">
            <RecommendDoc top={top}/>
            <div className="flex_1" style={{ marginLeft: 15 }}>
              {documentList.map((item) => (
                <DocumentItem  item={item} />
              ))}

              <Pagination
                defaultCurrent={1}
                total={pagination.total || 10}
                onChange={onChangePage}
                defaultPageSize={pagination.pageSize}
                style={{ textAlign: 'center', marginTop: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
    </PcLayout>
  );
};
export default withRouter(Resource);