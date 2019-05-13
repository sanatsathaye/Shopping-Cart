import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('liForShow') listItem: ElementRef;
  @ViewChild('anchor') anchorEle: ElementRef;
  @ViewChild('divForShow') divElement: ElementRef;
  private isOpen: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  toggleState() {
    this.isOpen = !this.isOpen;
  }

  addClasses() {
    this.renderer.addClass(this.listItem.nativeElement, "show");
    this.renderer.addClass(this.divElement.nativeElement, "show");
  }

  removeClasses() {
    this.renderer.removeClass(this.listItem.nativeElement, "show");
    this.renderer.removeClass(this.divElement.nativeElement, "show");
  }

  blur($event) {
    if ($event.relatedTarget == null || $event.relatedTarget.parentElement.parentElement != this.listItem.nativeElement) {
      if (this.checkForClasses()) {
        this.removeClasses();
        this.toggleState()
      }
    }
    else {
      setTimeout(() => {
        this.removeClasses();
        this.toggleState();
      }, 300);
    }


  }




  checkForClasses() {
    let el = this.listItem.nativeElement.querySelector('.show');
    if (el != undefined || null)
      return true;
    return false;
  }


  triggerChange() {
    if (!this.isOpen) {
      this.addClasses();
    }
    if (this.isOpen) {
      this.removeClasses();
    }
    this.toggleState();


  }


}