import { Component, NgModule, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Appointment } from '../models/appointment';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-appointment',
  imports:[FormsModule,CommonModule],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  ngOnInit(): void {
    console.log("I am loaded every time")
    let savedAppointments=localStorage.getItem("appointments")
    this.appointments=savedAppointments?JSON.parse(savedAppointments):[]
  }

  

  newAppointmentDate :Date = new Date();
  newAppointmentDescription :string =" ";

  appointments: Appointment[] = []

  addAppointment() {
  
    if(this.newAppointmentDate && this.newAppointmentDescription.trim().length){
      let newAppointment:Appointment = {
        id:this.appointments.length+1,
        description:this.newAppointmentDescription,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment);
      this.newAppointmentDate = new Date();
      this.newAppointmentDescription = "";
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }
  }
  deleteAppointment(index: number){
    this.appointments.splice(index,1);
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
    
  }
    
}
