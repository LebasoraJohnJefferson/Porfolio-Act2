import { Component, OnInit, Input } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() interestArray=['Back-End','Front-End']
  @Input() interest:string='Front-End';
  count:number=1
  constructor() { }

  ngOnInit(): void {
    Aos.init()
    setInterval(()=>{
      this.count%2==1 ? this.interest=this.interestArray[1] : this.interest=this.interestArray[0]
      this.count++
    },1500)
  }
}
