import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './core/layout/layout.component';
import { NgZorroAntdModule } from './shared/modules/ng-zorro-antd.module';
import { HeaderComponent } from './core/layout/header/header.component';
import { LogoComponent } from './core/layout/header/components/logo/logo.component';
import { NavbarComponent } from './core/layout/header/components/navbar/navbar.component';
import { AvatarComponent } from './core/layout/header/components/avatar/avatar.component';
import { FooterComponent } from './core/layout/footer/footer.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LogoComponent,
    NavbarComponent,
    AvatarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
