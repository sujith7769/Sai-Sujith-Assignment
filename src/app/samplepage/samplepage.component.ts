import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table';
import { BreakComponent } from '../break/break.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-samplepage',
  templateUrl: './samplepage.component.html',
  styleUrls: ['./samplepage.component.scss']
})
export class SamplepageComponent {
  Retaildata:any=[];




constructor(private fb: FormBuilder,private dialog:MatDialog,private http:HttpClient) {}

ngOnInit(): void {
  this.http.get('https://api.kalpav.com/api/v1/product/category/retail').subscribe(
    (data:any) => 
    {
      console.log(data.response,"data")
      
      for (let index = 0; index < data.response.length; index++) {
        this.Retaildata.push(data.response[index].productCategory)
        
      }
      
     
    }
    
    );
}

breakPopUp()
{
  const dialogref = this.dialog.open(BreakComponent,{
    width:'500px',
    height:'54%'
  })

}
submitForm() {
  throw new Error('Method not implemented.');
  }
  
 

 

 ;
}
 
// Replace 'Element' and 'ELEMENT_DATA' with your actual data model and data





