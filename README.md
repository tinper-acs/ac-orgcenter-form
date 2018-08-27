## ac-orgcenter-form

```
$ ynpm install @yonyou/ac-orgcenter-form --save

引入

import {AcOrgcenterForm} from '@yonyou/ac-orgcenter-form';

样式引入

import '@yonyou/ac-orgcenter-form/build/ac-orgcenter-form.css';

```

##效果
 
 

## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|className|样式|string|default|
|parent|参数object|object|
|btns|操作组(如下)| array| --|

## parent所有的属性
 |参数|说明|类型|默认值|
 |:--|:---:|:--:|---:|
 |orgId(必填)|组织id|string|空字符|
 |includeSuborg(必填)|false: 加载【合并组织】时候的【职位列表】; true:加载【跨公司转移】时的【职位列表】|bool|false|
 |urlHost(可选)|接口访问的host|string|'http://hrcloud.yyuap.com'|
 |wb_at(可选)|登录秘钥|string|空字符|

## btns所有的属性
 |参数|说明|类型|默认值|
 |:--|:---:|:--:|---:|
 |label|文字|string|default|空字符|
 |type|btns: next、last|string|空字符|
 |func|回调函数| function| --|

#### 开发调试

```sh
$ cd ac-orgcenter-form
$ npm install
$ npm run dev
```

