["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/element.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.dom.element\");\n  goog.module.declareLegacyNamespace();\n  const NodeType = goog.require(\"goog.dom.NodeType\");\n  const TagName = goog.require(\"goog.dom.TagName\");\n  const HTML_NAMESPACE = \"http://www.w3.org/1999/xhtml\";\n  const isElement = value => {\n    return goog.isObject(value) && value.nodeType === NodeType.ELEMENT;\n  };\n  const isHtmlElement = value => {\n    return goog.isObject(value) && isElement(value) && (!value.namespaceURI || value.namespaceURI === HTML_NAMESPACE);\n  };\n  const isHtmlElementOfType = (value, tagName) => {\n    return goog.isObject(value) && isHtmlElement(value) && value.tagName.toUpperCase() === tagName.toString();\n  };\n  const isHtmlAnchorElement = value => {\n    return isHtmlElementOfType(value, TagName.A);\n  };\n  const isHtmlButtonElement = value => {\n    return isHtmlElementOfType(value, TagName.BUTTON);\n  };\n  const isHtmlLinkElement = value => {\n    return isHtmlElementOfType(value, TagName.LINK);\n  };\n  const isHtmlImageElement = value => {\n    return isHtmlElementOfType(value, TagName.IMG);\n  };\n  const isHtmlAudioElement = value => {\n    return isHtmlElementOfType(value, TagName.AUDIO);\n  };\n  const isHtmlVideoElement = value => {\n    return isHtmlElementOfType(value, TagName.VIDEO);\n  };\n  const isHtmlInputElement = value => {\n    return isHtmlElementOfType(value, TagName.INPUT);\n  };\n  const isHtmlTextAreaElement = value => {\n    return isHtmlElementOfType(value, TagName.TEXTAREA);\n  };\n  const isHtmlCanvasElement = value => {\n    return isHtmlElementOfType(value, TagName.CANVAS);\n  };\n  const isHtmlEmbedElement = value => {\n    return isHtmlElementOfType(value, TagName.EMBED);\n  };\n  const isHtmlFormElement = value => {\n    return isHtmlElementOfType(value, TagName.FORM);\n  };\n  const isHtmlFrameElement = value => {\n    return isHtmlElementOfType(value, TagName.FRAME);\n  };\n  const isHtmlIFrameElement = value => {\n    return isHtmlElementOfType(value, TagName.IFRAME);\n  };\n  const isHtmlObjectElement = value => {\n    return isHtmlElementOfType(value, TagName.OBJECT);\n  };\n  const isHtmlScriptElement = value => {\n    return isHtmlElementOfType(value, TagName.SCRIPT);\n  };\n  exports = {isElement, isHtmlElement, isHtmlElementOfType, isHtmlAnchorElement, isHtmlButtonElement, isHtmlLinkElement, isHtmlImageElement, isHtmlAudioElement, isHtmlVideoElement, isHtmlInputElement, isHtmlTextAreaElement, isHtmlCanvasElement, isHtmlEmbedElement, isHtmlFormElement, isHtmlFrameElement, isHtmlIFrameElement, isHtmlObjectElement, isHtmlScriptElement,};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.module('goog.dom.element');\ngoog.module.declareLegacyNamespace();\n\nconst NodeType = goog.require('goog.dom.NodeType');\nconst TagName = goog.require('goog.dom.TagName');\n\n/** @const {string}  */\nconst HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';\n\n/**\n * Determines if a value is a DOM Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isElement = (value) => {\n  return goog.isObject(value) &&\n      /** @type {!Node} */ (value).nodeType === NodeType.ELEMENT;\n};\n\n/**\n * Determines if a value is a DOM HTML Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlElement = (value) => {\n  return goog.isObject(value) && isElement(value) &&\n      // namespaceURI of old browsers (FF < 3.6, IE < 9) will be null.\n      (!/** @type {!Element} */ (value).namespaceURI ||\n       /** @type {!Element} */ (value).namespaceURI === HTML_NAMESPACE);\n};\n\n/**\n * Determines if a value is a DOM HTML Element of a specified tag name. For\n * modern browsers, tags that provide access to special DOM APIs are implemented\n * as special subclasses of HTMLElement.\n * @param {*} value\n * @param {!TagName} tagName\n * @return {boolean}\n */\nconst isHtmlElementOfType = (value, tagName) => {\n  return goog.isObject(value) && isHtmlElement(value) &&\n      // Some uncommon JS environments (e.g. Cobalt 9) have issues with tag\n      // capitalization.\n      (/** @type {!HTMLElement} */ (value).tagName.toUpperCase() ===\n       tagName.toString());\n};\n\n/**\n * Determines if a value is an <A> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlAnchorElement = (value) => {\n  return isHtmlElementOfType(value, TagName.A);\n};\n\n/**\n * Determines if a value is a <BUTTON> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlButtonElement = (value) => {\n  return isHtmlElementOfType(value, TagName.BUTTON);\n};\n\n/**\n * Determines if a value is a <LINK> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlLinkElement = (value) => {\n  return isHtmlElementOfType(value, TagName.LINK);\n};\n\n/**\n * Determines if a value is an <IMG> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlImageElement = (value) => {\n  return isHtmlElementOfType(value, TagName.IMG);\n};\n\n/**\n * Determines if a value is an <AUDIO> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlAudioElement = (value) => {\n  return isHtmlElementOfType(value, TagName.AUDIO);\n};\n\n/**\n * Determines if a value is a <VIDEO> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlVideoElement = (value) => {\n  return isHtmlElementOfType(value, TagName.VIDEO);\n};\n\n/**\n * Determines if a value is an <INPUT> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlInputElement = (value) => {\n  return isHtmlElementOfType(value, TagName.INPUT);\n};\n\n/**\n * Determines if a value is a <TEXTAREA> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlTextAreaElement = (value) => {\n  return isHtmlElementOfType(value, TagName.TEXTAREA);\n};\n\n/**\n * Determines if a value is a <CANVAS> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlCanvasElement = (value) => {\n  return isHtmlElementOfType(value, TagName.CANVAS);\n};\n\n/**\n * Determines if a value is an <EMBED> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlEmbedElement = (value) => {\n  return isHtmlElementOfType(value, TagName.EMBED);\n};\n\n/**\n * Determines if a value is a <FORM> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlFormElement = (value) => {\n  return isHtmlElementOfType(value, TagName.FORM);\n};\n\n/**\n * Determines if a value is a <FRAME> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlFrameElement = (value) => {\n  return isHtmlElementOfType(value, TagName.FRAME);\n};\n\n/**\n * Determines if a value is an <IFRAME> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlIFrameElement = (value) => {\n  return isHtmlElementOfType(value, TagName.IFRAME);\n};\n\n/**\n * Determines if a value is an <OBJECT> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlObjectElement = (value) => {\n  return isHtmlElementOfType(value, TagName.OBJECT);\n};\n\n/**\n * Determines if a value is a <SCRIPT> Element.\n * @param {*} value\n * @return {boolean}\n */\nconst isHtmlScriptElement = (value) => {\n  return isHtmlElementOfType(value, TagName.SCRIPT);\n};\n\nexports = {\n  isElement,\n  isHtmlElement,\n  isHtmlElementOfType,\n  isHtmlAnchorElement,\n  isHtmlButtonElement,\n  isHtmlLinkElement,\n  isHtmlImageElement,\n  isHtmlAudioElement,\n  isHtmlVideoElement,\n  isHtmlInputElement,\n  isHtmlTextAreaElement,\n  isHtmlCanvasElement,\n  isHtmlEmbedElement,\n  isHtmlFormElement,\n  isHtmlFrameElement,\n  isHtmlIFrameElement,\n  isHtmlObjectElement,\n  isHtmlScriptElement,\n};\n","~:compiled-at",1685634540652,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.element.js\",\n\"lineCount\":65,\n\"mappings\":\"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\",\n\"sources\":[\"goog/dom/element.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.module('goog.dom.element');\\ngoog.module.declareLegacyNamespace();\\n\\nconst NodeType = goog.require('goog.dom.NodeType');\\nconst TagName = goog.require('goog.dom.TagName');\\n\\n/** @const {string}  */\\nconst HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';\\n\\n/**\\n * Determines if a value is a DOM Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isElement = (value) => {\\n  return goog.isObject(value) &&\\n      /** @type {!Node} */ (value).nodeType === NodeType.ELEMENT;\\n};\\n\\n/**\\n * Determines if a value is a DOM HTML Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlElement = (value) => {\\n  return goog.isObject(value) && isElement(value) &&\\n      // namespaceURI of old browsers (FF < 3.6, IE < 9) will be null.\\n      (!/** @type {!Element} */ (value).namespaceURI ||\\n       /** @type {!Element} */ (value).namespaceURI === HTML_NAMESPACE);\\n};\\n\\n/**\\n * Determines if a value is a DOM HTML Element of a specified tag name. For\\n * modern browsers, tags that provide access to special DOM APIs are implemented\\n * as special subclasses of HTMLElement.\\n * @param {*} value\\n * @param {!TagName} tagName\\n * @return {boolean}\\n */\\nconst isHtmlElementOfType = (value, tagName) => {\\n  return goog.isObject(value) && isHtmlElement(value) &&\\n      // Some uncommon JS environments (e.g. Cobalt 9) have issues with tag\\n      // capitalization.\\n      (/** @type {!HTMLElement} */ (value).tagName.toUpperCase() ===\\n       tagName.toString());\\n};\\n\\n/**\\n * Determines if a value is an <A> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlAnchorElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.A);\\n};\\n\\n/**\\n * Determines if a value is a <BUTTON> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlButtonElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.BUTTON);\\n};\\n\\n/**\\n * Determines if a value is a <LINK> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlLinkElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.LINK);\\n};\\n\\n/**\\n * Determines if a value is an <IMG> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlImageElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.IMG);\\n};\\n\\n/**\\n * Determines if a value is an <AUDIO> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlAudioElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.AUDIO);\\n};\\n\\n/**\\n * Determines if a value is a <VIDEO> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlVideoElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.VIDEO);\\n};\\n\\n/**\\n * Determines if a value is an <INPUT> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlInputElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.INPUT);\\n};\\n\\n/**\\n * Determines if a value is a <TEXTAREA> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlTextAreaElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.TEXTAREA);\\n};\\n\\n/**\\n * Determines if a value is a <CANVAS> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlCanvasElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.CANVAS);\\n};\\n\\n/**\\n * Determines if a value is an <EMBED> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlEmbedElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.EMBED);\\n};\\n\\n/**\\n * Determines if a value is a <FORM> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlFormElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.FORM);\\n};\\n\\n/**\\n * Determines if a value is a <FRAME> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlFrameElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.FRAME);\\n};\\n\\n/**\\n * Determines if a value is an <IFRAME> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlIFrameElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.IFRAME);\\n};\\n\\n/**\\n * Determines if a value is an <OBJECT> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlObjectElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.OBJECT);\\n};\\n\\n/**\\n * Determines if a value is a <SCRIPT> Element.\\n * @param {*} value\\n * @return {boolean}\\n */\\nconst isHtmlScriptElement = (value) => {\\n  return isHtmlElementOfType(value, TagName.SCRIPT);\\n};\\n\\nexports = {\\n  isElement,\\n  isHtmlElement,\\n  isHtmlElementOfType,\\n  isHtmlAnchorElement,\\n  isHtmlButtonElement,\\n  isHtmlLinkElement,\\n  isHtmlImageElement,\\n  isHtmlAudioElement,\\n  isHtmlVideoElement,\\n  isHtmlInputElement,\\n  isHtmlTextAreaElement,\\n  isHtmlCanvasElement,\\n  isHtmlEmbedElement,\\n  isHtmlFormElement,\\n  isHtmlFrameElement,\\n  isHtmlIFrameElement,\\n  isHtmlObjectElement,\\n  isHtmlScriptElement,\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"NodeType\",\"require\",\"TagName\",\"HTML_NAMESPACE\",\"isElement\",\"value\",\"isObject\",\"nodeType\",\"ELEMENT\",\"isHtmlElement\",\"namespaceURI\",\"isHtmlElementOfType\",\"tagName\",\"toUpperCase\",\"toString\",\"isHtmlAnchorElement\",\"A\",\"isHtmlButtonElement\",\"BUTTON\",\"isHtmlLinkElement\",\"LINK\",\"isHtmlImageElement\",\"IMG\",\"isHtmlAudioElement\",\"AUDIO\",\"isHtmlVideoElement\",\"VIDEO\",\"isHtmlInputElement\",\"INPUT\",\"isHtmlTextAreaElement\",\"TEXTAREA\",\"isHtmlCanvasElement\",\"CANVAS\",\"isHtmlEmbedElement\",\"EMBED\",\"isHtmlFormElement\",\"FORM\",\"isHtmlFrameElement\",\"FRAME\",\"isHtmlIFrameElement\",\"IFRAME\",\"isHtmlObjectElement\",\"OBJECT\",\"isHtmlScriptElement\",\"SCRIPT\",\"exports\"]\n}\n"]