import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'element-react';
import 'element-theme-default';
import PropTypes from 'prop-types';
import './index.less';

const urlHost = 'http://hrcloud.yyuap.com';
const propTypes = {
    classold_postname: PropTypes.string,
    parent: (props, propold_postname) => {
        let _parent = props[propold_postname];
        if (!_parent.orgId) {
            _parent.orgId = ''
        }
        if (!_parent.includeSuborg) {
            _parent.includeSuborg = false
        }
        if (!_parent.urlHost) {
            _parent.urlHost = urlHost
        }
        if (!_parent.wb_at) {
            _parent.wb_at = ''
        }
        if (!_parent.isStaff) {
            _parent.isStaff = false
        }
    },
    btns: PropTypes.array,
};
const defaultProps = {
    classold_postname: '',
    parent: {
        orgId: '',
        includeSuborg: false,
        isStaff: false,
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
                    render: (row, column, index) => {
                        return <input type="text" value={row.new_postcode}
                                      onChange={(e) => this.handleChange(row, 'new_postcode', e)}/>
                    }
                },
                {
                    label: "新职位名称",
                    prop: "new_postold_postname",
                    render: (row, column, index) => {
                        return <input type="text" value={row.new_postold_postname}
                                      onChange={(e) => this.handleChange(row, 'new_postold_postname', e)}/>
                    }
                },
                {
                    label: "所属部门",
                    prop: "deptid_showold_postname"
                }
            ],
            staffColumns: [
                {
                    label: "姓名",
                    prop: "name"
                },
                {
                    label: "员工编码",
                    prop: "code"
                },
                {
                    label: "手机",
                    prop: "mobile"
                },
                {
                    label: "邮箱",
                    prop: "email"
                }
            ],
            data: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);
        this.last = this.last.bind(this);
    }

    getCurrTime() {
        let curTime = new Date();
        let curDate = curTime.getFullYear() + '-' + format(curTime.getMonth() + 1) + '-' + format(curTime.getDate());

        function format(num) {
            let str = '';
            if (Number(num) < 10) {
                str = '0';
            }

            return (str + num)
        }

        return curDate
    }

    getDataList() {
        let wb_at = '';
        if (this.props.parent.wb_at && this.props.parent.wb_at.length > 0) {
            wb_at = `&wb_at=${this.props.parent.wb_at}`
        }
        let queryUrl = this.props.parent.isStaff ? 'corehr-org/corehr/orgchange/queryStaffByOrg' : 'corehr-org/corehr/orgchange/position/view';
        let url = `${this.props.parent.urlHost}/${queryUrl}?orgId=${this.props.parent.orgId}&includeSuborg=${this.props.parent.includeSuborg}${wb_at}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.withCredentials = true; // 携带跨域cookie
        xhr.send();
        let _this = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    var res = JSON.parse(xhr.responseText);
                    _this.setState(
                        {
                            data: res["data"]
                        }
                    );
                } else {

                }
            }
        };
    }

    componentWillReceiveProps(nextprops) {
        let nextPropsStr = JSON.stringify(nextprops);
        let thisPropsStr = JSON.stringify(this.props);
        if(nextPropsStr !== thisPropsStr){
            this.getDataList();
        }

    }

    componentDidMount() {
        this.getDataList();
    }

    handleChange(newItem, key, e) {

        console.log(newItem);
        const val = e.target.value;
        newItem[key] = val;
        this.setState({data: this.state.data});
    }

    next(call) {
        const data = this.state.data;
        call(data);
    }

    last(call) {
        const data = this.state.data;
        call(data);
    }

    render() {
        const listItems = this.props.btns;
        const columns = this.props.parent.isStaff ? this.state.staffColumns : this.state.columns;
        return (
            <div className={this.props.classold_postname} id='ac-orgcenter-form'>
                <div className='table-box'>
                    <Table
                        style={{width: '100%'}}
                        columns={columns}
                        maxHeight={200}
                        data={this.state.data}
                    />
                </div>
                <footer className='footer'>
                    {
                        listItems.map((item, i) => {
                            return (
                                <button key={i} className={item.type}
                                        onClick={() => this[item.type](item.func)}>{item.label}</button>
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
