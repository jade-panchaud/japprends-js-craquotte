import {ArticleModel} from "./ArticleModel";

export class ArticleService {
    private articles: ArticleModel[] = [{origin: 'Ici', name: 'Guimauve', quantity: 3, price: 4}, {origin: 'Là-bas', name: 'Chocolat', quantity: 5, price: 10}];

    private articlesInShop = () => {
        return this.articles;
    };

    public async getArticlesInShopByPromise(): Promise<ArticleModel[]> {
        return await this.getArticlesInShop()
            .then((res) => {
                return res;
            })
            .catch(() => {
                throw new Error("Par d'articles à vendre");
            });
    }

    private getArticlesInShop(): Promise<ArticleModel[]> {
        return new Promise<ArticleModel[]>((resolve, reject) => {
            const random = Math.random();
            if(random > 0.5) {
                setTimeout(() => resolve(this.articlesInShop()), 2000);
            } else {
                reject(() => {
                    throw new Error("Par d'articles à vendre");
                });
            }
        });
    }
}