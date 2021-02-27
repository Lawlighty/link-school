export const getWeekDate = () => {
    var now = new Date();
    var day = now.getDay();
    var weeks = new Array(
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
    );
    var week = weeks[day];
    return week;
}

export const getTagColor = (tag) => {
    let color = 'red';
    if (tag.length <= 4) {
        color = 'magenta';
    } else if (tag.length <= 6) {
        color = 'green';
    } else if (tag.length <= 8) {
        color = 'geekblue';
    }
    return color;
};

export const getColorByStrLength=(str: string)=> {
  const color =
    str.length <= 4 ? 'geekblue' : str.length <= 6 ? 'green' : 'volcano';
  return color;
}

// 字符串截取
export const setSubStr=(str: string, length: number = 50)=> {
  if (!str) {
    return '';
  }
  if (str.length <= length) {
    return str;
  }
  return `${str.substring(0, length)}...`;
}

// 构造分类树
export const getBannerSubItems = (data = []) => {

    let subItems = [];
    const idMapping = data.reduce((acc, el, i) => {
      acc[el._id] = i;
      return acc;
    }, {});
    data.forEach((el) => {
      // 判断根节点
      if (!el.parentid || !data[idMapping[el.parentid]]) {// 有parentid 但是父级已经不存在
        subItems.push(el)
        return;
      }
      // 用映射表找到父元素
     const parentEl = data[idMapping[el.parentid]];
      // 把当前元素添加到父元素的`children`数组中
      parentEl.children = [...(parentEl.children || []), el];
    });
    const list = subItems.slice(0,7);
    return list;
};
