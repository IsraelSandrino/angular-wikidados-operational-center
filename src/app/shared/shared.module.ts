import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NgZorroAntdModule } from './modules/ng-zorro-antd.module';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    TableComponent,
    PageTitleComponent,
    SearchBarComponent
  ],
  exports: [
    TableComponent,
    PageTitleComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
