import { Component } from '@angular/core';
import { HeaderService } from './Shared/Service/header-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Constructor';

  constructor(public headerService: HeaderService) {}
}
