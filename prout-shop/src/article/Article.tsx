import React from 'react';
import { ArticleModel } from "./ArticleModel";

interface Caracteristics {
    article: ArticleModel;
}

export function Article(props: Caracteristics){
    const { origin, price, quantity, name } = props.article;

    return (
        <div>
            <div>ARTICLE EN VENTE</div>
            <div>Origine : {origin}</div>
            <div>Nom : {name}</div>
            <div>Prix : {price}</div>
            <div>Quantité {quantity}</div>
        </div>
    )

}