import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSnippetPage } from './edit-snippet';

@NgModule({
  declarations: [
    EditSnippetPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSnippetPage),
  ],
  exports: [
    EditSnippetPage
  ]
})
export class EditSnippetPageModule {}
