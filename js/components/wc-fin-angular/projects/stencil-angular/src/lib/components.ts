/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from 'wc-fin';

import { defineCustomElements as defineFinContextGroupPicker } from 'wc-fin';


export declare interface FinContextGroupPicker extends Components.FinContextGroupPicker {}

@ProxyCmp({
  defineCustomElementFn: defineFinContextGroupPicker,
  inputs: ['bindSelf', 'bindViews', 'isQueryStringEnabled', 'joinText', 'leaveText', 'listDelay', 'selectedText', 'showListOnClick', 'unselectedColor', 'unselectedText']
})
@Component({
  selector: 'fin-context-group-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bindSelf', 'bindViews', 'isQueryStringEnabled', 'joinText', 'leaveText', 'listDelay', 'selectedText', 'showListOnClick', 'unselectedColor', 'unselectedText']
})
export class FinContextGroupPicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
