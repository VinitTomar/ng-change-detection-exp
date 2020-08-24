import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Base } from '../component-base';

import { GLOBAL_CHANGE_DETECTION_STRATEGY } from '../util';

@Component({
  selector: 'g-component',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.scss'],
  changeDetection: GLOBAL_CHANGE_DETECTION_STRATEGY
})
export class GComponent extends Base implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  constructor(cdRef: ChangeDetectorRef, private _elmRef: ElementRef<HTMLElement>) {
    super('   ', 'G', cdRef);
  }

  ngOnChanges(changes: SimpleChanges) { super.ngOnChanges(changes); }

  ngOnInit() { super.ngOnInit(); }

  ngDoCheck() {
    super.ngDoCheck();
    // this._cdRef.detectChanges();
  }

  ngAfterContentInit() { super.ngAfterContentInit(); }

  ngAfterContentChecked() { super.ngAfterContentChecked(); }

  ngAfterViewInit() { super.ngAfterViewInit(); }

  ngAfterViewChecked() { super.ngAfterViewChecked(); }

  ngOnDestroy() { super.ngOnDestroy(); }
}