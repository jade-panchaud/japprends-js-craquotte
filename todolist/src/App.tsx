import React, {ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoService} from "./todo/TodoService";
import {TodoModel} from "./todo/TodoModel";
import {Todo} from "./todo/Todo";

// eslint-disable-next-line
const service = new TodoService();

interface State {
    todos: TodoModel[],
    contentNewTodo: string,
    categoryNewTodo: string,
    loading: boolean
}

//This.props and this.state can be async update, shouldn't be a base
//to have the next status
class App extends React.Component<any, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [],
            contentNewTodo: "",
            categoryNewTodo: "normal",
            loading: false
        };
    }

    public render() {
        const newTodoContent = this.state.contentNewTodo;
        const isLoading = this.state.loading;
        const urgentTodo = this.state.todos.filter(t => t.category === "urgent");
        const normalTodo = this.state.todos.filter(t => t.category === "normal");

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <div>
                        <div className="todoList">
                            <label hidden={urgentTodo.length === 0}>Urgent</label>
                            {urgentTodo.map(t => <Todo value={{todo: t}}
                                                       onDeleteTodo={this.handleDeleteTodo}
                                                       onUpdateTodo={this.handleUpdateTodo}/>)}
                        </div>

                        <div className="todoList">
                            <label hidden={urgentTodo.length === 0}>Normal</label>
                            {normalTodo.map(t => <Todo value={{todo: t}}
                                                       onDeleteTodo={this.handleDeleteTodo}
                                                       onUpdateTodo={this.handleUpdateTodo}/>)}
                        </div>
                    </div>

                    <div>
                        <input type="text" value={newTodoContent} onChange={this.handleNewTodoContent}/>
                        <select name="category" id="category-select" onChange={this.handleCategory}>
                            <option value="normal">Normal</option>
                            <option value="urgent">Urgent</option>
                        </select>
                        <button disabled={newTodoContent.length === 0} onClick={this.handleAddTodo}>Ajouter un TODO
                        </button>
                    </div>

                    <button onClick={this.handleRefresh}>Rafraichir les TODOs</button>
                    <div hidden={!isLoading}>Veuillez patienter...</div>
                </header>
            </div>
        );
    }

    public componentDidMount() {
        service.getAll().then(todos => this.setState({todos})).catch(err => console.error(err))
    }

    private handleRefresh = () => {
        this.setState({
            loading: true
        })

        service.getAll().then(todos =>
            this.setState({todos: todos})
        ).catch(err => console.error(err)
        ).finally(() =>
            this.setState({
                loading: false
            })
        )
    }

    private handleNewTodoContent = (ev: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            contentNewTodo: ev.target.value
        })
    }

    private handleCategory = (ev: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            categoryNewTodo: ev.target.value
        })
    }

    private handleAddTodo = () => {
        const newTodo = {
            id: (this.state.todos.length) + 1,
            content: this.state.contentNewTodo,
            category: this.state.categoryNewTodo,
            date: new Date(),
            done: false
        };
        service.add(newTodo).then(this.handleRefresh).catch(err => console.error(err));
        this.setState({
            contentNewTodo: ""
        })
    }

    private handleDeleteTodo = (todoId: number) => {
        console.log(todoId);
        service.delete(todoId).then(this.handleRefresh).catch(err => console.error(err));
    }

    private handleUpdateTodo = (todo: TodoModel) => {
        service.update(todo).then(this.handleRefresh).catch(err => console.error(err));
    }
}

export default App;
