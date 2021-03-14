import { Component, OnInit } from '@angular/core';
import { Soap } from 'src/app/_models/prod';
import { SoapService } from '../../_services/soap.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
 
  soap: Soap[];
  soapForm: FormGroup;

  constructor(
    private soapService: SoapService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createTeamForm();
    this.getSoaps();
  }

  createTeamForm() {
    this.soapForm = this.fb.group({
      soapName: ['', Validators.required]
    });
  }

  getSoaps() {
    this.soapService.getAllSoap().subscribe(soap => {
      this.soap = soap.slice(0, 14);
      console.log(soap);
    })
  }

  

  onSubmit() {
    let obj : Soap = {
      name: this.soapForm.value.soapName
    }
    this.soapService.addSoap(obj).subscribe(a => {
      this.getSoaps();
    })
    this.soapForm.reset();
    console.log(this.soapForm);
  }
  

}
