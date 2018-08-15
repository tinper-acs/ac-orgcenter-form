import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './demo.less';
import AcTable from '../index';
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
class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };

    }

    render () {
        let parent = {
            orgId:'d3e7a795e0f54d2f99f9749f8123ec3d',
            includeSuborg:0
        };
        let className = 'clcclclclclcl';
        return (
            <div>
                <AcTable btns={btns} parent={parent} className={className}/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));
