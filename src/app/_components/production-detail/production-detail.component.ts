import { Component, OnInit, Input } from '@angular/core';
import { Soap  } from 'src/app/_models/prod';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {SoapService} from 'src/app/_services/soap.service';
@Component({
  selector: 'app-production-detail',
  templateUrl: './production-detail.component.html',
  styleUrls: ['./production-detail.component.css']
})
export class ProductionDetailComponent implements OnInit {

soap: any;

  constructor(
    private route: ActivatedRoute,
    private SoapService: SoapService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSoapById();
  }

  getSoapById(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //+ -> parseInt()
    this.SoapService.getSoapById(id).subscribe(soaps => {
      this.soap = soaps;
      console.log(soaps);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save():void {
    this.SoapService.updateCar(this.soap).subscribe(() => this.goBack());
  }

  delete(soapId: number): void {
    this.SoapService.deleteSoap(soapId).subscribe(() => this.goBack());
  }

}
