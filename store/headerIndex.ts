import { useState } from 'react';
import { createContainer } from 'unstated-next';

const headerIndex = (initialState = 0) => {
    //默认首页
    // 0-- > 首页
    // 1-- >视频
    // 2-- >文档
    // 3-- >论坛
    // 10-- >其他
    const [headerIndex, setHeaderIndex] = useState(initialState);
    const changeCurrentHeaderIndex = (target: number) => { 
        console.log('changeCurrentHeader==>', target);
        setHeaderIndex(target);
    }
    return { headerIndex, changeCurrentHeaderIndex };
};

const HeaderIndexer = createContainer(headerIndex);
export default HeaderIndexer;
