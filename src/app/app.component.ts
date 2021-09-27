import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'porfolio-using-angular'
  @Input() isLoading:boolean=true
  constructor() {
    setTimeout(()=>{
      this.isLoading=false;
    },3000)
  }

  ngOnInit(): void {
  }
}
