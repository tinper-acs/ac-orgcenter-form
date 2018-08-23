import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    parent:PropTypes.object, //
    btns:PropTypes.array
};
class AcOrgcenterForm extends Component {
    static defaultProps = {
        className: '',
        parent: {
            tableData:[]
        },
        btns: []
    };
    constructor(props) {
        super(props);
        this.state = {
            currentDate: this.getCurrTime()
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
    componentDidMount(){
        // this.getDataList();
    }
    handleChange(newItem,propName,e) {
        const val = e.target.value;
        let tableData = this.props.parent.tableData;
        tableData.forEach((item)=>{
            if(item.id===newItem.id){
                item[propName] = val
            }
        });
    }
    next(call){
        const data = this.props.parent.tableData;
        call(data);
    }
    last(call){
        const data = this.props.parent.tableData;
        call(data)
    }
    render() {
        const listItems = this.props.btns;
        const tableData = this.props.parent.tableData;
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
