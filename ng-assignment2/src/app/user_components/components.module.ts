import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentsDemoComponent } from './components-demo/components-demo.component';
import { MyHighlightDirective } from './my-highlight.directive';




@NgModule({
    imports:[CommonModule],
    declarations:[ComponentsDemoComponent, MyHighlightDirective],
    exports:[ComponentsDemoComponent],
})
export class ComponentsModule{

}