import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuItems =["Home","Dashboard","Event"];
  selectItem = null;
  menuItemss =[
    {title:"Home",icon:"home",link:"/pages/home"},
    {title:"Dashboard",icon:"account_balance",link:"/pages/dashboard"},
    {title:"Event",icon:"event",link:"/pages/event"},
    {title:"Forms",icon:"list_alt",children:[
      {
        title:"Input",
        link:"/pages/forms/input"
      }
    ]},
    {title:"Auth",icon:"lock",children:[
      {
        title:"Login",
        link:"/auth/login"
      },
      {
        title:"Register",
        link:"/auth/register"
      }
    ]}

  ]
  constructor() { }

  ngOnInit(): void {
  }
  onSelectItem(e){
    this.selectItem = e;
    if(e.children) e.collapse = !e.collapse; 
  }

}
