import { Component } from "@angular/core";

@Component({
    template:
     `<button style="float:right;margin-top:30px;" class="btn btn-link" (click)="show=!show">
     {{show? 'Reactive Form':'Template Form'}}</button>
<div *ngIf="show, then thenBlock; else elseBlock">Forms</div>
<ng-template #thenBlock>
    <template-form></template-form>
</ng-template>
<ng-template #elseBlock>
    <reactive-form></reactive-form>
</ng-template>`
})
export class FormsComponent {
show:boolean=true;
}