// 将时间戳转换成日期格式
export const  timestampToTime=(timestamp: any)=> {
  if (!timestamp) {
    return '-';
  }
  const str = `${timestamp}`;
  const date = new Date(str.length === 10 ? timestamp * 1000 : timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = `${date.getFullYear()}-`;
  const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const D = `${date.getDate()} `;
  // const h = date.getHours().leng<2?date.getHours() + ':';
  // const h =
  //     (date.getHours().toString().length < 2
  //         ? '0' + date.getHours() + ':'
  //         : date.getHours()) + ':';
  // const m =
  //     (date.getMinutes().toString().length < 2
  //         ? '0' + date.getMinutes() + ':'
  //         : date.getMinutes()) + ':';
  // const s =
  //     date.getSeconds().toString().length < 2
  //         ? '0' + date.getSeconds()
  //         : date.getSeconds();
  const h = addZero(date.getHours());
  const m = addZero(date.getMinutes());
  const s = addZero(date.getSeconds());
  return `${Y + M + D + h}:${m}:${s}`;
}
function addZero(t) {
  if (t.toString().length < 2) {
    return `0${t}`;
  }
  return t;
}

// 世界时间转换成北京时间
export const  utc2beijing=(utc_datetime: any)=> {
  if (!utc_datetime) {
    return '';
  }
  const a = new Date(utc_datetime).getTime();
  const beijing_datetime = timestampToTime(new Date(a));
  return beijing_datetime;
}

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
