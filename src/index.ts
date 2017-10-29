import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BjaPaginationComponent} from './bja-pagination.component';

export * from './bja-pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      BjaPaginationComponent
  ],
  exports: [
      BjaPaginationComponent
  ]
})
export class BjaPaginationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BjaPaginationModule
    };
  }
}
