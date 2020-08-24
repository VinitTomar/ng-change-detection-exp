import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ChangeDetectorRef, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Base } from '../component-base';
import { GLOBAL_CHANGE_DETECTION_STRATEGY } from '../util';

@Component({
  selector: 'a-component',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  changeDetection: GLOBAL_CHANGE_DETECTION_STRATEGY
})
export class AComponent extends Base implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  constructor(cdRef: ChangeDetectorRef) {
    super('', 'A', cdRef);
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