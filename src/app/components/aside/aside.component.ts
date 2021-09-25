import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @Input() isToggle:boolean=false;
  @Input() isShow:boolean=false;
  constructor() {
    this.isToggle = window.innerWidth<=768 ? true : false ;
    this.isShow = window.innerWidth<=768 ? true : false ;
  }

  ngOnInit(): void {
    window.addEventListener('resize',()=>{
      this.isShow = window.innerWidth<=768 ? true : false;
      this.isToggle = window.innerWidth<=768 ? true: false;
    })

  }

  toggleClassName(){
    this.isToggle=!this.isToggle
    this.isShow!=this.isShow
  }
}
