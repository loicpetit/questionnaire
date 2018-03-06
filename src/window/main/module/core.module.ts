import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { Util } from "./core/Util";

@NgModule({
  imports: [CommonModule],
  providers: [Util]
})
export class CoreModule { }
