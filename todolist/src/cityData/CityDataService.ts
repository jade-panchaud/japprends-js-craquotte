import {CityDataDetailsModel} from "./CityDataDetailsModel";

export class CityDataService {

    public async getCityListDetailsByName(cityName: string): Promise<CityDataDetailsModel[]> {
        return fetch(`https://geo.api.gouv.fr/communes?nom=${cityName}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`)
            .then(async res => {
                const resJson = await res.json();
                console.log("Reponse API :\n" + resJson);
                return resJson;
            });
    }

    public async getPopulationByInseeCode(inseeCode: string): Promise<number> {
        return fetch(`https://geo.api.gouv.fr/communes/${inseeCode}?fields=population&format=json&geometry=centre`)
            .then(async res => {
                const resJson = await res.json();
                console.log("Reponse API :\n" + resJson);
                return resJson;
            })
            .then(data => {
                return data["population"];
            })
    }
}