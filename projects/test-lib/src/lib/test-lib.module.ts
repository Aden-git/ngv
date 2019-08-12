import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { ValidatorDirective } from './validator.directive';



@NgModule({
  declarations: [TestLibComponent, ValidatorDirective],
  imports: [
  ],
  exports: [TestLibComponent]
})
export class TestLibModule { }
