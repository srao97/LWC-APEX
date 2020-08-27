import { LightningElement } from 'lwc';
import getContact from '@salesforce/apex/ConList.getContact';
export default class ApexImperativeMethod extends LightningElement {
    contacts;
    error;

    loadContactHandler(){
        getContact().then((result)=>{
            this.contacts = result;
            this.error = undefined;
        })
        .catch((error)=>{
            this.error = error ;
            this.contacts = undefined;
        });
    }
}