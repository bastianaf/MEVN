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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/app/components/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/app/components/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar Task = function Task() {\n  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var mensaje = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  _classCallCheck(this, Task);\n\n  this.title = title;\n  this.mensaje = mensaje;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      task: new Task(),\n      tasks: [],\n      edit: false,\n      taskToEdit: ''\n    };\n  },\n  created: function created() {\n    this.getTasks();\n  },\n  methods: {\n    sendTask: function sendTask() {\n      var _this = this;\n\n      if (this.edit === false) {\n        fetch('/api/tasks', {\n          method: 'POST',\n          body: JSON.stringify(this.task),\n          headers: {\n            'Accept': 'application/json',\n            'Content-type': 'application/json'\n          }\n        }).then(function (res) {\n          return res.json();\n        }).then(function (data) {\n          _this.getTasks();\n\n          _this.task = new Task();\n        });\n      } else {\n        fetch('/api/tasks/' + this.taskToEdit, {\n          method: 'PUT',\n          body: JSON.stringify(this.task),\n          headers: {\n            'Accept': 'application/json',\n            'Content-type': 'application/json'\n          }\n        }).then(function (res) {\n          return res.json();\n        }).then(function (data) {\n          _this.getTasks();\n\n          _this.edit = false;\n        });\n      }\n    },\n    getTasks: function getTasks() {\n      var _this2 = this;\n\n      fetch('/api/tasks').then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        _this2.tasks = data;\n      });\n    },\n    deleteTask: function deleteTask(id) {\n      var _this3 = this;\n\n      fetch('/api/tasks/' + id, {\n        method: 'DELETE',\n        headers: {\n          'Accept': 'application/json',\n          'Content-type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return _this3.getTasks();\n      });\n    },\n    updateTask: function updateTask(id) {\n      var _this4 = this;\n\n      fetch('/api/tasks/' + id).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        _this4.task = new Task(data.title, data.mensaje);\n        _this4.taskToEdit = data._id;\n        _this4.edit = true;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/app/components/App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app/components/App.vue?vue&type=template&id=b64e4c62&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/app/components/App.vue?vue&type=template&id=b64e4c62& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"container\" }, [\n      _c(\"div\", { staticClass: \"row pt-5\" }, [\n        _c(\"div\", { staticClass: \"col-md-5\" }, [\n          _c(\"div\", { staticClass: \"card\" }, [\n            _c(\"div\", { staticClass: \"card-body\" }, [\n              _c(\n                \"form\",\n                {\n                  on: {\n                    submit: function($event) {\n                      $event.preventDefault()\n                      return _vm.sendTask($event)\n                    }\n                  }\n                },\n                [\n                  _c(\"div\", { staticClass: \"form-group\" }, [\n                    _c(\"input\", {\n                      directives: [\n                        {\n                          name: \"model\",\n                          rawName: \"v-model\",\n                          value: _vm.task.title,\n                          expression: \"task.title\"\n                        }\n                      ],\n                      staticClass: \"form-control\",\n                      attrs: { type: \"text\", placeholder: \"Titulo\" },\n                      domProps: { value: _vm.task.title },\n                      on: {\n                        input: function($event) {\n                          if ($event.target.composing) {\n                            return\n                          }\n                          _vm.$set(_vm.task, \"title\", $event.target.value)\n                        }\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"div\", { staticClass: \"form-group\" }, [\n                    _c(\"textarea\", {\n                      directives: [\n                        {\n                          name: \"model\",\n                          rawName: \"v-model\",\n                          value: _vm.task.mensaje,\n                          expression: \"task.mensaje\"\n                        }\n                      ],\n                      staticClass: \"form-control\",\n                      attrs: {\n                        cols: \"30\",\n                        rows: \"10\",\n                        placeholder: \"Mensaje...\"\n                      },\n                      domProps: { value: _vm.task.mensaje },\n                      on: {\n                        input: function($event) {\n                          if ($event.target.composing) {\n                            return\n                          }\n                          _vm.$set(_vm.task, \"mensaje\", $event.target.value)\n                        }\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _vm.edit === false\n                    ? [\n                        _c(\n                          \"button\",\n                          { staticClass: \"btn btn-primary btn-block\" },\n                          [_vm._v(\"Enviar\")]\n                        )\n                      ]\n                    : [\n                        _c(\n                          \"button\",\n                          { staticClass: \"btn btn-success btn-block\" },\n                          [_vm._v(\"Actualizar\")]\n                        )\n                      ]\n                ],\n                2\n              )\n            ])\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"col-md-5\" }, [\n          _c(\"table\", { staticClass: \"table table-bordered\" }, [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\n              \"tbody\",\n              _vm._l(_vm.tasks, function(task) {\n                return _c(\"tr\", [\n                  _c(\"td\", [_vm._v(\" \" + _vm._s(task.title))]),\n                  _vm._v(\" \"),\n                  _c(\"td\", [_vm._v(\" \" + _vm._s(task.mensaje))]),\n                  _vm._v(\" \"),\n                  _c(\"td\", [\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \"btn btn-secondary\",\n                        on: {\n                          click: function($event) {\n                            _vm.updateTask(task._id)\n                          }\n                        }\n                      },\n                      [_vm._v(\"Editar \")]\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"td\", [\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \"btn btn-danger\",\n                        on: {\n                          click: function($event) {\n                            _vm.deleteTask(task._id)\n                          }\n                        }\n                      },\n                      [_vm._v(\" Eliminar \")]\n                    )\n                  ])\n                ])\n              }),\n              0\n            )\n          ])\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"nav\", { staticClass: \"navbar navbar-light bg-light\" }, [\n      _c(\"a\", { staticClass: \"navbar-brand\", attrs: { href: \"/\" } }, [\n        _vm._v(\"Octopo\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"tr\", [\n        _c(\"th\", [_vm._v(\"Titulo\")]),\n        _vm._v(\" \"),\n        _c(\"th\", [_vm._v(\"Mensaje\")])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/app/components/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Bastian\\\\Desktop\\\\MEVN\\\\node_modules\\\\vue-loader\\\\lib\\\\runtime\\\\componentNormalizer.js'\");\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Bastian\\\\Desktop\\\\MEVN\\\\node_modules\\\\vue\\\\dist\\\\vue.runtime.esm.js'\");\n\n//# sourceURL=webpack:///./node_modules/vue/dist/vue.runtime.esm.js?");

/***/ }),

/***/ "./src/app/components/App.vue":
/*!************************************!*\
  !*** ./src/app/components/App.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_b64e4c62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b64e4c62& */ \"./src/app/components/App.vue?vue&type=template&id=b64e4c62&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/app/components/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_b64e4c62___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_b64e4c62___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/app/components/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/app/components/App.vue?");

/***/ }),

/***/ "./src/app/components/App.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/app/components/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/app/components/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/app/components/App.vue?");

/***/ }),

/***/ "./src/app/components/App.vue?vue&type=template&id=b64e4c62&":
/*!*******************************************************************!*\
  !*** ./src/app/components/App.vue?vue&type=template&id=b64e4c62& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b64e4c62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=b64e4c62& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app/components/App.vue?vue&type=template&id=b64e4c62&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b64e4c62___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b64e4c62___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/app/components/App.vue?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App.vue */ \"./src/app/components/App.vue\");\n\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: function render(h) {\n    return h(_components_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ })

/******/ });