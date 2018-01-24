/**
 * Copyright (C) 2018 Gnucoop soc. coop.
 * 
 * This file is part of ng-extra.
 * 
 * ng-extra is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * ng-extra is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with ng-extra.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['mat-extra-examples'] = global.ng['mat-extra-examples'] || {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,_angular_core,_angular_forms,_angular_common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (C) 2018 Gnucoop soc. coop.
 *
 * This file is part of ng-extra.
 *
 * ng-extra is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ng-extra is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng-extra.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
var ExampleNgExtraModule = /** @class */ (function () {
    function ExampleNgExtraModule() {
    }
    ExampleNgExtraModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: []
                },] },
    ];
    /** @nocollapse */
    ExampleNgExtraModule.ctorParameters = function () { return []; };
    return ExampleNgExtraModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable */
/** DO NOT MANUALLY EDIT THIS FILE, IT IS GENERATED VIA GULP 'build-examples-module' */
/**
 * @record
 */

var EXAMPLE_COMPONENTS = {};
var EXAMPLE_LIST = [];
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: EXAMPLE_LIST,
                    entryComponents: EXAMPLE_LIST,
                    imports: [
                        ExampleNgExtraModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule,
                        _angular_common.CommonModule
                    ]
                },] },
    ];
    /** @nocollapse */
    ExampleModule.ctorParameters = function () { return []; };
    return ExampleModule;
}());

exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
exports.EXAMPLE_LIST = EXAMPLE_LIST;
exports.ExampleModule = ExampleModule;
exports.ɵa = ExampleNgExtraModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mat-extra-examples.umd.js.map
