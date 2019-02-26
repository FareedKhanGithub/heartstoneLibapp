import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { TabsPage } from './tabs.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { CardDeckPage } from '../card/card-deck/card-deck.page';
import { CardListingPage } from '../card/card-listing/card-listing.page';

import { CardDetailPage } from '../card/card-detail/card-detail.page';



const routes: Routes = [
  {
    path: 'tabs',         //refering to tabs.page   //these children are loading pages
    component: TabsPage,       //rdnering the bottom childen
    children: [
      {
        path: 'about',
        outlet: 'about',    //(old example) when path that is named about its outlet will go to undef
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },

      {
        path: 'card',
        outlet: 'card',
        component: CardDeckPage
      },

      {
        path: 'card/:cardId',
        outlet: 'card',
        component: CardDetailPage
      },

      {
        path: 'card/:cardDeckGroup/:cardDeck',
        outlet: 'card',
        component: CardListingPage
      }
    ]
  },

  {
    path: '',                                  //rendering back to home page
    redirectTo: '/tabs/(card:card)',        //rendering the home page
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
