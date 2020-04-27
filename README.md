# Guard
 Use DataGuard

```
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.alertify.error('دسترسی به مسیر موجود نیست');
    this.router.navigate(['/home']);
    return false;
  }
}
```
# Resolver
 Use Resolver


```
@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService,
    private autService: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.autService.decodedToken.nameid).pipe(
      catchError((error) => {
        this.alertify.error('Problem retieving your data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
```
