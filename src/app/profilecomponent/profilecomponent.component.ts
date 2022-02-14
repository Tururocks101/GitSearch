import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profilecomponent.component.html',
  styleUrls: ['./profilecomponent.component.css']
})
export class ProfilecomponentComponent implements OnInit {

  profile:any[];

  constructor(private profileServices:ServiceService ) { 
    this.profileServices.getProfileInfo().subscribe(
      service =>{
        console.log(service);
        this.profile= this.profile;
       
      });
  }

  ngOnInit(): void {
  }

}
