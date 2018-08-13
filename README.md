## ac-table

```
$ ynpm install @yonyou/ac-table --save

引入

import {AcTable} from '@yonyou/ac-table';

```

##效果
 
 

## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|className|样式|string|default|
|parent|参数object|object|
|btns|操作组(如下)| array| --|

## btns所有的属性
 |参数|说明|类型|默认值|
 |:--|:---:|:--:|---:|
 |label|文字|string|default|
 |type|btns: next、last|string|
 |func|回调函数| function| --|

#### 开发调试

```sh
$ cd ac-table
$ npm install
$ npm run dev
```

