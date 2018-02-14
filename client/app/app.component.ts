import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {TenantService} from './services/tenant.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TaskService,TenantService]
})

export class AppComponent { 
  title = 'Hello cheese';
}
