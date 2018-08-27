import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
const urlHost = 'http://hrcloud.yyuap.com';
const propTypes = {
    className: PropTypes.string,
    parent:(props, propName) => {
        let _parent = props[propName];
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
    }, //
    btns:PropTypes.array,
};
const defaultProps = {
    className: '',
    parent: {
        orgId: '',
        includeSuborg: false,
        urlHost: 'http://hrcloud.yyuap.com',
        wb_at: ''
    },
    btns: []
};
class AcOrgcenterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: this.getCurrTime(),
            tableData: []
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
        // this.setState({
        //     currentDate: curDate
        // })
    }
    getDataList(){
        let wb_at = '';
        if(this.props.parent.wb_at && this.props.parent.wb_at.length>0){
            wb_at = `&wb_at=${this.props.parent.wb_at}`
        }
        let url = `${this.props.parent.urlHost}/corehr-org/corehr/orgchange/position/view?orgId=${this.props.parent.orgId}&includeSuborg=${this.props.parent.includeSuborg}${wb_at}`;
        /*fetch(url, {
            method: 'get',
            mode:'cors'
        }).then((res)=>{
            if(res.ok){
                res.text().then((data)=>{
                    this.setState(
                        {
                            tableData:data["data"]
                        }
                    );
                    // console.log(JSON.parse(data));
                })
            }
        }).catch((res)=>{
            console.log(res.status);
        });*/
        var xhr = new XMLHttpRequest();
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
                            tableData:res["data"]
                        }
                    );
                }else{

                }
            }
        };
    }
    componentWillReceiveProps(){
        console.log('this.props.parent = ',this.props.parent);
        console.log('nextProps.parent = ',this.nextProps.parent)
    }
    componentDidMount(){
        this.getDataList();
    }
    handleChange(newItem,propName,e) {
        const val = e.target.value;
        let tableData = this.state.tableData;
        tableData.forEach((item)=>{
            if(item.id===newItem.id){
                item[propName] = val
            }
        });

        this.setState({tableData: tableData});
    }
    next(call){
        const data = this.state.tableData;
        call(data);
    }
    last(call){
        const data = this.state.tableData;
        call(data)
    }
    render() {
        const listItems = this.props.btns;
        const tableData = this.state.tableData;
        return (
            <div className={this.props.className} id='ac-orgcenter-form'>
                <div className='table-box'>
                    <table>
                        <thead>
                        <tr>
                            <th>原职位编码</th>
                            <th>原职位名称</th>
                            <th>新职位编码</th>
                            <th>新职位名称</th>
                            <th>所属部门</th>
                            <th>创建日期</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tableData.map((item, i)=>{
                                return (
                                    <tr key={i}>
                                        <td className='staff-code'>{item.old_postcode}</td>
                                        <td>{item.old_postname}</td>
                                        <td><input type="text" value={item.new_postcode} onChange={(e)=>this.handleChange(item, 'new_postcode',e)}/></td>
                                        <td><input type="text" value={item.new_postname} onChange={(e)=>this.handleChange(item, 'new_postname',e)}/></td>
                                        <td>{item.deptid_showname}</td>
                                        <td>{this.state.currentDate}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
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
