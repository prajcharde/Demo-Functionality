import { Component, ViewChild, TemplateRef } from "@angular/core";
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from "@angular/router";
import { IMyDpOptions } from 'mydatepicker';
import { ToastrService } from "ngx-toastr";
import { User } from "app/forms/components/template-forms/user";
import { HttpClient } from "@angular/common/http";
import { appConfig } from "app/core/config/app.config";
@Component({
    selector: 'template-form',
    templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {

    @ViewChild('childModal') public childModal: ModalDirective;
    public user: User; // our model
    constructor(private http: HttpClient,private router: Router, private toastr: ToastrService) { }

    /*private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd-mm-yyyy',
    };*/

    ngOnInit() {
        this.user = new User("","","","");
    }


    gotoReactiveForm() {
        this.router.navigate(['/forms/reactive-form']);
    }

  createCustomer(model: User, isValid)//check the filled details is valid or not
   {
      debugger;
        if (!isValid) {
            this.toastr.error('Please fix errors');
            //this.childModal.show();    
        } else {
            debugger;
            this.http.post(`${appConfig.apiUrl}/customers`,model ,{ observe: 'response' }).subscribe(data=>{

            })
            console.log(model)
        }

    } 

    public hideChildModal() {
        this.childModal.hide();
    }
}