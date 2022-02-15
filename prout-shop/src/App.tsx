import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Article } from "./article/Article";
import { ArticleService } from "./article/ArticleService";
import { ArticleModel } from "./article/ArticleModel";
import {FunServices} from "./FunServices";

function App() {
    const service = new ArticleService();
    const funService = new FunServices();
    const [articlesInShop, setArticlesInShop] = useState<ArticleModel[]>([]);
    const [kaamelottQuote, setKaamelottQuote] = useState<String>('');

    //Get articles of the shop
    useEffect(() => {
        const test = async () => {
            await service.getArticlesInShopByPromise()
                .then((res) => {
                    setArticlesInShop(res);
                })
                .catch((err) => {
                    console.log(err.message);
                    return [];
                });
        };

        test();
    },[]);

    //Kaamelott quote
    useEffect(() => {
        funService.getKaamelottQuote()
            .then((res) => {
                setKaamelottQuote(res);
        })
            .catch((err) => console.error(err));
    },[])

    return (
    <div className="App">
      <header className="App-header">
          <div>
              <div>Citation du jour</div>
              <div>{kaamelottQuote}</div>
          </div>

        <img src={logo} className="App-logo" alt="logo" />

          {articlesInShop?.map(art => {
              console.log(art);
              return <Article key={art.name} article={art} />
          })}

          {articlesInShop?.length === 0 && <div>Pas de produits à vendre</div>}

      </header>
    </div>
  );
}

export default App;
