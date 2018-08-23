import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './demo.less';
import AcOrgcenterForm from '../index';
import '../index.less'

var btns = [
    {
        'label': '上一步',
        'type': "last",
        'func': function (data) {
            console.log('----------', data)
        }
    },
    {
        'label': '下一步',
        'type': "next",
        'func': function (data) {
            console.log('----------', data)
        }
    }
];
/**
 *
 * @param url 目标地址
 * @returns {{Object}} 返回提取的查询参数
 */
const getQuery = url => {
    if (typeof (url) !== 'string') return;
    let queryObj = {};
    const reg1 = /([^?&=#]+)=([^?&=#]*)/g;
    url.replace(reg1, (...arg) => {
        queryObj[arg[1]] = arg[2]
    });
    return queryObj
};

/**
 * @param name cookie名
 * @param value 值
 * @param expiredays 期限
 * @returns {{Object}} 返回提取的查询参数
 */

const setCookie = (name, value, expiredays) => {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString());
};

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

    }

    render() {
        let parent = {
            tableData: [
                {
                    "old_postname": "研发总部总经理",
                    "new_postcode": "",
                    "deptid_showname": "研发总部",
                    "old_postcode": "0101",
                    "deptid": "212a6212cdbd42e9a51a8d71cfa9cc72",
                    "new_postname": "研发总部总经理",
                    "id": "2eb59a6205834713b2aa95b08975a64e"
                }
            ]
        };
        let className = 'clcclclclclcl';
        return (
            <div>
                <AcOrgcenterForm btns={btns} parent={parent} className={className}/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));
