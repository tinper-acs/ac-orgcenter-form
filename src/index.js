
import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    parent:PropTypes.object, //
    btns:PropTypes.array,
}
class AcTable extends Component {
    static defaultProps = {
        className: '',
        parent: {},
        btns:[],
    };
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);
        this.last = this.last.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    next(call){
        const data = {
            value:this.state.value
        };
        console.log('点击下一步');
        call(data);
    }
    last(call){
        const data = {
            value:this.state.value
        };
        console.log('点击上一步');
        call(data)
    }
    render() {
        console.log("parent = ", this.props.parent);
        const listItems = this.props.btns;
        return (
            <div className={this.props.className}>
                <div>
                    姓名：<input type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                {
                    listItems.map((item,i)=>{
                        return (
                            <button key={i} onClick={()=>this[item.type](item.func)}>{item.label}</button>
                        )
                    })
                }


            </div>

        );
    }
}

AcTable.propTypes = propTypes;

export default AcTable;
