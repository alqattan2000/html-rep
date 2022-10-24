import { Component } from '@angular/core';
import { RepPrintService } from './Services/print/rep-print.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[RepPrintService]
})
export class AppComponent {
  constructor(private RepPrintService: RepPrintService) {}
  title = 'html-rep';
  exportTable(){
    console.log('fdsf','fsdf')
  this.RepPrintService.printRep('print','Statment Of Account',true)
  }
}
