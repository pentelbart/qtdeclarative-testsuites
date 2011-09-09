// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If pattern is an object R whose [[Class]] property is "RegExp" and flags is undefined, then return R unchanged
 *
 * @section: 15.10.3.1;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.3_The_RegExp_Constructor_Called_as_a_Function/S15.10.3.1_A1_T4.js;
 * @description: R is new RegExp() and instance is RegExp(R, void 0);
 */

__re = RegExp();
__instance = RegExp(__re, void 0);
__re.indicator = 1;

//CHECK#1
if (__instance.indicator !== 1) {
	$ERROR('#1: __re = RegExp(); __instance = RegExp(__re, void 0); __re.indicator = 1; __instance.indicator === 1. Actual: ' + (__instance.indicator));
}

