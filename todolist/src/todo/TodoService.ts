import {TodoModel} from "./TodoModel";

let db: TodoModel[] = [
    {
        id: 1,
        date: new Date(),
        content: 'Acheter une bière',
        done: false,
    },
    {
        id: 2,
        date: new Date(),
        content: 'Jouer à animal crossing',
        done: false,
    },
];

// Toutes les méthodes sont async pour simuler un appel HTTPs
// TODO: delete
export class TodoService {

    public async getAll(): Promise<TodoModel[]> {
        return asyncResponse<TodoModel[]>(() => db.slice());
    }

    public async add(todo: TodoModel): Promise<void> {
        return asyncResponse<void>(() => db.push(todo));
    }

    public async delete(id: number): Promise<void> {
        return asyncResponse<void>(() => {
            db = db.filter(t => t.id !== id);
        });
    }

}

function asyncResponse<T>(response: () => T){
    return new Promise<T>((resolve, reject) => {
        setTimeout(()=> {
            resolve(response());
        }, Math.random() * 1000)
    })
}