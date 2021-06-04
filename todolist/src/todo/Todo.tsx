import React from 'react';
import './Todo.css';
import {TodoModel} from "./TodoModel";

interface Props {
    value: TodoModel;
    onDeleteTodo: (id: number) => void;
    onUpdateTodo: (todo: TodoModel) => void;
}

interface State {
    checked: boolean
}

export class Todo extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            checked: false
        }
    }

    public render(){
        const t = this.props.value;
        return (
            <div className={ this.state.checked? "done" : "" } key={t.id}>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleOnCheck}/>
                {t.content} {t.date.toDateString()}
                <button onClick={this.handleOnDelete}>X</button>
            </div>
        )
    }

    public componentDidMount() {
        this.setState({
           checked: this.props.value.done
        })
    }

    //To notified the event to the parent component
    private handleOnDelete = () => {
        const t = this.props.value;
        this.props.onDeleteTodo(t.id)
    }

    private handleOnCheck = () => {
        const actualCheck = this.state.checked;

        this.setState({
            checked: !actualCheck
        })

        const aTodo = this.props.value;
        aTodo.done = !aTodo.done;
        this.props.onUpdateTodo(aTodo);
    }

}