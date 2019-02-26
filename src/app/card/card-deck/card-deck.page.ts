import { Component } from '@angular/core';
import { CardService } from '../shared/card.service';

//import {enableProdMode} from '@angular/core';           //this was put on later needed for the debugger thing to work

import { CardDeck } from '../shared/card.model';                         //it finally finds this one


@Component({
    selector: 'app-card-deck',
    templateUrl: '/card-deck.page.html',
    styleUrls: ['./card-deck.page.scss']
})


export class CardDeckPage {

    private readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];


    public cardDecks: CardDeck[] = [];        //list data data type


    constructor(private cardService: CardService) {
        //debugger;      //will stop the compilation,see where the failure lies
        this.getCardDecks();
    }



    private getCardDecks(){         //one of the ways to get data from an observale is to subscribe to it
        this.cardService.getAllCardDecks().subscribe(
            //debugger;
            (cardDecks: CardDeck[]) => {
                //debugger;
                this.extractAllowedDecks(cardDecks)
                //this.cardDecks = cardDecks})
            })
    }



    extractAllowedDecks(cardDecks: CardDeck[]){
        this.ALLOWED_DECKS.forEach((deckName: string) => this.cardDecks.push({name: deckName, types: cardDecks[deckName]}))
    }


    generateUrl(cardDeckGroup: string, cardDeck: string): string {
        return `/tabs/(card:card/${cardDeckGroup}/${cardDeck})`        // string literals
    }


}






                                              //Below was the old way
    //public readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman', 'Priest', 'Warlock', 'Hunter', 'Paladin'];
                  //apparently this is not good coding because this is because we are storing the data in the Cardpage.page file and
                   //we should move it to a service file so that all more than just file ouotside the folder can touuch the file
                       //our goal in this is deliemma is to have a centralized data point

