import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeyInterceptorService implements HttpInterceptor {

    yelpKey = "Wa29AFf1zWalIPDVYUkN3eRIvg9ztpotJVoM0MzTJ8jgdNy-5SY00xsn5dTRQsV854NU4o8kd0G0Hhktu63dFtOoMYdQW6eEZzHFxbyuzhJyJ4seUm9hIaMFLW9oW3Yx";

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let headers = req.headers
            .set('Access-Control-Allow-Origin', 'https://yelpapi-client.herokuapp.com/')
            .set('Authorization', `bearer ${this.yelpKey}`);

        const cloneReq = req.clone({ headers });

        return next.handle(cloneReq)
        
        // const headers = new HttpHeaders({
        //     "Content-Type": "application/json",
        //     'Access-Control-Allow-Origin':'https://yelpapi-client.herokuapp.com/',
        //     'Authorization': `bearer ${this.yelpKey}`
        // });

        // const cloneReq = req.clone({headers});
        // return next.handle(cloneReq);
        
        // const authHeader = req.clone({ 
        //     headers: req.headers.set('Authorization', `bearer ${this.yelpKey}`),
        //     headers: req.headers.append('Access-Control-Allow-Origin','https://yelpapi-client.herokuapp.com/')
        
        // });
        
        // return next.handle(authHeader);

        
    }
}