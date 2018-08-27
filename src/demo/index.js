import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './demo.less';
import AcOrgcenterForm from '../index';
import '../index.less'
var btns = [
    {
        'label':'上一步',
        'type': "last",
        'func': function (data) {
            console.log('----------',data)
        }
    },
    {
        'label':'下一步',
        'type': "next",
        'func': function (data) {
            console.log('----------',data)
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

    constructor(props){
        super(props);
        this.state = {
            open: false
        };

    }

    render () {
        let wb_at = null;
        let url = window.location.href;
        if (url.indexOf('?') !== -1) {
            let cookieObj = getQuery(url);
            if (cookieObj.wb_at) {
                setCookie('wb_at', cookieObj.wb_at, 365);
                wb_at = cookieObj.wb_at;
            }
        }
        let urlHost = null;
        // let urlHost = 'http://10.6.211.224:8090';
        let parent = {
            orgId:'212a6212cdbd42e9a51a8d71cfa9cc72',
            includeSuborg:false
        };
        if(wb_at){
            parent['wb_at'] = wb_at;
        }
        if(urlHost){
            parent['urlHost'] = urlHost;
        }
        let className = 'clcclclclclcl';
        return (
            <div>
                <AcOrgcenterForm btns={btns} parent={parent} className={className}/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));
