import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from './api.service';
import { RequestInterceptor } from './request-interceptor';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: [ApiService, [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }]],
  declarations: [],
})
export class ApiModule {}
