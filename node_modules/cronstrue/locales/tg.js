(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cronstrue"));
	else if(typeof define === 'function' && define.amd)
		define("locales/tg", ["cronstrue"], factory);
	else if(typeof exports === 'object')
		exports["locales/tg"] = factory(require("cronstrue"));
	else
		root["locales/tg"] = factory(root["cronstrue"]);
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
var tg_exports = __webpack_exports__;
"use strict";
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(tg_exports, "__esModule", { value: true });
tg_exports.tg = void 0;
var weekdays = ["якшанбе", "душанбе", "сешанбе", "чоршанбе", "панҷшанбе", "ҷумъа", "шанбе"];
var months = [
    "январ",
    "феврал",
    "март",
    "апрел",
    "май",
    "июн",
    "июл",
    "август",
    "сентябр",
    "октябр",
    "ноябр",
    "декабр",
];
var monthsIzafa = [
    "январи",
    "феврали",
    "марти",
    "апрели",
    "майи",
    "июни",
    "июли",
    "августи",
    "сентябри",
    "октябри",
    "ноябри",
    "декабри",
];
var tg = (function () {
    function tg() {
    }
    tg.prototype.atX0SecondsPastTheMinuteGt20 = function () {
        return null;
    };
    tg.prototype.atX0MinutesPastTheHourGt20 = function () {
        return null;
    };
    tg.prototype.commaMonthX0ThroughMonthX1 = function () {
        return null;
    };
    tg.prototype.commaYearX0ThroughYearX1 = function () {
        return null;
    };
    tg.prototype.use24HourTimeFormatByDefault = function () {
        return true;
    };
    tg.prototype.anErrorOccuredWhenGeneratingTheExpressionD = function () {
        return "Ҳангоми тавсифи ифодаи cron хато рӯй дод. Синтаксисро санҷед.";
    };
    tg.prototype.everyMinute = function () {
        return "ҳар дақиқа";
    };
    tg.prototype.everyHour = function () {
        return "ҳар соат";
    };
    tg.prototype.atSpace = function () {
        return "Дар ";
    };
    tg.prototype.everyMinuteBetweenX0AndX1 = function () {
        return "Ҳар дақиқа аз %s то %s";
    };
    tg.prototype.at = function () {
        return "Дар";
    };
    tg.prototype.spaceAnd = function () {
        return " ва";
    };
    tg.prototype.everySecond = function () {
        return "ҳар сония";
    };
    tg.prototype.everyX0Seconds = function () {
        return "ҳар %s сония";
    };
    tg.prototype.secondsX0ThroughX1PastTheMinute = function () {
        return "сонияҳои аз %s то %s";
    };
    tg.prototype.atX0SecondsPastTheMinute = function () {
        return "дар %s сония";
    };
    tg.prototype.everyX0Minutes = function () {
        return "ҳар %s дақиқа";
    };
    tg.prototype.minutesX0ThroughX1PastTheHour = function () {
        return "дақиқаҳои аз %s то %s";
    };
    tg.prototype.atX0MinutesPastTheHour = function () {
        return "дар %s дақиқа";
    };
    tg.prototype.everyX0Hours = function () {
        return "ҳар %s соат";
    };
    tg.prototype.betweenX0AndX1 = function () {
        return "аз %s то %s";
    };
    tg.prototype.atX0 = function () {
        return "дар %s";
    };
    tg.prototype.commaEveryDay = function () {
        return ", ҳар рӯз";
    };
    tg.prototype.commaEveryX0DaysOfTheWeek = function () {
        return ", ҳар %s рӯзи ҳафта";
    };
    tg.prototype.commaX0ThroughX1 = function () {
        return ", аз %s то %s";
    };
    tg.prototype.commaAndX0ThroughX1 = function () {
        return " ва аз %s то %s";
    };
    tg.prototype.first = function () {
        return "якум";
    };
    tg.prototype.second = function () {
        return "дуюм";
    };
    tg.prototype.third = function () {
        return "сеюм";
    };
    tg.prototype.fourth = function () {
        return "чорум";
    };
    tg.prototype.fifth = function () {
        return "панҷум";
    };
    tg.prototype.commaOnThe = function () {
        return ", дар ";
    };
    tg.prototype.spaceX0OfTheMonth = function () {
        return " %s-и моҳ";
    };
    tg.prototype.lastDay = function () {
        return "рӯзи охирин";
    };
    tg.prototype.commaOnTheLastX0OfTheMonth = function () {
        return ", дар охирин %s-и моҳ";
    };
    tg.prototype.commaOnlyOnX0 = function () {
        return ", танҳо дар %s";
    };
    tg.prototype.commaAndOnX0 = function () {
        return ", ва %s";
    };
    tg.prototype.commaEveryX0Months = function () {
        return " ҳар %s моҳ";
    };
    tg.prototype.commaOnlyInMonthX0 = function () {
        return ", танҳо %s";
    };
    tg.prototype.commaOnlyInX0 = function () {
        return ", танҳо дар %s";
    };
    tg.prototype.commaOnTheLastDayOfTheMonth = function () {
        return ", дар рӯзи охирини моҳ";
    };
    tg.prototype.commaOnTheLastWeekdayOfTheMonth = function () {
        return ", дар охирин рӯзи кории моҳ";
    };
    tg.prototype.commaDaysBeforeTheLastDayOfTheMonth = function () {
        return ", %s рӯз пеш аз охири моҳ";
    };
    tg.prototype.firstWeekday = function () {
        return "якумин рӯзи корӣ";
    };
    tg.prototype.weekdayNearestDayX0 = function () {
        return "наздиктарин рӯзи корӣ ба %s";
    };
    tg.prototype.commaOnTheX0OfTheMonth = function () {
        return ", дар %s-и моҳ";
    };
    tg.prototype.commaEveryX0Days = function () {
        return ", ҳар %s рӯз";
    };
    tg.prototype.commaBetweenDayX0AndX1OfTheMonth = function () {
        return ", аз рӯзи %s то %s-и моҳ";
    };
    tg.prototype.commaOnDayX0OfTheMonth = function () {
        return ", дар рӯзи %s-и моҳ";
    };
    tg.prototype.commaEveryX0Years = function () {
        return ", ҳар %s сол";
    };
    tg.prototype.commaStartingX0 = function () {
        return ", оғоз %s";
    };
    tg.prototype.daysOfTheWeek = function () {
        return __spreadArray([], weekdays, true);
    };
    tg.prototype.daysOfTheWeekInCase = function () {
        return __spreadArray([], weekdays, true);
    };
    tg.prototype.monthsOfTheYear = function () {
        return __spreadArray([], months, true);
    };
    tg.prototype.monthsOfTheYearInCase = function (f) {
        return f == 1 ? __spreadArray([], monthsIzafa, true) : __spreadArray([], months, true);
    };
    tg.prototype.atReboot = function () {
        return "Як бор иҷро шавад, ҳангоми оғоз";
    };
    tg.prototype.onTheHour = function () {
        return "дақиқан дар соат";
    };
    return tg;
}());
tg_exports.tg = tg;


(cronstrue__WEBPACK_IMPORTED_MODULE_0___default().locales)["tg"] = new tg();

/******/ 	return __webpack_exports__;
/******/ })()
;
});