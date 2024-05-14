import { Component } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'interceptor';
  data: any;
  constructor(private GetDataService: GetDataService) {}
  ngOnInit() {
    this.GetDataService.getData().subscribe((arg) => {
      this.data = arg;
    });
  }
}
