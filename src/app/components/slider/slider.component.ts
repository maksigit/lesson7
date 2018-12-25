import { Component, OnInit,ElementRef, AfterViewInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {

    public swiper;

  constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
        /**
         * - Here you are 100% sure, html is present on DOM, Swiper is initialize and is able to find your DOM element.
         * - Swiper constructor accept DOMElement as parameter, i recommand this approch to optimize DOM parsing.
         * - Because you store Swiper instance as attribute, you will be able to control Swiper by javascript.
         **/
        this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), {
            navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
        });
    }

  ngOnInit() {

  }
}


