import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const urlHost = 'http://10.6.195.142:8089';
const propTypes = {
    className: PropTypes.string,
    parent:PropTypes.object, //
    btns:PropTypes.array,
};
class AcOrgcenterForm extends Component {
    static defaultProps = {
        className: '',
        parent: {},
        btns: []
    };
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
        // let url = 'http://10.6.195.142:8089/corehr/orgchange/position/view?orgId=c02f33880d9d4866903e237245b9e643&includeSuborg=0';
        let url = `${urlHost}/corehr-staff-process/corehr/orgchange/position/view?orgId=${this.props.parent.orgId}&includeSuborg=${this.props.parent.includeSuborg}`;
        fetch(url, {
            method: 'get',
            mode:'cors'
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(data)
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
        });
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

export default AcOrgcenterForm;
