/**
 *
 * @title 应用组件名称
 * @description 应用组件描述
 *
 */

import React, { Component } from 'react';
import Temp from '../../src/index';
class Demo1 extends Component {

    render () {
      let btns = [
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
      let parent = {
        orgId:1,
        includeSuborg:false
      };
      let className = 'clcclclclclcl';
        return (
            <div className="demoPadding">
                <Temp btns={btns} parent={parent} className={className} />
            </div>
        )
    }
}

export default Demo1;
