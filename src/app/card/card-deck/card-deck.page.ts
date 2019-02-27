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


    public cardDecks: CardDeck[] = [];        //list data data type   //empty array


    constructor(private cardService: CardService) {                //this will allow to have access to all of the cardservices services  (this is the api connection file)
        //debugger;      //will stop the compilation,see where the failure lies
        this.getCardDecks();                 //the below function is actually contained inside here inorder to have access to the cardservice file (contains api connection file)
    }



    private getCardDecks(){         //one of the ways to get data from an observale is to subscribe to it
                                          //observable is the data stream in which which we do request with server.
        this.cardService.getAllCardDecks().subscribe(
            //debugger;
            (cardDecks: CardDeck[]) => {
                //debugger;
                this.extractAllowedDecks(cardDecks)       //this code this connects method below and then pushes it into Card.
                //this.cardDecks = cardDecks})
            })
    }



    extractAllowedDecks(cardDecks: CardDeck[]){
        this.ALLOWED_DECKS.forEach((deckName: string) =>{this.cardDecks.push({name: deckName, types: cardDecks[deckName]})})
    }                    //foreach deckName in ALLOWED_DECKS             //going to pushing deckname into cardDecks
                             //name is the deckName = classes,faction, qualities,types, races.
                             //cardDecks has many abilities that conatins the api connections
                    //this pushes the information into lower level Cardlisting page

    generateUrl(cardDeckGroup: string, cardDeck: string): string {
        return `/tabs/(card:card/${cardDeckGroup}/${cardDeck})`        // string literals
    }             //this method also pushes to the lower deck Cardlisting page.


}






                                              //Below was the old way
    //public readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman', 'Priest', 'Warlock', 'Hunter', 'Paladin'];
                  //apparently this is not good coding because this is because we are storing the data in the Cardpage.page file and
                   //we should move it to a service file so that all more than just file ouotside the folder can touuch the file
                       //our goal in this is deliemma is to have a centralized data point

