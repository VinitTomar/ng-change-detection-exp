import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Base } from '../component-base';

import { GLOBAL_CHANGE_DETECTION_STRATEGY } from '../util';

@Component({
  selector: 'f-component',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.scss'],
  changeDetection: GLOBAL_CHANGE_DETECTION_STRATEGY
})
export class FComponent extends Base implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  constructor(cdRef: ChangeDetectorRef) {
    super('   ', 'F', cdRef);
  }

  updateLeftChildCount($event) {
    super.updateLeftChildCount($event);
    // this.leftChildCount++;
  }

  ngOnChanges(changes: SimpleChanges) { super.ngOnChanges(changes); }

  ngOnInit() { super.ngOnInit(); }

  ngDoCheck() { super.ngDoCheck(); }

  ngAfterContentInit() { super.ngAfterContentInit(); }

  ngAfterContentChecked() { super.ngAfterContentChecked(); }

  ngAfterViewInit() { super.ngAfterViewInit(); }

  ngAfterViewChecked() { super.ngAfterViewChecked(); }

  ngOnDestroy() { super.ngOnDestroy(); }
}