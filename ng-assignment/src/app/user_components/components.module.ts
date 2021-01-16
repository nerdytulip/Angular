import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentsDemoComponent } from './components-demo/components-demo.component';



@NgModule({
    imports:[CommonModule],
    declarations:[ComponentsDemoComponent],
    exports:[ComponentsDemoComponent],
})
export class ComponentsModule{

}