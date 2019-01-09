import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListTableComponent} from './components/list-table/list-table.component';
import {SliderComponent} from './components/slider/slider.component';
import {PostComponent} from './components/post/post.component';

import {RouterModule, Routes} from '@angular/router';

import {SlickModule} from 'slick-carousel';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {ChartModule} from 'primeng/chart';
import { ChartComponent } from './components/chart/chart.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import {CarouselModule} from 'primeng/carousel';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

const appRoutes: Routes = [
    {path: 'list-table', component: ListTableComponent},
    {path: 'slider', component: SliderComponent},
    {path: 'post', component: PostComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ListTableComponent,
        SliderComponent,
        PostComponent,
        // AccordionModule,
        // MenuItem,
        ChartComponent,
        CaruselComponent,
        ParentComponent,
        ChildComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only

        ),
        SwiperModule,
        BrowserAnimationsModule,
        MatListModule,
        MatTableModule,
        ChartModule,
        CarouselModule
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
