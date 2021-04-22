# cal

Bash cal cli written in Node.js

Node 写的日历 cli ，见公众号文章：[使用 Node.js 写一个日历 cli](https://mp.weixin.qq.com/s/pWaQXOgHggQIxog0IbJYWw)。

```bash
npx @youmoo/cal
```

## Change Log

### v0.0.5

- 同时支持 Node.js 和 Browser.

### v0.0.6

- 支持 GraalVM native image

```bash

# 将js文件整合为一个
npx browserify index.js -o dist/main.js

# 编译
javac -d dist graalvm/src/Cal.java

# 生成 native image config
java -agentlib:native-image-agent=config-output-dir=dist/META-INF/native-image -cp dist Cal

# 打包为二进制可执行文件
native-image --language:js --initialize-at-build-time=Cal -cp dist Cal dist/my-cal

# 试试是否成功
./dist/my-cal
```
