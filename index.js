#!/usr/bin/env node

const cal = require('./cal');

// 收集写到 stdout 的文字
const lines = [];

main();

function main() {
    const [year, week, days] = cal(new Date());

    // 输出年月
    writeLn(' '.repeat(6) + year.join(' '));

    // 输出周
    writeLn(week.join(' '));

    // 输出日期
    for (const [i, day] of days.entries()) {
        write(day);
        if ((i + 1) % 7 === 0) {
            // 每输出完一周，就换到下一行
            writeLn();
        }
    }
    writeLn();
    writeEnd();
}

function write(text) {
    lines.push(text);
}

function writeLn(text = '') {
    write(`${text}\n`);
}

function writeEnd() {
    console.log(lines.join(''));
}
