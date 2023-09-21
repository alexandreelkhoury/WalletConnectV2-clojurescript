["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/listenablekey.js"],"~:js","goog.provide(\"goog.events.ListenableKey\");\ngoog.requireType(\"goog.events.Listenable\");\ngoog.events.ListenableKey = function() {\n};\ngoog.events.ListenableKey.counter_ = 0;\ngoog.events.ListenableKey.reserveKey = function() {\n  return ++goog.events.ListenableKey.counter_;\n};\ngoog.events.ListenableKey.prototype.src;\ngoog.events.ListenableKey.prototype.type;\ngoog.events.ListenableKey.prototype.listener;\ngoog.events.ListenableKey.prototype.capture;\ngoog.events.ListenableKey.prototype.handler;\ngoog.events.ListenableKey.prototype.key;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview An interface that describes a single registered listener.\n */\ngoog.provide('goog.events.ListenableKey');\n\ngoog.requireType('goog.events.Listenable');\n\n\n/**\n * An interface that describes a single registered listener.\n * @interface\n */\ngoog.events.ListenableKey = function() {};\n\n\n/**\n * Counter used to create a unique key\n * @type {number}\n * @private\n */\ngoog.events.ListenableKey.counter_ = 0;\n\n\n/**\n * Reserves a key to be used for ListenableKey#key field.\n * @return {number} A number to be used to fill ListenableKey#key\n *     field.\n */\ngoog.events.ListenableKey.reserveKey = function() {\n  'use strict';\n  return ++goog.events.ListenableKey.counter_;\n};\n\n\n/**\n * The source event target.\n * @type {?Object|?goog.events.Listenable}\n */\ngoog.events.ListenableKey.prototype.src;\n\n\n/**\n * The event type the listener is listening to.\n * @type {string}\n */\ngoog.events.ListenableKey.prototype.type;\n\n\n/**\n * The listener function.\n * @type {function(?):?|{handleEvent:function(?):?}|null}\n */\ngoog.events.ListenableKey.prototype.listener;\n\n\n/**\n * Whether the listener works on capture phase.\n * @type {boolean}\n */\ngoog.events.ListenableKey.prototype.capture;\n\n\n/**\n * The 'this' object for the listener function's scope.\n * @type {?Object|undefined}\n */\ngoog.events.ListenableKey.prototype.handler;\n\n\n/**\n * A globally unique number to identify the key.\n * @type {number}\n */\ngoog.events.ListenableKey.prototype.key;\n","~:compiled-at",1685634540726,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.listenablekey.js\",\n\"lineCount\":15,\n\"mappings\":\"AASAA,IAAKC,CAAAA,OAAL,CAAa,2BAAb,CAAA;AAEAD,IAAKE,CAAAA,WAAL,CAAiB,wBAAjB,CAAA;AAOAF,IAAKG,CAAAA,MAAOC,CAAAA,aAAZ,GAA4BC,QAAQ,EAAG;CAAvC;AAQAL,IAAKG,CAAAA,MAAOC,CAAAA,aAAcE,CAAAA,QAA1B,GAAqC,CAArC;AAQAN,IAAKG,CAAAA,MAAOC,CAAAA,aAAcG,CAAAA,UAA1B,GAAuCC,QAAQ,EAAG;AAEhD,SAAO,EAAER,IAAKG,CAAAA,MAAOC,CAAAA,aAAcE,CAAAA,QAAnC;AAFgD,CAAlD;AAUAN,IAAKG,CAAAA,MAAOC,CAAAA,aAAcK,CAAAA,SAAUC,CAAAA,GAApC;AAOAV,IAAKG,CAAAA,MAAOC,CAAAA,aAAcK,CAAAA,SAAUE,CAAAA,IAApC;AAOAX,IAAKG,CAAAA,MAAOC,CAAAA,aAAcK,CAAAA,SAAUG,CAAAA,QAApC;AAOAZ,IAAKG,CAAAA,MAAOC,CAAAA,aAAcK,CAAAA,SAAUI,CAAAA,OAApC;AAOAb,IAAKG,CAAAA,MAAOC,CAAAA,aAAcK,CAAAA,SAAUK,CAAAA,OAApC;AAOAd,IAAKG,CAAAA,MAAOC,CAAAA,aAAcK,CAAAA,SAAUM,CAAAA,GAApC;;\",\n\"sources\":[\"goog/events/listenablekey.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview An interface that describes a single registered listener.\\n */\\ngoog.provide('goog.events.ListenableKey');\\n\\ngoog.requireType('goog.events.Listenable');\\n\\n\\n/**\\n * An interface that describes a single registered listener.\\n * @interface\\n */\\ngoog.events.ListenableKey = function() {};\\n\\n\\n/**\\n * Counter used to create a unique key\\n * @type {number}\\n * @private\\n */\\ngoog.events.ListenableKey.counter_ = 0;\\n\\n\\n/**\\n * Reserves a key to be used for ListenableKey#key field.\\n * @return {number} A number to be used to fill ListenableKey#key\\n *     field.\\n */\\ngoog.events.ListenableKey.reserveKey = function() {\\n  'use strict';\\n  return ++goog.events.ListenableKey.counter_;\\n};\\n\\n\\n/**\\n * The source event target.\\n * @type {?Object|?goog.events.Listenable}\\n */\\ngoog.events.ListenableKey.prototype.src;\\n\\n\\n/**\\n * The event type the listener is listening to.\\n * @type {string}\\n */\\ngoog.events.ListenableKey.prototype.type;\\n\\n\\n/**\\n * The listener function.\\n * @type {function(?):?|{handleEvent:function(?):?}|null}\\n */\\ngoog.events.ListenableKey.prototype.listener;\\n\\n\\n/**\\n * Whether the listener works on capture phase.\\n * @type {boolean}\\n */\\ngoog.events.ListenableKey.prototype.capture;\\n\\n\\n/**\\n * The 'this' object for the listener function's scope.\\n * @type {?Object|undefined}\\n */\\ngoog.events.ListenableKey.prototype.handler;\\n\\n\\n/**\\n * A globally unique number to identify the key.\\n * @type {number}\\n */\\ngoog.events.ListenableKey.prototype.key;\\n\"],\n\"names\":[\"goog\",\"provide\",\"requireType\",\"events\",\"ListenableKey\",\"goog.events.ListenableKey\",\"counter_\",\"reserveKey\",\"goog.events.ListenableKey.reserveKey\",\"prototype\",\"src\",\"type\",\"listener\",\"capture\",\"handler\",\"key\"]\n}\n"]