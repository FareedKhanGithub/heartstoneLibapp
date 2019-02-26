import { Injectable } from '@angular/core';              //will inject metadata
import {of as ObservableOf, Observable} from 'rxjs';          //you want Observables here
import { HttpClient, HttpHeaders } from '@angular/common/http';         //allow
 //HttpClient = service responsible to sending request
 //HttpHeaders= set header of the client via api key



import { CardDeck, Card } from './card.model';         //you want file from the same folder




//CardDeckPage = responnsible for fetching data
//CardListComponent = responsible for transforming and displaying data





@Injectable()       //resolving requested instances , can also store resolved instances

export class CardService{

          //this api key was given rapid api .com website in the cURL section

        //then you copy the url and the api key but only the content, it seems that the strings before are added like getAllCardDecks():

    private readonly HS_API_URL = 'xxx';

    private readonly API_KEY = 'xxx';
    private headers: HttpHeaders;

                                                                                         // used to be   //   /info there at end of url
                                                                                           //he will be adding /info later in there
                                                                                    //the guy has a slightly different url and he gave us this one



    constructor(private http: HttpClient){
        this.headers = new HttpHeaders({'X-RapidAPI-Key': this.API_KEY});

    }




    public getAllCardDecks(): Observable<CardDeck[]>{           //thiis type overriding
        return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers: this.headers});  //needs to inject the early service
                          //the < > means we want to get it back as CardDeck[]
    }



    public getCardsByDeck(cardDeckGroup: string, cardDeck: string): Observable<Card[]>{
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardDeckGroup}/${cardDeck}`, {headers: this.headers});
    }

    public getCardById(cardId: string): Observable<Card[]>{           //allows api access
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardId}`, {headers: this.headers});

    }
}