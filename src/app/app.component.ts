import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"],
  imports: [AppointmentComponent],
})
export class AppComponent {
  title = 'appointment-app';
  message = "Hello world";
  message1=2;
}
