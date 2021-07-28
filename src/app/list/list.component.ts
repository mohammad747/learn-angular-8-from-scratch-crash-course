import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: any;

  constructor(
    private httpService : HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getBear().subscribe(data => {
      this.brews = data;
      console.log(this.brews);

    });
  }

}
