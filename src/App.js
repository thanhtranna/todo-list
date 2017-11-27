import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            // console.log(localStorage.getItem('tasks'));
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    onGenerateData = () => {
        let tasks = [
            {
                id: this.generateID(),
                name: 'Hoc lap trinh',
                status: true
            },
            {
                id: this.generateID(),
                name: 'Di boi',
                status: false
            },
            {
                id: this.generateID(),
                name: 'Ngu?',
                status: true
            }
        ]
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +this.s4() + this.s4();
    }

    render() {
        let { tasks, isDisplayForm } = this.state;
        let showTaskForm = isDisplayForm ? <TaskForm onCloseForm={ this.onCloseForm } /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        {/* Form */}
                        { showTaskForm }
                    </div>
                    <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={ this.onToggleForm }
                        >
                            <span className="fa fa-plus mr-5">
                            </span>Thêm Công Việc
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={ this.onGenerateData }
                        >
                            <span className="fa fa-plus mr-5"></span>Generate Data
                        </button>
                        <br />
                        <br />
                        {/* Search - Sort */}
                        <Control />
                        <br />
                        {/* Task List */}
                        <TaskList tasks={ tasks }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
