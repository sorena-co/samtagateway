import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SamtagatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SamtagatewaySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SamtagatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SamtagatewaySharedModule {
  static forRoot() {
    return {
      ngModule: SamtagatewaySharedModule
    };
  }
}
