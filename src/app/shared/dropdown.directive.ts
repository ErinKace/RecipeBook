import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    // @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.addClass(this.elementRef.nativeElement, 'open');
    // }
    // @HostListener('mouseleave') mouseleave(eventData: Event) {
    //     this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    // }
    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
    }