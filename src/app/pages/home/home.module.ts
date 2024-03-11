import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from 'src/app/shared/modules/ng-zorro-antd.module';

@NgModule({
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule
  ]
})
export class HomeModule { }
