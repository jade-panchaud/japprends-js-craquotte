import React from 'react';
import './TodoList.css';
import {Todo} from "../todo/Todo";
import {TodoModel} from "../todo/TodoModel";

interface Props {
    todoList: TodoModel[];
    category: string;
    onDeleteTodo: (todoId: number) => void;
    onUpdateTodo: (todo: TodoModel) => void;
}

interface State {

}

export class TodoList extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    public render(){
        const todoList = this.props.todoList;
        const category = this.props.category;

        return (
            <div className="todoList">
                <label hidden={todoList.length === 0}>{category}</label>
                {todoList.map(t => <Todo key={t.id} value={t}
                                           onDeleteTodo={this.handleDeleteTodo}
                                           onUpdateTodo={this.handleUpdateTodo}/>)}
            </div>
        )
    }

    public componentDidMount() {

    }

    //To notified the event to the parent component
    private handleDeleteTodo = (todoId: number) => {
        this.props.onDeleteTodo(todoId);
    }

    //To notified the event to the parent component
    private handleUpdateTodo = (todo: TodoModel) => {
        this.props.onUpdateTodo(todo);
    }
}