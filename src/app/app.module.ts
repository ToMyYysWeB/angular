import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { ProductionComponent } from './_components/production/production.component';
import { RelationComponent } from './_components/relation/relation.component';
import { AboutComponent } from './_components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ProductionDetailComponent } from './_components/production-detail/production-detail.component';
import { AccountComponent } from './_components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductionComponent,
    RelationComponent,
    AboutComponent,
    ProductionDetailComponent,
    AccountComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
