import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })

export class RepPrintService {

  printRep(tableId: string,
    reportName?: string,
    rtl = false,
  ) {

    let printContents, popupWin;
    printContents = document.getElementById(tableId)!.innerHTML;
    console.log(printContents);
    popupWin = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    popupWin!.document.open();
    popupWin!.document.write(`
    <html>
    <head>
    <link rel="stylesheet" href="assets/print/print.scss">
      <title>${reportName}</title>

    </head>
    <body style="padding:10px, text-align: center;" onload="window.print();window.close()">
    ${this.header('Qattan report')}
    <table>${printContents}</table></body>
    </html>`);
    // popupWin!.document.close();
  }

  // report Title company name & logo
  private header(title?: string): string {
    return `
  <header>
  <div class="header">
    <div class="child"><img src="assets/print/logo-dark.png"> </div>
    <div class="title"><h3>Kuwait Investment Company</h3>${title}</div>
  </div>
  </header>
  `

  }
}
