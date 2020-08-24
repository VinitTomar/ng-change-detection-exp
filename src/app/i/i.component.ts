import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Base } from '../component-base';

import { GLOBAL_CHANGE_DETECTION_STRATEGY } from '../util';

@Component({
  selector: 'i-component',
  templateUrl: './i.component.html',
  styleUrls: ['./i.component.scss'],
  changeDetection: GLOBAL_CHANGE_DETECTION_STRATEGY
})
export class IComponent extends Base implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  constructor(cdref: ChangeDetectorRef) {
    super('     ', 'I', cdref);
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