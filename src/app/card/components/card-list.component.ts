import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html'

})

    //still needs work he will get here at end of video
                //it seems that working duringthe weekend is really hard why??


export class CardListComponent {
    @Input() items: any[] = [];
    @Input() listName: string;

    @Input() navigateTo: any;                      //allows input




   //ngFor = "let cardDeck of cardDecks"            cardDeck.types = items
                                             //     cardDeck.name = listName

}