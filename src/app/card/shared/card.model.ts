export interface CardDeck {
    name: string;
    types: string[];
}

export interface Card{
    cardId: number;
    cardSet: string;
    img: string;
    imgGold: string;
    name: string;

    cost: number;
    attack: number;
    health: number;
    rarity: string;
    type: string;

    dbfIf: string;
    faction: string;
    playerClass: string;
    locale: string;
}