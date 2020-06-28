/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_header_block_block_js__ = __webpack_require__(/*! ./custom-header-block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9jdXN0b20taGVhZGVyLWJsb2NrL2Jsb2NrLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./src/custom-header-block/block.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    PlainText = _wp$editor.PlainText;\nvar Button = wp.components.Button;\n\n\n\n\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('cgb/custom-header-block', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Custom Header Block'), // Block title.\n  icon: 'nametag',\n  category: 'common',\n  keywords: [__('custom-header-block')],\n  attributes: {\n    title: {\n      source: 'text',\n      selector: '.card__title'\n    },\n    body: {\n      type: 'array',\n      source: 'children',\n      selector: '.card__body'\n    },\n    imageAlt: {\n      attribute: 'alt',\n      selector: '.card__image'\n    },\n    imageUrl: {\n      attribute: 'src',\n      selector: '.card__image'\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        className = _ref.className,\n        setAttributes = _ref.setAttributes;\n\n    var getImageButton = function getImageButton(openEvent) {\n      if (attributes.imageUrl) {\n        return wp.element.createElement('img', {\n          src: attributes.imageUrl,\n          onClick: openEvent,\n          className: 'image'\n        });\n      } else {\n        return wp.element.createElement(\n          'div',\n          { className: 'button-container' },\n          wp.element.createElement(\n            Button,\n            {\n              onClick: openEvent,\n              className: 'button button-large'\n            },\n            'Pick an image'\n          )\n        );\n      }\n    };\n    return wp.element.createElement(\n      'div',\n      { className: 'container' },\n      wp.element.createElement(MediaUpload, {\n        onSelect: function onSelect(media) {\n          setAttributes({ imageAlt: media.alt, imageUrl: media.url });\n        },\n        type: 'image',\n        value: attributes.imageID,\n        render: function render(_ref2) {\n          var open = _ref2.open;\n          return getImageButton(open);\n        }\n      }),\n      wp.element.createElement(\n        'div',\n        { className: 'header-info' },\n        wp.element.createElement(PlainText, {\n          onChange: function onChange(content) {\n            return setAttributes({ title: content });\n          },\n          value: attributes.title,\n          placeholder: 'Your card title',\n          className: 'heading'\n        }),\n        wp.element.createElement(RichText, {\n          onChange: function onChange(content) {\n            return setAttributes({ body: content });\n          },\n          value: attributes.body,\n          multiline: 'p',\n          placeholder: 'Your card text'\n        })\n      )\n    );\n  },\n  save: function save(_ref3) {\n    var attributes = _ref3.attributes;\n\n\n    var cardImage = function cardImage(src, alt) {\n      if (!src) return null;\n\n      if (alt) {\n        return wp.element.createElement('img', {\n          className: 'card__image',\n          src: src,\n          alt: alt\n        });\n      }\n\n      // No alt set, so let's hide it from screen readers\n      return wp.element.createElement('img', {\n        className: 'card__image',\n        src: src,\n        alt: '',\n        'aria-hidden': 'true'\n      });\n    };\n\n    return wp.element.createElement(\n      'div',\n      { className: 'card' },\n      cardImage(attributes.imageUrl, attributes.imageAlt),\n      wp.element.createElement(\n        'div',\n        { className: 'card__content' },\n        wp.element.createElement(\n          'h3',\n          { className: 'card__title' },\n          attributes.title\n        ),\n        wp.element.createElement(\n          'div',\n          { className: 'card__body' },\n          attributes.body\n        )\n      )\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b20taGVhZGVyLWJsb2NrL2Jsb2NrLmpzP2Q5YmYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGVkaXRvci5NZWRpYVVwbG9hZCxcbiAgICBQbGFpblRleHQgPSBfd3AkZWRpdG9yLlBsYWluVGV4dDtcbnZhciBCdXR0b24gPSB3cC5jb21wb25lbnRzLkJ1dHRvbjtcblxuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9jdXN0b20taGVhZGVyLWJsb2NrJywge1xuICAvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cbiAgdGl0bGU6IF9fKCdDdXN0b20gSGVhZGVyIEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuICBpY29uOiAnbmFtZXRhZycsXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAga2V5d29yZHM6IFtfXygnY3VzdG9tLWhlYWRlci1ibG9jaycpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIHRpdGxlOiB7XG4gICAgICBzb3VyY2U6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdG9yOiAnLmNhcmRfX3RpdGxlJ1xuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgIHNvdXJjZTogJ2NoaWxkcmVuJyxcbiAgICAgIHNlbGVjdG9yOiAnLmNhcmRfX2JvZHknXG4gICAgfSxcbiAgICBpbWFnZUFsdDoge1xuICAgICAgYXR0cmlidXRlOiAnYWx0JyxcbiAgICAgIHNlbGVjdG9yOiAnLmNhcmRfX2ltYWdlJ1xuICAgIH0sXG4gICAgaW1hZ2VVcmw6IHtcbiAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXG4gICAgICBzZWxlY3RvcjogJy5jYXJkX19pbWFnZSdcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuICAgIHZhciBnZXRJbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldEltYWdlQnV0dG9uKG9wZW5FdmVudCkge1xuICAgICAgaWYgKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpIHtcbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgIHNyYzogYXR0cmlidXRlcy5pbWFnZVVybCxcbiAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnaW1hZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J1dHRvbi1jb250YWluZXInIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1BpY2sgYW4gaW1hZ2UnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdjb250YWluZXInIH0sXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG4gICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGltYWdlQWx0OiBtZWRpYS5hbHQsIGltYWdlVXJsOiBtZWRpYS51cmwgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmltYWdlSUQsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIG9wZW4gPSBfcmVmMi5vcGVuO1xuICAgICAgICAgIHJldHVybiBnZXRJbWFnZUJ1dHRvbihvcGVuKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2hlYWRlci1pbmZvJyB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy50aXRsZSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1lvdXIgY2FyZCB0aXRsZScsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnaGVhZGluZydcbiAgICAgICAgfSksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJvZHk6IGNvbnRlbnQgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5ib2R5LFxuICAgICAgICAgIG11bHRpbGluZTogJ3AnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnWW91ciBjYXJkIHRleHQnXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMykge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gX3JlZjMuYXR0cmlidXRlcztcblxuXG4gICAgdmFyIGNhcmRJbWFnZSA9IGZ1bmN0aW9uIGNhcmRJbWFnZShzcmMsIGFsdCkge1xuICAgICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuXG4gICAgICBpZiAoYWx0KSB7XG4gICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdjYXJkX19pbWFnZScsXG4gICAgICAgICAgc3JjOiBzcmMsXG4gICAgICAgICAgYWx0OiBhbHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vIGFsdCBzZXQsIHNvIGxldCdzIGhpZGUgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICBjbGFzc05hbWU6ICdjYXJkX19pbWFnZScsXG4gICAgICAgIHNyYzogc3JjLFxuICAgICAgICBhbHQ6ICcnLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2NhcmQnIH0sXG4gICAgICBjYXJkSW1hZ2UoYXR0cmlidXRlcy5pbWFnZVVybCwgYXR0cmlidXRlcy5pbWFnZUFsdCksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2NhcmRfX2NvbnRlbnQnIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDMnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2FyZF9fdGl0bGUnIH0sXG4gICAgICAgICAgYXR0cmlidXRlcy50aXRsZVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjYXJkX19ib2R5JyB9LFxuICAgICAgICAgIGF0dHJpYnV0ZXMuYm9keVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3VzdG9tLWhlYWRlci1ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************!*\
  !*** ./src/custom-header-block/editor.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b20taGVhZGVyLWJsb2NrL2VkaXRvci5zY3NzPzVkOTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jdXN0b20taGVhZGVyLWJsb2NrL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************************!*\
  !*** ./src/custom-header-block/style.scss ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b20taGVhZGVyLWJsb2NrL3N0eWxlLnNjc3M/ZGI1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2N1c3RvbS1oZWFkZXItYmxvY2svc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);