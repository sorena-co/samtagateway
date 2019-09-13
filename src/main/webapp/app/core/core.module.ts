import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import locale from '@angular/common/locales/fa';

import { FindLanguageFromKeyPipe } from 'app/shared';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from 'app/shared/util/datepicker-adapter';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: [
    Title,
    {
      provide: LOCALE_ID,
      useValue: 'fa'
    },
    { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter },
    FindLanguageFromKeyPipe,
    DatePipe
  ]
})
export class SamtagatewayCoreModule {
  constructor() {
    registerLocaleData(locale);
  }
}
