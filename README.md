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
 |tableData|table中列表数据|array|[]|

## tableData所有的属性
 |参数|说明|类型|默认值|
 |:--|:---:|:--:|---:|
 |old_postname|原职位名称|string|null|
 |new_postcode|新职位编码|string|null|
 |deptid_showname|所属部门|string|null|
 |old_postcode|原职位编码|string|null|
 |deptid|table中列表数据|string|null|
 |new_postname|新职位名称|string|null|
 |id|table中列表数据|string|null|

## btns所有的属性
 |参数|说明|类型|默认值|
 |:--|:---:|:--:|---:|
 |label|文字|string|default|
 |type|btns: next、last|string|
 |func|回调函数| function| --|

#### 开发调试

```sh
$ cd ac-orgcenter-form
$ npm install
$ npm run dev
```

