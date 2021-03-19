const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
const dayOfWeek = ['日', '一', '二', '三', '四', '五', '六'];

const RED = '\u001b[0;31m'; // color start
const NC = '\u001b[0m'; // color end

/**
 * 生成日历数据
 * @param d 哪天
 */
function cal(d = new Date()) {
    // 几月
    const m = d.getMonth();
    // 几号
    const date = d.getDate();

    // 当月最后一天
    d.setMonth(m + 1, 0);
    // 最大多少天
    const maxDays = d.getDate();

    // 当月第一天
    d.setDate(1);
    // 周几
    const day = d.getDay();

    const rows = [];

    // 第一行，年月
    rows.push([months[m] + '月', d.getFullYear()]);

    // 第二行，周几
    rows.push(dayOfWeek);

    const days = Array.from({length: day + maxDays}, (_, i) => {
        // 是否是周日
        const sunday = i % 7 === 0;
        // 周日的文本占2个字符宽度，其它时间占3个
        const pad = sunday ? 2 : 3;

        if (i < day) {
            return ' '.repeat(pad);
        }
        const text = String(i).padStart(pad, ' ');
        if (i === date) {
            return [RED, text, NC].join('');
        }
        return text;
    });

    rows.push(days);

    return rows;
}

module.exports = cal;
