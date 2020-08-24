import { OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';

export class Base implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  count = 0;
  tmCount = 0;
  space: string = '';
  componentName: string = '';

  leftChildCount = 0;
  rightChildCount = 0;

  @Input('parentCount')
  parentCount = -1;

  @Output('myCount')
  countEvent: EventEmitter<number> = new EventEmitter();

  constructor(space: string, cmpName: string, public _cdRef: ChangeDetectorRef) {
    this.space = space;
    this.componentName = cmpName;
  }

  click($event: UIEvent) {
    this.count++;
    // this.countEvent.emit(this.count);

    // setTimeout(() => {
    //   this.tmCount++;
    //   // setTimeout(() => {
    //   this.countEvent.emit(this.tmCount);

    //   // }, 1000)
    //   console.log(`======= SET-TM AT ${this.componentName}[${this.tmCount}] ========`);
    //   // this._cdRef.detectChanges();
    //   // this._cdRef.markForCheck();
    // }, 3000);
  }

  updateLeftChildCount(count: number) {
    this.leftChildCount = count;
  }

  updateRightChildCount(count: number) {
    this.rightChildCount = count;
  }

  ngOnInit(): void {
    console.log(`${this.space}${this.componentName}:ON-INIT`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${this.space}${this.componentName}:ON-CHANGE, SIMPLE-CHANGED`, { changes });
  }

  ngDoCheck(): void {
    console.log(`${this.space}${this.componentName}:DO-CHECK`);
  }

  ngAfterContentInit(): void {
    console.log(`${this.space}${this.componentName}:AFTER-CONTENT-INIT`);
  }

  ngAfterContentChecked(): void {
    console.log(`${this.space}${this.componentName}:AFTER-CONTENT-CHECKED`);
  }

  ngAfterViewInit(): void {
    console.log(`${this.space}${this.componentName}:AFTER-VIEW-INIT`);
  }

  ngAfterViewChecked(): void {
    console.log(`${this.space}${this.componentName}:AFTER-VIEW-CHECKED`);
  }

  ngOnDestroy(): void {
    console.log(`${this.space}${this.componentName}:ON-DESTROY`);
  }


}