import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Base } from './component-base';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: GLOBAL_CHANGE_DETECTION_STRATEGY
})
export class AppComponent { }