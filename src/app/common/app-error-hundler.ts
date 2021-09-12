import { ErrorHandler, Inject, NgZone } from "@angular/core";

export class AppErrorHundler implements ErrorHandler {
  constructor() {}

  handleError(error) {
    //this.toastr.warning("An unexpected Error occurred");
    //alert("An unexpected Error occurred");
    console.log(error);
  }
}
