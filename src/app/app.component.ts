import { Component } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';



import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To Mohan';
  isExpanded = true;

  public isCollapsed = false;
  

  private menuItemsArray: any[] = [ 
       {"title":"Electricity","link":"new-cmp"},
       {"title":"Mobile Bill","link":"new-cmp"},
       {"title":"Home and Kitchen","link":"new-cmp",
       "subItems":[
                   {"title":"Furniture","link":"new-cmp"},
                   {"title":"Cookware","link":"new-cmp"},
                  ]
       },
       {"title":"Car and Bike Accessories","link":"new-cmp",
        "subItems":[
                     {"title":"Tyres and Alloys","link":"new-cmp"},
                     {"title":"Comfort and Safety","link":"new-cmp"},
                    ]
       },
 ];

  public onMenuClose(){
    console.log("menu closed");
  }
  public onMenuOpen(){
    console.log("menu Opened");
  }
  private onItemSelect(item:any){
    console.log(item);
  }

  
}
