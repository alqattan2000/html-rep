import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })

export class RepPrintService {

  printRep(tableId: string, name?: string) {

    let printContents, popupWin;
    printContents = document.getElementById(tableId)!.innerHTML;
    console.log(printContents);
    popupWin = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    popupWin!.document.open();
    popupWin!.document.write(`
    <html>
    <head>
      <title>Print tab</title>

    </head>
    <body style="direction: rtl;padding:10px, text-align: center;" onload="window.print();window.close()"><table class="table table-bordered">${printContents}</table></body>
    </html>`);
    popupWin!.document.close();
  }

}
