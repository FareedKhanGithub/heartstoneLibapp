import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';         //creates the angular file
import { CommonModule} from '@angular/common';             //for direct
import {HttpClientModule } from '@angular/common/http';



import { CardDeckPage } from './card-deck/card-deck.page';
import { CardListingPage } from './card-listing/card-listing.page';


import { CardService } from './shared/card.service';
import { CardListComponent } from './components/card-list.component';


@NgModule({                                 //loads config data
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule                          //you need this module inorder to use http requests
    ],

    providers:[
        CardService
        ],


    declarations:[   //declare this page pipes and etc are owned using this declarations only one per module
        CardDeckPage,
        CardListingPage,
        CardListComponent
        ]
})


export class CardPageModule{}        //now we nned to import this file module to the tabs module file