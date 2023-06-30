import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
 
})
export class MenuModule {
  listMenu: Array<string[]>=[
    ['standarts', 'standarts-menu', '1'], ['turning', 'turning-menu', '11'], ['carousel', 'carousel-menu', '12'],
    ['milling', 'milling-menu', '13'], ['boring', 'boring-menu', '14'], ['tp', 'tp-menu', '2'], ['auto', 'auto-menu', '3'],['third','third-menu','141']];
 

  handleEvent(event: MouseEvent) {
    switch (event.type) {
      case 'click':
        this.click(event)
        break;
      case 'mouseover':
        this.mouseover(event);
        break;
    }
  }

  click(event: MouseEvent): void {
    let targ: any = event.target;
    const arr = this.listMenu.filter((item) => item[2].length === 1);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === targ.id) {
        if (document.getElementById(arr[i][1])!.style.visibility === "visible") {
          document.getElementById(arr[i][1])!.style.visibility = "hidden";
        } else {
          document.getElementById(arr[i][1])!.style.visibility = "visible";
        }
        return;
      }
    }
    if (this.listMenu.filter(item => item[0] === targ.id).length === 0) {
      for (const elem of this.listMenu) {
        document.getElementById(elem[1])!.style.visibility = "hidden";
      }
    }
  }

  mouseover(event: MouseEvent): void {
    let targ: any = event.target;
    const arr1 = this.listMenu.filter(item => item[0] === targ.id && item[2].length === 1);//для главного меню
    if (arr1.length > 0) {
      for (const element of this.listMenu.filter(item => item[2].length === 1)) {
        if (document.getElementById(element[1])?.style.visibility === 'visible') {
          for (const elem of this.listMenu) {
            document.getElementById(elem[1])!.style.visibility = "hidden";
          }
          document.getElementById(arr1[0][1])!.style.visibility = "visible";
          return;
        }
      }
    }
    const arr2 = this.listMenu.filter(item => item[0] === targ.id && item[2].length > 1);//для подменю
    if (arr2.length > 0) {
      for (const element of this.listMenu.filter(item => item[2].length >= arr2[0][2].length && item[2][0] === arr2[0][2][0])) {
        document.getElementById(element[1])!.style.visibility = "hidden";
      }
      document.getElementById(arr2[0][1])!.style.visibility = "visible";
    }
  }

}

















