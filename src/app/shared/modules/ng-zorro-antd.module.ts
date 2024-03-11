import { NgModule } from '@angular/core';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  exports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzDividerModule,
    NzAvatarModule,
    NzDropDownModule,
    NzTableModule,
    NzSwitchModule,
    NzSelectModule,
    NzAlertModule
  ]
})
export class NgZorroAntdModule { }
