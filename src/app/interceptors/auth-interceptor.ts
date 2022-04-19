import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private notification: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.token || "";

    const authReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${authToken}`),
    });

    return next.handle(authReq).pipe(tap({ error: this.handleError.bind(this) }));
  }

  handleError(error: HttpErrorResponse) {
    this.notification.error(error.error.message || error.message);
  }
}
