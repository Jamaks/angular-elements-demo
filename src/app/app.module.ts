import { NgModule } from '@angular/core';
import { MatRadioButton, MatRadioModule,
   MatCard, MatCardModule  } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first.component';

export const entryComponents = [
  MatRadioButton, MatCard,
  FirstComponent
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [
    { provide: 'TEST_VALUE', useValue: 'TEST' },
  ],
  declarations: [FirstComponent],
  entryComponents,
})
export class AppModule {
  ngDoBootstrap() { }
}
