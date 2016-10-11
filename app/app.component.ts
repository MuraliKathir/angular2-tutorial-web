import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
              <h1>Angular2 Tutorial Web</h1>
              <div [hidden] = true >
                <greeting></greeting>
                <parent></parent>
              </div>
              <register-form> </register-form>
              <model-form></model-form>
            `
})
export class AppComponent { }
