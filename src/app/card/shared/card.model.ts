

/*
import { Component } from '@angular/core';
import { CardService } from '../shared/card.service';

//import {enableProdMode} from '@angular/core';           //this was put on later needed for the debugger thing to work

import { HttpClient, HttpHeaders } from '@angular/common/http';




//import { CardDeck } from '../shared/card.model';


@Component({
    selector: 'app-card-deck',
    templateUrl: '/card-deck.page.html',
    styleUrls: ['./card-deck.page.scss']

})

export class CardDeckPage {

    constructor(private cardService: CardService) {
        //debugger;                //This debugger will stop the compilation, so you can see where the failure lies
                                       //will stop midway to through compilation, run it and it will be shown F12 stopped mid
        this.getCardDecks();
    }

    public cardDecks: CardDeck[] = [];        //list data data type      //we are iterating through this array





    private getCardDecks(){                               //one of the ways to get data from an observale is to subscribe to it

        this.cardService.getAllCardDecks().subscribe(
            (cardDecks: CardDeck[]) => {
                debugger;
                this.cardDecks = cardDecks})
    }
}


*/




export interface CardDeck {                 //this is merely just a function being classifiec
    name: string;
    types: string[];
}



//staticInjection error =

//framework