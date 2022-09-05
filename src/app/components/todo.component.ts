import { Component, Input } from "@angular/core";
import ToDo from "../model/ToDo";

@Component({
    selector : 'todo',
    templateUrl : './todo.component.html'
})
export class TodoComponent {

    @Input() todo! :ToDo;

}