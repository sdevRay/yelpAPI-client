import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeyInterceptorService implements HttpInterceptor {

    yelpKey = "Wa29AFf1zWalIPDVYUkN3eRIvg9ztpotJVoM0MzTJ8jgdNy-5SY00xsn5dTRQsV854NU4o8kd0G0Hhktu63dFtOoMYdQW6eEZzHFxbyuzhJyJ4seUm9hIaMFLW9oW3Yx";

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const authHeader = req.clone({ 
            headers: req.headers.set('Authorization', `bearer ${this.yelpKey}`)        
        });
        
        return next.handle(authHeader);

    }
}