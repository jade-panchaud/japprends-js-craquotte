
export class FunServices {
    private kaamelottAPIRoad = 'https://kaamelott.chaudie.re/api'

    public getKaamelottQuote(): Promise<String> {
        return fetch(this.kaamelottAPIRoad + '/random')
            .then(async res => {
            return await res.json();
            })
            .then((quoteInfo) => {
                return quoteInfo['citation']['citation'];
            })
            .catch((err) => console.log(err));
    }

    public getCatFact(): Promise<string | CatFact> {
        return fetch('https://cat-fact.herokuapp.com/facts')
            .then(async res => {
                 return await res.text();
        }).catch();
    }

    public async getCityListDetailsByName(cityName: string)  {
        return fetch(`https://geo.api.gouv.fr/communes?nom=${cityName}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`)
            .then(async res => {
                const resJson = await res.json();
                console.log("Reponse API :\n" + resJson);
                return resJson;
            });
    }
}
interface CatFact {
    text: string;
    createdAt: string;
}