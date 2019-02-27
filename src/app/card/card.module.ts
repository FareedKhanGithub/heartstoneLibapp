///////////////////////////////Most Important file for routing///////////////////////////////



import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';         //creates the angular file
import { CommonModule} from '@angular/common';             //for direct
import { HttpClientModule } from '@angular/common/http';



import { CardDeckPage } from './card-deck/card-deck.page';
import { CardListingPage } from './card-listing/card-listing.page';


import { CardDetailPage } from './card-detail/card-detail.page';

import { CardService } from './shared/card.service';
import { CardListComponent } from './components/card-list.component';


@NgModule({                                 //loads config data
    imports: [                                     //imported library module for angular framework to parse thru
        IonicModule,
        CommonModule,
        HttpClientModule                          //you need this module inorder to use http requests
    ],

    providers:[
        CardService                               //this is providing the api key and url so that we can do things with
        ],                                   //every file will need to have a citation to this card.service file as it gives the ability to reach api


    declarations:[   //declare this page pipes and etc are owned using this declarations only one per module, the function and files that you made that using the services above
        CardDeckPage,
        CardListingPage,
        CardListComponent,
        CardDetailPage
        ]
})


export class CardPageModule{}        //now we nned to import this file module to the tabs module file



//readonly = means only can read cannot edit this helps to prevent overwriting material or array elements