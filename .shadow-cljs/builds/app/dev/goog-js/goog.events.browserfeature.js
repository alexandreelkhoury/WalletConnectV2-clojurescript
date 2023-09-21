["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/browserfeature.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.events.BrowserFeature\");\n  goog.module.declareLegacyNamespace();\n  const purify = fn => {\n    return {valueOf:fn}.valueOf();\n  };\n  exports = {TOUCH_ENABLED:\"ontouchstart\" in goog.global || !!(goog.global[\"document\"] && document.documentElement && \"ontouchstart\" in document.documentElement) || !!(goog.global[\"navigator\"] && (goog.global[\"navigator\"][\"maxTouchPoints\"] || goog.global[\"navigator\"][\"msMaxTouchPoints\"])), POINTER_EVENTS:\"PointerEvent\" in goog.global, MSPOINTER_EVENTS:false, PASSIVE_EVENTS:purify(function() {\n    if (!goog.global.addEventListener || !Object.defineProperty) {\n      return false;\n    }\n    var passive = false;\n    var options = Object.defineProperty({}, \"passive\", {get:function() {\n      passive = true;\n    }});\n    try {\n      goog.global.addEventListener(\"test\", () => {\n      }, options);\n      goog.global.removeEventListener(\"test\", () => {\n      }, options);\n    } catch (e) {\n    }\n    return passive;\n  })};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Browser capability checks for the events package.\n */\n\ngoog.module('goog.events.BrowserFeature');\ngoog.module.declareLegacyNamespace();\n\n\n/**\n * Tricks Closure Compiler into believing that a function is pure.  The compiler\n * assumes that any `valueOf` function is pure, without analyzing its contents.\n *\n * @param {function(): T} fn\n * @return {T}\n * @template T\n */\nconst purify = (fn) => {\n  return ({valueOf: fn}).valueOf();\n};\n\n\n/**\n * Enum of browser capabilities.\n * @enum {boolean}\n */\nexports = {\n  /**\n   * Whether touch is enabled in the browser.\n   */\n  TOUCH_ENABLED:\n      ('ontouchstart' in goog.global ||\n       !!(goog.global['document'] && document.documentElement &&\n          'ontouchstart' in document.documentElement) ||\n       // IE10 uses non-standard touch events, so it has a different check.\n       !!(goog.global['navigator'] &&\n          (goog.global['navigator']['maxTouchPoints'] ||\n           goog.global['navigator']['msMaxTouchPoints']))),\n\n  /**\n   * Whether addEventListener supports W3C standard pointer events.\n   * http://www.w3.org/TR/pointerevents/\n   */\n  POINTER_EVENTS: ('PointerEvent' in goog.global),\n\n  /**\n   * Whether addEventListener supports MSPointer events (only used in IE10).\n   * http://msdn.microsoft.com/en-us/library/ie/hh772103(v=vs.85).aspx\n   * http://msdn.microsoft.com/library/hh673557(v=vs.85).aspx\n   */\n  MSPOINTER_EVENTS: false,\n\n  /**\n   * Whether addEventListener supports {passive: true}.\n   * https://developers.google.com/web/updates/2016/06/passive-event-listeners\n   */\n  PASSIVE_EVENTS: purify(function() {\n    // If we're in a web worker or other custom environment, we can't tell.\n    if (!goog.global.addEventListener || !Object.defineProperty) {  // IE 8\n      return false;\n    }\n\n    var passive = false;\n    var options = Object.defineProperty({}, 'passive', {\n      get: function() {\n        passive = true;\n      }\n    });\n    try {\n      goog.global.addEventListener('test', () => {}, options);\n      goog.global.removeEventListener('test', () => {}, options);\n    } catch (e) {\n    }\n\n    return passive;\n  })\n};\n","~:compiled-at",1685634540724,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.browserfeature.js\",\n\"lineCount\":27,\n\"mappings\":\"AAAA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAUAA,MAAKC,CAAAA,MAAL,CAAY,4BAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAWA,QAAMC,SAAUC,EAADD,IAAQ;AACrB,WAAQ,CAACE,QAASD,EAAV,CAAeC,CAAAA,OAAhB,EAAP;AADqB,GAAvB;AASAC,SAAA,GAAU,CAIRC,cACK,cADLA,IACuBP,IAAKQ,CAAAA,MAD5BD,IAEK,CAAC,EAAEP,IAAKQ,CAAAA,MAAL,CAAY,UAAZ,CAAF,IAA6BC,QAASC,CAAAA,eAAtC,IACE,cADF,IACoBD,QAASC,CAAAA,eAD7B,CAFNH,IAKK,CAAC,EAAEP,IAAKQ,CAAAA,MAAL,CAAY,WAAZ,CAAF,KACGR,IAAKQ,CAAAA,MAAL,CAAY,WAAZ,CAAA,CAAyB,gBAAzB,CADH,IAEGR,IAAKQ,CAAAA,MAAL,CAAY,WAAZ,CAAA,CAAyB,kBAAzB,CAFH,EATE,EAiBRG,eAAiB,cAAjBA,IAAmCX,IAAKQ,CAAAA,MAjBhC,EAwBRI,iBAAkB,KAxBV,EA8BRC,eAAgBV,MAAA,CAAO,QAAQ,EAAG;AAEhC,QAAI,CAACH,IAAKQ,CAAAA,MAAOM,CAAAA,gBAAjB,IAAqC,CAACC,MAAOC,CAAAA,cAA7C;AACE,aAAO,KAAP;AADF;AAIA,QAAIC,UAAU,KAAd;AACA,QAAIC,UAAUH,MAAOC,CAAAA,cAAP,CAAsB,EAAtB,EAA0B,SAA1B,EAAqC,CACjDG,IAAKA,QAAQ,EAAG;AACdF,aAAA,GAAU,IAAV;AADc,KADiC,CAArC,CAAd;AAKA,OAAI;AACFjB,UAAKQ,CAAAA,MAAOM,CAAAA,gBAAZ,CAA6B,MAA7B,EAAqC,EAAA,IAAM;OAA3C,EAA+CI,OAA/C,CAAA;AACAlB,UAAKQ,CAAAA,MAAOY,CAAAA,mBAAZ,CAAgC,MAAhC,EAAwC,EAAA,IAAM;OAA9C,EAAkDF,OAAlD,CAAA;AAFE,KAGF,QAAOG,CAAP,CAAU;;AAGZ,WAAOJ,OAAP;AAlBgC,GAAlB,CA9BR,CAAV;AA/BA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/events/browserfeature.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Browser capability checks for the events package.\\n */\\n\\ngoog.module('goog.events.BrowserFeature');\\ngoog.module.declareLegacyNamespace();\\n\\n\\n/**\\n * Tricks Closure Compiler into believing that a function is pure.  The compiler\\n * assumes that any `valueOf` function is pure, without analyzing its contents.\\n *\\n * @param {function(): T} fn\\n * @return {T}\\n * @template T\\n */\\nconst purify = (fn) => {\\n  return ({valueOf: fn}).valueOf();\\n};\\n\\n\\n/**\\n * Enum of browser capabilities.\\n * @enum {boolean}\\n */\\nexports = {\\n  /**\\n   * Whether touch is enabled in the browser.\\n   */\\n  TOUCH_ENABLED:\\n      ('ontouchstart' in goog.global ||\\n       !!(goog.global['document'] && document.documentElement &&\\n          'ontouchstart' in document.documentElement) ||\\n       // IE10 uses non-standard touch events, so it has a different check.\\n       !!(goog.global['navigator'] &&\\n          (goog.global['navigator']['maxTouchPoints'] ||\\n           goog.global['navigator']['msMaxTouchPoints']))),\\n\\n  /**\\n   * Whether addEventListener supports W3C standard pointer events.\\n   * http://www.w3.org/TR/pointerevents/\\n   */\\n  POINTER_EVENTS: ('PointerEvent' in goog.global),\\n\\n  /**\\n   * Whether addEventListener supports MSPointer events (only used in IE10).\\n   * http://msdn.microsoft.com/en-us/library/ie/hh772103(v=vs.85).aspx\\n   * http://msdn.microsoft.com/library/hh673557(v=vs.85).aspx\\n   */\\n  MSPOINTER_EVENTS: false,\\n\\n  /**\\n   * Whether addEventListener supports {passive: true}.\\n   * https://developers.google.com/web/updates/2016/06/passive-event-listeners\\n   */\\n  PASSIVE_EVENTS: purify(function() {\\n    // If we're in a web worker or other custom environment, we can't tell.\\n    if (!goog.global.addEventListener || !Object.defineProperty) {  // IE 8\\n      return false;\\n    }\\n\\n    var passive = false;\\n    var options = Object.defineProperty({}, 'passive', {\\n      get: function() {\\n        passive = true;\\n      }\\n    });\\n    try {\\n      goog.global.addEventListener('test', () => {}, options);\\n      goog.global.removeEventListener('test', () => {}, options);\\n    } catch (e) {\\n    }\\n\\n    return passive;\\n  })\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"purify\",\"fn\",\"valueOf\",\"exports\",\"TOUCH_ENABLED\",\"global\",\"document\",\"documentElement\",\"POINTER_EVENTS\",\"MSPOINTER_EVENTS\",\"PASSIVE_EVENTS\",\"addEventListener\",\"Object\",\"defineProperty\",\"passive\",\"options\",\"get\",\"removeEventListener\",\"e\"]\n}\n"]