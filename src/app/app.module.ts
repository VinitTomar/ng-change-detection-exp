import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { EComponent } from './e/e.component';
import { FComponent } from './f/f.component';
import { GComponent } from './g/g.component';
import { HComponent } from './h/h.component';
import { IComponent } from './i/i.component';
import { JComponent } from './j/j.component';
import { KComponent } from './k/k.component';
import { LComponent } from './l/l.component';
import { MComponent } from './m/m.component';
import { NComponent } from './n/n.component';
import { OComponent } from './o/o.component';
import { AComponent } from './a/a.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BComponent, CComponent, DComponent, EComponent, FComponent, GComponent, HComponent, IComponent, JComponent, KComponent, LComponent, MComponent, NComponent, OComponent, AComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
