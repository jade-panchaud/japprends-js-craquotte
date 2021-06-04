import React, {ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoService} from "./todo/TodoService";
import {TodoModel} from "./todo/TodoModel";
import {TodoList} from "./todoList/TodoList";
import {CityData} from "./cityData/CityData";
import {CityDataService} from "./cityData/CityDataService";
import {CityDataDetailsModel} from "./cityData/CityDataDetailsModel";

// eslint-disable-next-line
const service = new TodoService();
const cityService = new CityDataService();

interface State {
    todos: TodoModel[],
    cities: CityDataDetailsModel[],
    cityPopulation: number,
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
            cities: [],
            cityPopulation: 0,
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
        const cities = this.state.cities;
        const cityPopulation = this.state.cityPopulation;

        const todoCategoryList = [
            {category: "Urgent", list: urgentTodo},
            {category: "Normal", list: normalTodo}
        ]

        return (
            <div className="App">
                <header className="App-header">
                    <CityData onSearchCity={this.handleSearchCity}/>
                    <select hidden={cities.length === 0} name="cityName" id="city-select" onChange={this.handleChooseCity}>
                        {cities.map(city =>
                            <option key={city.code} value={city.nom}>{city.nom}</option>
                        )}
                    </select>
                    <div>Population : {cityPopulation}</div>

                    <img src={logo} className="App-logo" alt="logo"/>

                    <div>
                        {todoCategoryList.map(catList =>
                            <TodoList key={catList.category} todoList={catList.list} category={catList.category}
                                                                    onDeleteTodo={this.handleDeleteTodo}
                                                                    onUpdateTodo={this.handleUpdateTodo}/>)}
                    </div>

                    <div>
                        <input type="text" value={newTodoContent} placeholder="Tâche à faire..." onChange={this.handleNewTodoContent}/>

                        <select name="category" id="category-select" onChange={this.handleCategory}>
                            <option value="normal">Normal</option>
                            <option value="urgent">Urgent</option>
                        </select>

                        <button disabled={newTodoContent.length === 0} onClick={this.handleAddTodo}>Ajouter un TODO</button>
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

    public componentWillUnmount() {
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any) {
    }

    private handleSearchCity = (cityName: string) => {
        cityService.getCityListDetailsByName(cityName)
            .then(cities => {
                console.log(cities);
                this.setState({
                    cities: cities
                })
            })
            .then(() => {
                cityService.getPopulationByInseeCode(this.state.cities[0].code)
                    .then(population => {
                        this.setState({
                            cityPopulation: population
                        })
                    })
            })
            .catch(console.log);
    }

    private handleChooseCity = (ev: ChangeEvent<HTMLSelectElement>) => {
        const cityList = this.state.cities;
        const city = cityList.find(c => c.nom === ev.target.value);
        const cityCode = city?.code;

        if(cityCode === undefined) {
            throw new Error();
        }

        cityService.getPopulationByInseeCode(cityCode)
            .then(population => {
                console.log(population);
                this.setState({
                    cityPopulation: population
                })
            })
            .catch(console.log);
    }

    //When update, screen is loading. At the end, whatever it's a success
    //or an error, end the loading.
    private handleRefresh = () => {
        this.refreshInternal().catch(err => console.error('handleRefresh', err));
    }

    private refreshInternal(): Promise<void> {
        this.setState({
            loading: true
        })

        return service.getAll()
            .then(todos => {
                this.setState({todos})
            })
            .finally(() =>
                this.setState({
                    loading: false
                })
             )
    }

    //Maintain update the value of the input
    private handleNewTodoContent = (ev: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            contentNewTodo: ev.target.value
        })
    }

    //Update the category when change the selected value
    private handleCategory = (ev: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            categoryNewTodo: ev.target.value
        })
    }

    //When the obj is added to de db, call the refresh event
    private handleAddTodo = () => {
        this.setState({
            loading: true
        });

        const newTodo = {
            id: (this.state.todos.length) + 1,
            content: this.state.contentNewTodo,
            category: this.state.categoryNewTodo,
            date: new Date(),
            done: false
        };

        service.add(newTodo)
            .then(() => service.getAll())
            .then(todos => this.setState({
                todos: todos
            }))
            .catch(err => {
                console.error(err);
            })
            .finally(() => this.setState({
            loading: false,
            contentNewTodo: ""
        }));
    }

    //Event coming from children component (aTodo component)
    private handleDeleteTodo = (todoId: number) => {
        this.setState({
            loading: true
        });

        service.delete(todoId)
            .then(() => service.getAll())
            .then(todos => this.setState({
                todos
            }))
            .catch(err => console.error(err))
            .finally(() => {
                this.setState({
                    loading: false
                })
            });
    }

    private handleUpdateTodo = (todo: TodoModel) => {
        this.setState({
            loading: true
        });

        service.update(todo)
            .then(() => service.getAll())
            .then(todos => this.setState({
                todos
            }))
            .catch(err => console.error(err))
            .finally(() => {
                this.setState({
                    loading: false
                })
            });
    }
}

export default App;
