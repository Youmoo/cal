#!/usr/bin/env node

const cal = require('./cal');

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
}

function write(text) {
    process.stdout.write(text);
}

function writeLn(text = '') {
    write(`${text}\n`);
}
