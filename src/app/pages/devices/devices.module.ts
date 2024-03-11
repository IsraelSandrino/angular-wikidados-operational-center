import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'src/app/shared/modules/ng-zorro-antd.module';
import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ DevicesComponent ],
  exports: [ DevicesComponent ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NgZorroAntdModule,
    SharedModule
  ]
})
export class DevicesModule { }
