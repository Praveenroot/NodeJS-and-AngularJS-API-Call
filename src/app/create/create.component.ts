import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }

}
