import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';

import { Card } from '../shared/card.model'




@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})


export class CardListingPage{
  cardDeckGroup: string;
  cardDeck: string;                         //this is the data type in which uses the name of the file you clicked

  cards: Card[] = [];


  constructor(private route: ActivatedRoute,
              private cardService: CardService){ }
      //we removed on the implemantation as Ionic version was going to be easier to use in this case
          //lifecycle function ion views, this link will talk about the lifecycle functions that Ionic uses



  ionViewWillEnter(){
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');       //what does this.routesnapshot meaning

    this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
         //the subscribes helps with getting values in other card-deck files
        (cards: Card[]) => {
          this.cards = cards;
        })

      }



}
