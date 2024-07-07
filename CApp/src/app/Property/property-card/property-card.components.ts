import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-property-card',
        //template: `<h1>Hi</h1>`
        templateUrl: `property-card.component.html`,
        styleUrls: ['property-card.component.css'],
    }
)

export class PropertyCardComponent{
Property:any= {
    "Id":1,
    "Name":"Arshith House",
    "Type":"House",
    "Price":12000
}
}