import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting.component';
import { ParentComponent } from './parent.component';
import { ChildComponent} from './child.component';
import { SiblingComponent} from './sibling.component';
import { Registration } from './forms.component';
import { ModelFormComponent } from './model-form.component';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, GreetingComponent, ParentComponent, ChildComponent, SiblingComponent,
                  Registration, ModelFormComponent ],
  bootstrap:    [AppComponent]
})
export class AppModule { }
