import React from 'react';
import './Todo.css';

interface State {
    checked: boolean
}

export class Todo extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            checked: false
        }
    }

    public render(){
        const t = this.props.value.todo;
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
           checked: this.props.value.todo.done
        })
    }

    private handleOnDelete = () => {
        const t = this.props.value.todo;
        this.props.onDeleteTodo(t.id)
    }

    private handleOnCheck = () => {
        const actualCheck = this.state.checked;

        this.setState({
            checked: !actualCheck
        })

        const aTodo = this.props.value.todo;
        aTodo.done = !aTodo.done;
        this.props.onUpdateTodo(aTodo);
    }

}