import { Component, EventEmitter, Input, Output } from "@angular/core";
import ToDo from "../model/ToDo";

@Component({
    selector : 'todos',
    templateUrl : './todos.component.html'
})
export class TodosComponent {

    @Input() todos! : ToDo[];
    @Output() toggle = new EventEmitter();
    @Output() delete = new EventEmitter();

    handleToggleClick( target : number ):void{
        this.toggle.emit( target );
    }
    

}