import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadManagerComponent } from './upload-manager.component';
import { DropzoneModule  } from 'ngx-dropzone-wrapper';
import { MediaService } from './upload-manager.service';
import { ApiConfig } from  '../shared/api.config';

import { UploadManagerRoutingModule } from './upload-manager-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UploadManagerRoutingModule,
    DropzoneModule
  ],
  declarations: [ UploadManagerComponent ],
  providers: [ ApiConfig, MediaService ]
})
export class UploadManagerModule { }
