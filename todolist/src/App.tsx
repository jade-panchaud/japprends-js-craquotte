import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoService} from "./todo/TodoService";
import {TodoModel} from "./todo/TodoModel";

// eslint-disable-next-line
const service = new TodoService();

interface State {
    todos: TodoModel[]
}

class App extends React.Component<any, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: []
        };
    }

    public render() {
        const todos = this.state.todos;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {todos.map(t => <div key={t.id}>{t.content}</div>)}
                    <button onClick={this.handleClick}>Rafraichir les TODOs</button>
                </header>
            </div>
        );
    }

    public componentDidMount() {
        service.getAll().then(todos => this.setState({todos})).catch(err => console.error(err))
    }

    private handleClick = () => {
        this.setState({todos: []});
        service.getAll().then(todos => this.setState({todos})).catch(err => console.error(err))
    }
}

export default App;
