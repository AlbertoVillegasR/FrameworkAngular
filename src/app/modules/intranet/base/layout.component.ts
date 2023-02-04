import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'layout-component-',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 500) {
      this.small = true;
    } else {
      this.small = false;
    }
  }
  small: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const layout = document.getElementById("layout");
    if (layout.clientWidth <= 500) {
      this.small = true;
    } else {
      this.small = false;
    }
  }

  showAsideDynamic() {
    //   let aside = document.getElementById("aside-dynamic");
    //   let layout = document.getElementById("layout");
    //   let maside = document.getElementById("aside-dynamic-mobile");
    //   aside.setAttribute("style", "display:flex !important; z-index:1000; position: absolute");
    //   layout.setAttribute("style", "background-color: rgba(0,0,0,0.5) !important");
    //   maside.setAttribute("style", "display:none !important;");
    //   const div = document.createElement("div");
    //   div.className = "float-end";
    //   div.setAttribute("style", "z-index:1000;position: absolute;top: 0;right: 0px;height: 100%;width:calc(100% - 200px)");
    //   div.setAttribute("id", "div-aside");
    //   document.querySelector("#layout").appendChild(div)
    //   setTimeout(() => {
    //     document.addEventListener('click',(event: any) => {
    //       const box = document.getElementById('aside-dynamic');
    //       const outAside = document.getElementById("div-aside");
    //       if (!box.contains(event.target)) {
    //         aside.setAttribute("style", "display:none !important");
    //         layout.removeAttribute("style");
    //         maside.setAttribute("style", "display:flex !important;");
    //         outAside.remove();
    //         document.removeEventListener('click',()=>{});
    //       }
    //     });
    //   }, 300)
  }
}
