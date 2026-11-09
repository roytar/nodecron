(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/az", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/az"] = factory(require("cronstrue"));
	else
		root["locales/az"] = factory(root["cronstrue"]);
})(globalThis, (__WEBPACK_EXTERNAL_MODULE__93__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 93
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__93__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cronstrue__WEBPACK_IMPORTED_MODULE_0__);
var az_exports = __webpack_exports__;
"use strict";
Object.defineProperty(az_exports, "__esModule", { value: true });
az_exports.az = void 0;
var ORDINAL_SUFFIX_BY_LAST_DIGIT = {
    1: "-ci",
    2: "-ci",
    3: "-cü",
    4: "-cü",
    5: "-ci",
    6: "-cı",
    7: "-ci",
    8: "-ci",
    9: "-cu",
};
var ORDINAL_SUFFIX_BY_TENS = {
    0: "-cı",
    10: "-cu",
    20: "-ci",
    30: "-cu",
    40: "-cı",
    50: "-ci",
};
var DEFAULT_ORDINAL_SUFFIX = "-cı";
var ordinalSuffix = function (value) {
    if (!value || !/^\d+$/.test(value)) {
        return null;
    }
    var number = Number(value);
    var lastDigit = number % 10;
    return lastDigit
        ? ORDINAL_SUFFIX_BY_LAST_DIGIT[lastDigit]
        : ORDINAL_SUFFIX_BY_TENS[number % 100] || DEFAULT_ORDINAL_SUFFIX;
};
var az = (function () {
    function az() {
    }
    az.prototype.atX0SecondsPastTheMinuteGt20 = function () {
        return null;
    };
    az.prototype.atX0MinutesPastTheHourGt20 = function () {
        return null;
    };
    az.prototype.commaMonthX0ThroughMonthX1 = function () {
        return ", %s %s qədər";
    };
    az.prototype.commaYearX0ThroughYearX1 = function () {
        return ", %s ilindən %s ilinə qədər";
    };
    az.prototype.use24HourTimeFormatByDefault = function () {
        return true;
    };
    az.prototype.anErrorOccuredWhenGeneratingTheExpressionD = function () {
        return "İfadənin təsviri yaradılarkən xəta baş verdi. Cron ifadəsinin sintaksisini yoxlayın.";
    };
    az.prototype.everyMinute = function () {
        return "hər dəqiqə";
    };
    az.prototype.everyHour = function () {
        return "hər saat";
    };
    az.prototype.atSpace = function () {
        return "Saat ";
    };
    az.prototype.everyMinuteBetweenX0AndX1 = function () {
        return "Saat %s ilə %s arasında hər dəqiqə";
    };
    az.prototype.at = function () {
        return "Saat";
    };
    az.prototype.spaceAnd = function () {
        return " və";
    };
    az.prototype.everySecond = function () {
        return "hər saniyə";
    };
    az.prototype.everyX0Seconds = function () {
        return "hər %s saniyədən bir";
    };
    az.prototype.secondsX0ThroughX1PastTheMinute = function () {
        return "dəqiqənin %s ilə %s saniyələri arasında";
    };
    az.prototype.atX0SecondsPastTheMinute = function (s) {
        var suffix = ordinalSuffix(s);
        return suffix ? "d\u0259qiq\u0259nin %s".concat(suffix, " saniy\u0259sind\u0259") : "dəqiqənin %s saniyələrində";
    };
    az.prototype.everyX0Minutes = function () {
        return "hər %s dəqiqədən bir";
    };
    az.prototype.minutesX0ThroughX1PastTheHour = function () {
        return "saatın %s ilə %s dəqiqələri arasında";
    };
    az.prototype.atX0MinutesPastTheHour = function (s) {
        var suffix = ordinalSuffix(s);
        return suffix ? "saat\u0131n %s".concat(suffix, " d\u0259qiq\u0259sind\u0259") : "saatın %s dəqiqələrində";
    };
    az.prototype.everyX0Hours = function () {
        return "hər %s saatdan bir";
    };
    az.prototype.betweenX0AndX1 = function () {
        return "saat %s ilə %s arasında";
    };
    az.prototype.atX0 = function () {
        return "saat %s";
    };
    az.prototype.commaEveryDay = function () {
        return ", hər gün";
    };
    az.prototype.commaEveryX0DaysOfTheWeek = function () {
        return ", həftənin hər %s günündən bir";
    };
    az.prototype.commaX0ThroughX1 = function () {
        return ", %s %s qədər";
    };
    az.prototype.commaAndX0ThroughX1 = function () {
        return ", %s %s qədər";
    };
    az.prototype.first = function () {
        return "birinci";
    };
    az.prototype.second = function () {
        return "ikinci";
    };
    az.prototype.third = function () {
        return "üçüncü";
    };
    az.prototype.fourth = function () {
        return "dördüncü";
    };
    az.prototype.fifth = function () {
        return "beşinci";
    };
    az.prototype.commaOnThe = function () {
        return ", ayın ";
    };
    az.prototype.spaceX0OfTheMonth = function () {
        return " %s günü";
    };
    az.prototype.lastDay = function () {
        return "son gün";
    };
    az.prototype.commaOnTheLastX0OfTheMonth = function () {
        return ", ayın son %s günü";
    };
    az.prototype.commaOnlyOnX0 = function () {
        return ", yalnız %s";
    };
    az.prototype.commaAndOnX0 = function () {
        return ", həmçinin %s";
    };
    az.prototype.commaEveryX0Months = function () {
        return ", hər %s aydan bir";
    };
    az.prototype.commaOnlyInX0 = function () {
        return ", yalnız %s";
    };
    az.prototype.commaOnlyInYearX0 = function () {
        return ", yalnız %s ili";
    };
    az.prototype.commaOnTheLastDayOfTheMonth = function () {
        return ", ayın son günü";
    };
    az.prototype.commaOnTheLastWeekdayOfTheMonth = function () {
        return ", ayın son iş günü";
    };
    az.prototype.commaDaysBeforeTheLastDayOfTheMonth = function () {
        return ", ayın son günündən %s gün əvvəl";
    };
    az.prototype.firstWeekday = function () {
        return "ilk iş günü";
    };
    az.prototype.weekdayNearestDayX0 = function () {
        return "%s tarixinə ən yaxın iş günü";
    };
    az.prototype.commaOnTheX0OfTheMonth = function () {
        return ", ayın %s";
    };
    az.prototype.commaEveryX0Days = function () {
        return ", ayda hər %s gündən bir";
    };
    az.prototype.commaBetweenDayX0AndX1OfTheMonth = function () {
        return ", ayın %s ilə %s günləri arasında";
    };
    az.prototype.commaOnDayX0OfTheMonth = function (s) {
        var suffix = ordinalSuffix(s);
        return suffix ? ", ay\u0131n %s".concat(suffix, " g\u00FCn\u00FC") : ", ayın %s günləri";
    };
    az.prototype.commaEveryX0Years = function () {
        return ", hər %s ildən bir";
    };
    az.prototype.commaStartingX0 = function () {
        return ", %s başlamaqla";
    };
    az.prototype.daysOfTheWeek = function () {
        return ["bazar", "bazar ertəsi", "çərşənbə axşamı", "çərşənbə", "cümə axşamı", "cümə", "şənbə"];
    };
    az.prototype.daysOfTheWeekInCase = function (f) {
        if (f === void 0) { f = 0; }
        switch (f) {
            case 1:
                return [
                    "bazardan",
                    "bazar ertəsindən",
                    "çərşənbə axşamından",
                    "çərşənbədən",
                    "cümə axşamından",
                    "cümədən",
                    "şənbədən",
                ];
            case 2:
                return ["bazara", "bazar ertəsinə", "çərşənbə axşamına", "çərşənbəyə", "cümə axşamına", "cüməyə", "şənbəyə"];
            default:
                return this.daysOfTheWeek();
        }
    };
    az.prototype.monthsOfTheYear = function () {
        return [
            "yanvarda",
            "fevralda",
            "martda",
            "apreldə",
            "mayda",
            "iyunda",
            "iyulda",
            "avqustda",
            "sentyabrda",
            "oktyabrda",
            "noyabrda",
            "dekabrda",
        ];
    };
    az.prototype.monthsOfTheYearInCase = function (f) {
        if (f === void 0) { f = 0; }
        return f == 1
            ? [
                "yanvardan",
                "fevraldan",
                "martdan",
                "apreldən",
                "maydan",
                "iyundan",
                "iyuldan",
                "avqustdan",
                "sentyabrdan",
                "oktyabrdan",
                "noyabrdan",
                "dekabrdan",
            ]
            : [
                "yanvara",
                "fevrala",
                "marta",
                "aprelə",
                "maya",
                "iyuna",
                "iyula",
                "avqusta",
                "sentyabra",
                "oktyabra",
                "noyabra",
                "dekabra",
            ];
    };
    az.prototype.atReboot = function () {
        return "Başlanğıcda bir dəfə icra olunur";
    };
    az.prototype.onTheHour = function () {
        return "saat başında";
    };
    return az;
}());
az_exports.az = az;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["az"] = new az();

/******/ 	return __webpack_exports__;
/******/ })()
;
});