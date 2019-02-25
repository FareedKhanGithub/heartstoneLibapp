import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { TabsPage } from './tabs.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { CardDeckPage } from '../card/card-deck/card-deck.page';


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
        path: 'card-deck',
        outlet: 'card',
        component: CardDeckPage
      }

    ]
  },
  {
    path: '',                                  //rendering back to home page
    redirectTo: '/tabs/(card:card-deck)',        //rendering the home page
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
