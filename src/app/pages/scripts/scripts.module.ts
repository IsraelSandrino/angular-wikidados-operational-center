import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'src/app/shared/modules/ng-zorro-antd.module';
import { ScriptsRoutingModule } from './scripts-routing.module';
import { ScriptsComponent } from './scripts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ ScriptsComponent ],
  exports: [ ScriptsComponent ],
  imports: [
    CommonModule,
    ScriptsRoutingModule,
    NgZorroAntdModule,
    SharedModule
  ]
})
export class ScriptsModule { }
