import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RmgerpComponent } from './rmgerp/rmgerp.component';
import { ThreeDComponent } from './three-d/three-d.component';
import { VideoComponent } from './video/video.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ThreeDwashingMachineComponent } from './three-dwashing-machine/three-dwashing-machine.component';
import { ThreeDsolarSystemComponent } from './three-dsolar-system/three-dsolar-system.component';
import { TestComponent } from './test/test.component';
import {ProfilePageService} from "./profile-page.service";
import { TwoDComponent } from './two-d/two-d.component';
import { TwoDsweetDreamsComponent } from './two-dsweet-dreams/two-dsweet-dreams.component';
import { HobbyComponent } from './hobby/hobby.component';
import {ContentService} from "./content.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RmgerpComponent,
    ThreeDComponent,
    VideoComponent,
    GraphicsComponent,
    ThreeDwashingMachineComponent,
    ThreeDsolarSystemComponent,
    TestComponent,
    TwoDComponent,
    TwoDsweetDreamsComponent,
    HobbyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'rmg', component: RmgerpComponent},
      {path: 'threeD', component: ThreeDComponent},
        {path: 'threeDWashingMachine', component: ThreeDwashingMachineComponent},
        {path: 'threeDSolarSystem', component: ThreeDsolarSystemComponent},
      {path: 'twoD', component: TwoDComponent},
        {path: 'twoD-sweetDreams', component: TwoDsweetDreamsComponent},
      {path: 'hobby', component: HobbyComponent},
        {path: 'video', component: VideoComponent},
        {path: 'graphics', component: GraphicsComponent},
      {path: 'test', component: TestComponent},
    ])
  ],
  providers: [
    ProfilePageService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
