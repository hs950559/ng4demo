import {Component, OnInit} from '@angular/core';
import {ApiConfig} from "../shared/api.config";
// import {AuthService} from "../../services/core/auth.service";
// import {UserService} from "../../services/custom/user.service";
// import {LoopBackFilter} from "../../models/base.model";
import { DropzoneConfigInterface  } from 'ngx-dropzone-wrapper';
import { MediaService } from './upload-manager.service';
@Component({
    selector: 'app-upload',
    templateUrl: './upload-manager.component.html',
    styleUrls: ['./upload-manager.component.scss']
})
export class UploadManagerComponent implements OnInit {

    public title: string;
    public actionButton: string;
    public cancelButton: string;
    public selectedMedia: any[] = [];
    public selectLimit: number = 1;
    public acceptedFiles: any;
    public library: any[] = [];
    notifyMessage: string;
    uploadErrorMessage: string;
    selectedTabIndex: number = 0;
    libraryLoadMoreButton: string = "Load more";

    tabLibraryActive: boolean = false;
    imageFileTypes: string[] = [
        'image/jpeg',
        'image/gif',
        'image/png',
        'image/bmp'
    ];

    filter: any = {
        limit: 24,
        skip: 0,
        order: ['createdAt DESC'],
        include: {}
    };

    public config: DropzoneConfigInterface = {
        headers: {},
        server: ApiConfig.getMediaUploadPath(),
        maxFilesize: ApiConfig.getDefaultMediaUploadMaxFilesize(),
        acceptedFiles: this.acceptedFiles,
        uploadMultiple: false,
        autoReset: 200
    };

    constructor(private mediaService: MediaService) {

    }

    ngOnInit() {

        if (this.acceptedFiles) {
            this.config.acceptedFiles = this.acceptedFiles;
            let fileTypes: string[] = this.acceptedFiles.split(',');
            console.log(fileTypes);
            let whereOr = [];
            this.filter.where = {and: []};
            if (fileTypes.length) {
                fileTypes.forEach((name) => {
                    whereOr.push({type: name});
                });

                this.filter.where = {or: whereOr};
            }

        }
        this.loadMediaLibrary();
        // if (this.auth.getAccessTokenId()) {
        //     let authHeader = {"Authorization": ApiConfig.getAuthPrefix() + this.auth.getAccessTokenId()};
        //     this.config.headers = Object.assign(this.config.headers, authHeader);
        // }

    }

    onUploadSuccess(event: any) {


        this.uploadErrorMessage = null;
        this.selectedTabIndex = 1;
        if (event && typeof (event[1] !== "undefined") && event[1] !== null) {
            let uploadedItems = event[1].result.files.file;
            console.log(this.library.length)
            this.library = uploadedItems.concat(this.library);
            // this.filter.skip = this.filter.skip + uploadedItems.length;
            // console.log(this.library)
            // console.log(this.library.length)

            // for (let i = 0; i < uploadedItems.length; i++) {
            //     this.onSelectMedia(uploadedItems[i]);
            // }

        }
    }

    onUploadError(event: any) {
        this.uploadErrorMessage = "An error uploading your file.";
    }

    // onTabChange(event: any) {

    //     if (this.tabLibraryActive == false) {

    //         this.loadMediaLibrary();
    //     }
    //     if (event.index == 1) {
    //         this.tabLibraryActive = true;
    //     }
    // }

    loadMediaLibrary() {

        this.libraryLoadMoreButton = "Loading...";
        // let userId = this.auth.getCurrentUserId();

        this.mediaService.getMedia().subscribe(media => {
            this.libraryLoadMoreButton = "Load more";
            if (!media || media.length == 0) {
                this.libraryLoadMoreButton = "You're reached end of the list.";
            }
            if (this.library.length) {

                this.library = this.library.concat(media);
            } else {
                this.library = media;
            }
        });
    }

  removeMedia(media){
    this.mediaService.removeMedia(media.name)
      .subscribe(()=>{
        this.library.splice(this.library.indexOf(media), 1);
      });
  }

    findById(items: any, item: any): number {
        if (items && items.length) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id == item.id) {
                    return i;
                }
            }
        }
        return null;
    }

    isSelectedMedia(item: any): boolean {
        let items = this.selectedMedia;

        if (items && items.length) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id == item.id) {
                    return true;
                }
            }
        }
        return false;
    }

    onSelectMedia(item: any) {
        if (this.selectedMedia.length <= this.selectLimit) {
            this.notifyMessage = null;
        }
        let indexValue = this.findById(this.selectedMedia, item);
        if (indexValue !== null) {
            this.selectedMedia.splice(indexValue, 1);
        } else {
            if (this.selectLimit > this.selectedMedia.length) {
                this.selectedMedia.push(item);
            } else {
                this.notifyMessage = "Only allow select maximum " + this.selectLimit;
            }

        }
    }

    loadMoreLibrary() {
        this.libraryLoadMoreButton = "Loading...";

        this.filter.skip = this.filter.skip + this.filter.limit;
        this.loadMediaLibrary();
    }

    isImageFileType(fileType: string): boolean {
        for (let i = 0; i < this.imageFileTypes.length; i++) {
            if (fileType === this.imageFileTypes[i]) {
                return true;
            }
        }
        return false;
    }
}
