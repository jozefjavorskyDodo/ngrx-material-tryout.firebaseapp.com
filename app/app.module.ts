
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { stateReducer } from "./reducer";
import { AppComponent } from "./app.component";
import { StateComponent } from "./state/state.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    imports: [
        BrowserModule,
        StoreModule.forRoot({ int_num: stateReducer }),
        MatButtonModule
    ],
    declarations: [
        AppComponent,
        StateComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }