import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'element-react';
import 'element-theme-default';
import PropTypes from 'prop-types';
import './index.less';
const urlHost = 'http://hrcloud.yyuap.com';
const propTypes = {
    classold_postname: PropTypes.string,
    parent:(props, propold_postname) => {
        let _parent = props[propold_postname];
        if(!_parent.orgId){
            _parent.orgId = ''
        }
        if(!_parent.includeSuborg){
            _parent.includeSuborg = false
        }
        if(!_parent.urlHost){
            _parent.urlHost = urlHost
        }
        if(!_parent.wb_at){
            _parent.wb_at = ''
        }
    },
    btns:PropTypes.array,
};
const defaultProps = {
    classold_postname: '',
    parent: {
        orgId: '',
        includeSuborg: false,
        urlHost: urlHost,
        wb_at: ''
    },
    btns: []
};
class AcOrgcenterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentold_postcode: this.getCurrTime(),
            tableData: [],
          columns: [
            {
              label: "原职位编码",
              prop: "old_postcode"
            },
            {
              label: "原职位名称",
              prop: "old_postname"
            },
            {
              label: "新职位编码",
              prop: "new_postcode",
              render: (row, column, index)=>{
                return <input type="text" value={row.new_postcode} onChange={(e)=>this.handleChange(row, 'new_postcode',e)}/>
              }
            },
            {
              label: "新职位名称",
              prop: "new_postold_postname",
              render: (row, column, index)=>{
                return <input type="text" value={row.new_postold_postname} onChange={(e)=>this.handleChange(row, 'new_postold_postname',e)}/>
              }
            },
            {
              label: "所属部门",
              prop: "deptid_showold_postname"
            },
            {
              label: "创建日期",
              prop: "currentold_postcode"
            }
          ],
          data: [{
            old_postcode: '2016-05-02',
            old_postname: '王小虎',
            new_postcode: '上海市普陀区金沙江路 1518 弄',
            new_postold_postname: '上海市普陀区金沙江路 1518 弄',
            deptid_showold_postname: '上海市普陀区金沙江路 1518 弄',
            currentold_postcode: '上海市普陀区金沙江路 1518 弄'
          }, {
            old_postcode: '2016-05-02',
            old_postname: '王小虎',
            new_postcode: '',
            new_postold_postname: '上海市普陀区金沙江路 1518 弄',
            deptid_showold_postname: '上海市普陀区金沙江路 1518 弄',
            currentold_postcode: '上海市普陀区金沙江路 1518 弄'
          }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);
        this.last = this.last.bind(this);
    }

    getCurrTime(){
        let curTime = new Date();
        let curDate = curTime.getFullYear()+'-'+format(curTime.getMonth()+1)+'-'+format(curTime.getDate());

        function format(num) {
            let str = '';
            if(Number(num)<10){
                str =  '0';
            }

            return (str + num)
        }

        return curDate
    }
    getDataList(){
        let wb_at = '';
        if(this.props.parent.wb_at && this.props.parent.wb_at.length>0){
            wb_at = `&wb_at=${this.props.parent.wb_at}`
        }
        let url = `${this.props.parent.urlHost}/corehr-org/corehr/orgchange/position/view`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.withCredentials = true; // 携带跨域cookie
        xhr.send();
        let _this = this;
        xhr.onreadystatechange=function () {
            if(xhr.readyState==4){
                if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                    var res=JSON.parse(xhr.responseText);
                    _this.setState(
                        {
                            data:res["data"]
                        }
                    );
                }else{

                }
            }
        };
    }
    componentWillReceiveProps(){

    }
    componentDidMount(){
        this.getDataList();
    }
    handleChange(newItem,key,e) {
      
      console.log(newItem);
      const val = e.target.value;
      newItem[key] = val;
        this.setState({data: this.state.data});
    }
    next(call){
        const data = this.state.data;
        call(data);
    }
    last(call){
        const data = this.state.data;
        call(data)
    }
    render() {
        const listItems = this.props.btns;
        return (
            <div className={this.props.classold_postname} id='ac-orgcenter-form'>
                <div className='table-box'>
                  <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    maxHeight={200}
                    data={this.state.data}
                  />
                </div>
                <footer className='footer'>
                    {
                        listItems.map((item,i)=>{
                            return (
                                <button key={i} className={item.type} onClick={()=>this[item.type](item.func)}>{item.label}</button>
                            )
                        })
                    }
                </footer>



            </div>

        );
    }
}

AcOrgcenterForm.propTypes = propTypes;
AcOrgcenterForm.defaultProps = defaultProps;

export default AcOrgcenterForm;
