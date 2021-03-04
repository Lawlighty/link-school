import { useState, useEffect, useImperativeHandle } from 'react';
import { useRouter } from 'next/router';
import {
  MessageOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
// import { Empty } from 'antd';
import { _get_all_categorys, _get_categorys } from '@/server/categorys';
import { getBannerSubItems, getChidlren } from '@/utils/utils';

const initcurrentTags = [{ index: 0, key: 'all' }];
export default function CategoryMenu({
    changeFunction
}) {
  // 分类树
  const [categoryList, setCategoryList] = useState([]);
  const [currentTags, setCurrentTags] = useState(initcurrentTags);
  const [currentPriceTags, setCurrentPriceTags] = useState('allprice');
  // 获取分类
  const getCategoryList = async () => {
    await _get_all_categorys().then((data) => {
      if (data.status === 200) {
        setCategoryList(getBannerSubItems(data.data));
      }
    });
  };
  // 获取子分类
  const getCategoryChildList = async (query: string) => {
   const res =  await _get_categorys(query).then(data => {
      return data;
   });
    return res;
  };
  const four = [
    {
      name: '全部',
      index: 'allprice',
    },
    {
      name: '免费',
      index: 'allfreeprice',
    },
    {
      name: 'SVIP免费',
      index: 'vipfreeprice',
    },
    {
      name: '付费',
      index: 'price',
    },
  ];
  useEffect(() => {
    getCategoryList();
  }, []);
  const getChildList= (result, id) => {
    let list = [];
    let res = result.data;
    res.map((item) => {
      list.push(item._id);
    });
    list.push(id);
    return list;
  };
  // 构造查询语句
  const getQueryInfo = async (nowtag, value = '') => {
      console.log('nowtag==>', nowtag);
      let queryInfo = {};
      if (value) {
        if (value === 'allprice') {
          queryInfo = {};
        } else if (value === 'allfreeprice') {
          queryInfo['price'] = 0;
        } else if (value === 'vipfreeprice') {
          queryInfo['price'] = 0;
        } else if (value === 'price') {
          queryInfo['sprice'] = { $gt: 0 };
        }
    }
    // 1.是所有 -->获取上级和上级下的所有子标签
    // 2. 是专门-->获取 他和他的下级的子标签
    if (nowtag[nowtag.length - 1].key !== 'all') {
      // 2. 是专门-->获取 他和他的下级的子标签
      const q = { parentid: nowtag[nowtag.length - 1].key };
      let result = await getCategoryChildList(JSON.stringify(q));
      console.log('2. 是专门-->获取 他和他的下级的子标签', result);
      queryInfo['category'] = {
        $in: getChildList(result, nowtag[nowtag.length - 1].key),
      };
      changeFunction(queryInfo, false);
    }
      else {
        // 是所有// 1.是所有 -->获取上级和上级下的所有子标签
        // 第一层--没有上级-->直接查询所有
        if (nowtag.length === 1) {
          console.log('直接转发的queryInfo', queryInfo);
         changeFunction(queryInfo, false);
        } else {
          // 有上级, 获取上级的id 查询子集
          const q = { parentid: nowtag[nowtag.length - 2].key };
           let result = await getCategoryChildList(JSON.stringify(q));
            console.log('有上级, 获取上级的id 查询子集', result);
           queryInfo['category'] = {
             $in: getChildList(result, nowtag[nowtag.length - 2].key),
          };
          changeFunction(queryInfo, false);
        }
      }
    };
  const changeCurrentTags = (index, value) => {
    let nowtag = currentTags;
    if (index < nowtag.length) {
      nowtag = nowtag.slice(0, index);
    }
    nowtag.splice(index, 1, value);
    if (index === 0 && value.key === 'all') {
      nowtag = initcurrentTags;
    } else if (value.key === 'all') {
      nowtag = nowtag.slice(0, index);
    }
    setCurrentTags([...nowtag]);
    getQueryInfo(nowtag);
    // const queryInfo = await getQueryInfo(nowtag);
    // changeFunction(queryInfo,false);
  };
  const changeCurrentPriceTags = (value) => {
    setCurrentPriceTags(value);
    getQueryInfo(currentTags, value);
      // const queryInfo =await getQueryInfo(currentTags, value);
      // changeFunction(queryInfo);
  };

  const MenuList = ({ i, list }: { i: number; list: [] }) => {
    return (
      <>
        {list && list.length > 0 && (
          <div className="list_content">
            <ul className="content_ul">
              <li
                key="all"
                className={
                  !currentTags[i + 1] || currentTags[i + 1].key === 'all'
                    ? 'now'
                    : ''
                }
                onClick={() => {
                  changeCurrentTags(i + 1, { index: 0, key: 'all' });
                }}
              >
                全部
              </li>
              {list.map((item: any, index) => (
                <li
                  key={item._id}
                  className={
                    currentTags[i + 1] && currentTags[i + 1].key === item._id
                      ? 'now'
                      : ''
                  }
                  onClick={() => {
                    changeCurrentTags(i + 1, { index, key: item._id });
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };

  const getLits = (tag: number) => {
    switch (tag) {
      case 0:
        return categoryList[currentTags[0].index].children;
      case 1:
        return categoryList[currentTags[0].index].children[currentTags[1].index]
          .children;
      case 2:
        return categoryList[currentTags[0].index].children[currentTags[1].index]
          .children[currentTags[2].index].children;
      case 3:
        return categoryList[currentTags[0].index].children[currentTags[1].index]
          .children[currentTags[2].index].children[currentTags[3].index]
          .children;
      case 4:
        return categoryList[currentTags[0].index].children[currentTags[1].index]
          .children[currentTags[2].index].children[currentTags[3].index]
          .children[currentTags[4].index].children;
      case 5:
        return categoryList[currentTags[0].index].children[currentTags[1].index]
          .children[currentTags[2].index].children[currentTags[3].index]
          .children[currentTags[4].index].children[currentTags[5].index]
          .children;
      case 6:
        return categoryList[currentTags[0].index].children[currentTags[1].index]
          .children[currentTags[2].index].children[currentTags[3].index]
          .children[currentTags[4].index].children[currentTags[5].index]
          .children[currentTags[6].index].children;
    }
  };

  return (
    <>
      <div className="header_list">
        <div className="list_content">
          <ul className="content_ul">
            <li
              key="all"
              className={
                !currentTags[0] || currentTags[0].key === 'all' ? 'now' : ''
              }
              onClick={() => {
                changeCurrentTags(0, { index: 0, key: 'all' });
              }}
            >
              全部
            </li>
            {categoryList.map((item, index) => (
              <li
                key={item._id}
                className={currentTags[0].key === item._id ? 'now' : ''}
                onClick={() => {
                  changeCurrentTags(0, { index, key: item._id });
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        {currentTags.map((item, tag) => {
          if (tag === 0 && item.key == 'all') {
            return null;
          } else {
            return <MenuList i={tag} list={getLits(tag)} />;
          }
        })}
        <div className="list_content" style={{ borderBottom: 'none' }}>
          <ul className="content_ul">
            {four.map((item) => (
              <li
                key={item.index}
                className={currentPriceTags === item.index ? 'now' : ''}
                onClick={() => {
                  changeCurrentPriceTags(item.index);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
