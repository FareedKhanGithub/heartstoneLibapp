import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';

import {Card }from '../shared/card.model'




@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
})


export class CardDetailPage {

    card: Card;                          //type card has things inside it, for you to recover from the card.service file.


  constructor(private route: ActivatedRoute,
              private cardService: CardService){ }
      //we removed on the implemantation as Ionic version was going to be easier to use in this case
          //lifecycle function ion views, this link will talk about the lifecycle functions that Ionic uses



  ionViewWillEnter(){
        const cardId = this.route.snapshot.paramMap.get('cardId');                     //route snapshot param Map




        this.cardService.getCardById(cardId).subscribe(
            (card: Card[]) => {
                this.card = card[0];
            })
  }

  updateImage(){
      this.card.img = '/assets/image/DefaultCard.png'
  }

}