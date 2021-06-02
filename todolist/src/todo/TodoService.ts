import {TodoModel} from "./TodoModel";


let db: TodoModel[] = [
    {
        id: 1,
        content: 'Acheter une bière',
        date: new Date(),
        done: false,
        category: 'urgent'
    },
    {
        id: 2,
        content: 'Jouer à animal crossing',
        date: new Date(),
        done: false,
        category: 'normal'
    },
];

// Toutes les méthodes sont async pour simuler un appel HTTPs
// TODO: delete
export class TodoService {

    public async getAll(): Promise<TodoModel[]> {
        return asyncResponse<TodoModel[]>(() => db.slice());
    }

    public async add(todo: TodoModel): Promise<void> {
        return asyncResponse<void>(() => {
            db.push(todo);
            console.log(db);
        });
    }

    public async delete(id: number): Promise<void> {
        return asyncResponse<void>(() => {
            db = db.filter(t => t.id !== id);
            console.log(db);
        });
    }

    public async update(todo: TodoModel): Promise<void> {
        return asyncResponse<void>(() => {
            const todoToUpdateIndex = db.findIndex(aTodo => aTodo.id === todo.id);
            db[todoToUpdateIndex] = todo;
            console.log(db);
        })
    }
}

function asyncResponse<T>(response: () => T){
    return new Promise<T>((resolve, reject) => {
        setTimeout(()=> {
            resolve(response());
        }, Math.random() * 1000)
    })
}