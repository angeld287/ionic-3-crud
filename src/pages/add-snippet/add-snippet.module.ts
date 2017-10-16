import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSnippetPage } from './add-snippet';

@NgModule({
  declarations: [
    AddSnippetPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSnippetPage),
  ],
  exports: [
    AddSnippetPage
  ]
})
export class AddSnippetPageModule {}
