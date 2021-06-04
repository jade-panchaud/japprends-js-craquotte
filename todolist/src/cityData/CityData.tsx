import React, {ChangeEvent} from 'react';

interface Props {
    onSearchCity: (cityName: string) => void;
}

interface State {
    cityName: string
}


export class CityData extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            cityName: ""
        }
    }

    public render() {
        return (
            <div>
                <div>
                    Connaître la population d'une ville de France
                    <input type="text" value={this.state.cityName} placeholder="Nom d'une ville..." onChange={this.handleUpdateCity}/>
                    <button onClick={this.handleSearchCity}>GO</button>
                </div>
            </div>
        )
    }

    handleSearchCity = () => {
        console.log("Nom de la ville :\n" + this.state.cityName);
        this.props.onSearchCity(this.state.cityName);
        this.setState({
            cityName: ""
        })
    }

    handleUpdateCity = (ev: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            cityName: ev.target.value
        })
    }
}
