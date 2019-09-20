import { Component, OnInit, Input } from '@angular/core';
import { SupportService } from '../support.service';
import { UserService } from 'src/app/gen-services/user.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
@Input() ticket_data;
  constructor(private supSer:SupportService, 
              public usSer:UserService,
              private fb:FormBuilder,
              private http : HttpClient
              ) { }
  documents:any;
  selectedFile:any=null;
  profileForm: FormGroup;
  ngOnInit() {
    this.documentsList();

    this.profileForm = this.fb.group({
      name: [''],
      profile: [''],
      model: ['documents'],
      view: ['upload'],
    });
    
  }

  onSelectedFile(event){
    this.selectedFile = event.target.files[0];
    this.selectedFile.module = 'documents';
    const file = event.target.files[0];
      this.profileForm.get('profile').setValue(this.selectedFile);
    }

    onSubmit(){

    if(this.selectedFile!=null){
      const formData = new FormData();
      formData.append('name', this.profileForm.get('name').value);
      formData.append('document', this.selectedFile);
      formData.append('ticket_id', this.ticket_data);
      formData.append('contact_id', this.usSer.currentUserDetails().id);
      console.log(formData)
      console.log(this.profileForm.value);
    this.http.post(this.usSer.serverUrl,formData).subscribe(
      data=>console.log(data),
      err => console.log(err)
    )
     
    } 
    }

  documentsList(){
   this.supSer.getDocumentsList(this.ticket_data).subscribe(
     data => this.documents = data ==''? false : data,
     err => console.log(err)
   )
  }
}
