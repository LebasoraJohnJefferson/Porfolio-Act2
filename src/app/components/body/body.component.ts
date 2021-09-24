import { Component, OnInit, Input } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() knowledgeArray=['BackEnd','FrontEnd']
  @Input() knowledge:string='';
  count:number=1
  constructor() { }

  ngOnInit(): void {
    Aos.init()
    setInterval(()=>{
      this.count%2==1 ? this.knowledge=this.knowledgeArray[1] : this.knowledge=this.knowledgeArray[0]
      this.count++
    },3000)
  }
}
