import React, { Component } from 'react';   

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Tran Thanh',
            status: true
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = () => {
        
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm Công Việc
                        <span
                            className="fa fa-times-circle pull-right text-right"
                            onClick={ this.onCloseForm }
                        >
                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value="1">Kích Hoạt</option>
                            <option value="0">Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                            <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
