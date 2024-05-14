// autres imports
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  start: number = Date.now();
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.urlWithParams); // J'affiche l'url avec les params
    // Je passe la requête à la suite des interceptors cachés d'angular
    // Et je retourne ce résultat pour que la requête ait bien lieu
    return next.handle(req).pipe(
      // tap est un observable qui indique : "Je fais des actions sans modifier la réponse"
      tap((response) => {
        // On s'assure qu'il s'agit bien d'une réponse http
        if (response instanceof HttpResponse) {
          const millis = Date.now() - this.start;
          console.log(`seconds elapsed = ${millis / 1000} secondes`);

          // Ici sera le code exécuté à la réponse du serveur
          // Dans le cas où tout s'est bien passé
        }
      })
    );
  }
}
