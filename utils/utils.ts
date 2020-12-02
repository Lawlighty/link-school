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

