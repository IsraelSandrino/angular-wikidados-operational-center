import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { NgZorroAntdModule } from 'src/app/shared/modules/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';

@NgModule({
  declarations: [
    LibraryComponent,
    AdvancedSearchComponent
  ],
  exports: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NgZorroAntdModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LibraryModule { }
