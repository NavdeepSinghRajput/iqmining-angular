(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-toastr/toastr.css":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/ngx-toastr/toastr.css ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZ3gtdG9hc3RyL3RvYXN0ci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0pBQWtKOztBQUVsSixhQUFhOztBQUNiO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUNBO0VBQ0UsTUFBTTtFQUNOLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUNBOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTs7eURBRXlEOztBQUN6RDtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUNBLGlIQUFpSDs7QUFDakg7RUFDRSxxbEJBQXFsQjtBQUN2bEI7O0FBQ0Esa0hBQWtIOztBQUNsSDtFQUNFLDZqQkFBNmpCO0FBQy9qQjs7QUFDQSwyR0FBMkc7O0FBQzNHO0VBQ0Usd2RBQXdkO0FBQzFkOztBQUNBLDBIQUEwSDs7QUFDMUg7RUFDRSxzb0JBQXNvQjtBQUN4b0I7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0Esc0JBQXNCOztBQUN0QjtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjtBQUNGOztBQUNBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvbmd4LXRvYXN0ci90b2FzdHIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYmFzZWQgb24gYW5ndWxhci10b2FzdHIgY3NzIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3hhbmR4c3MvYW5ndWxhci10b2FzdHIvYmxvYi9jYjUwOGZlNjgwMWQ2YjI4OGQzYWZjNTI1YmI0MGZlZTFiMTAxNjUwL2Rpc3QvYW5ndWxhci10b2FzdHIuY3NzICovXG5cbi8qIHBvc2l0aW9uICovXG4udG9hc3QtY2VudGVyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnRvYXN0LXRvcC1jZW50ZXIge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC1ib3R0b20tY2VudGVyIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtdG9wLWZ1bGwtd2lkdGgge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LXRvcC1sZWZ0IHtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuLnRvYXN0LXRvcC1yaWdodCB7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG59XG4udG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDEycHg7XG4gIGJvdHRvbTogMTJweDtcbn1cbi50b2FzdC1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cblxuLyogdG9hc3Qgc3R5bGVzICovXG4udG9hc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50b2FzdC1tZXNzYWdlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnRvYXN0LW1lc3NhZ2UgYSxcbi50b2FzdC1tZXNzYWdlIGxhYmVsIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMC4zZW07XG4gIHRvcDogLTAuM2VtO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xuICAvKiBvcGFjaXR5OiAwLjg7ICovXG59XG4udG9hc3QtY2xvc2UtYnV0dG9uOmhvdmVyLFxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC40O1xufVxuLypBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXG4gaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXG4gSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cbmJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuLnRvYXN0LWNvbnRhaW5lciAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDZweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICM5OTk5OTk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0cjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2luZm8tY2lyY2xlLnN2ZyAqL1xuLnRvYXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkuMDQzIDggOCAxMTkuMDgzIDggMjU2YzAgMTM2Ljk5NyAxMTEuMDQzIDI0OCAyNDggMjQ4czI0OC0xMTEuMDAzIDI0OC0yNDhDNTA0IDExOS4wODMgMzkyLjk1NyA4IDI1NiA4em0wIDExMGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvY2hlY2suc3ZnICovXG4udG9hc3Qtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2V4Y2xhbWF0aW9uLXRyaWFuZ2xlLnN2ZyAqL1xuLnRvYXN0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHonLyUzRSUzQy9zdmclM0VcIik7XG59XG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1jZW50ZXIgLm5neC10b2FzdHIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLFxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tZnVsbC13aWR0aCAubmd4LXRvYXN0ciB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubmd4LXRvYXN0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xufVxuLnRvYXN0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEMzYyRjtcbn1cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGOTZCNDtcbn1cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTQwNjtcbn1cbi50b2FzdC1wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC40O1xufVxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgIHdpZHRoOiAxMWVtO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMThlbTtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgdG9wOiAtMC4yZW07XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gICAgd2lkdGg6IDI1ZW07XG4gIH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import \"https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200;300;400;500;600;700;900&display=swap\";\n@charset \"UTF-8\";\n/*320px ??? 480px: Mobile devices 481px ??? 768px: iPads,\nTablets 769px ??? 1024px: Small screens,\nlaptops 1025px ??? 1200px: Desktops,\nlarge screens 1201px and more ??? Extra large screens,\nTV\n*/\n@media (max-width: 1200px) {\n  .min-h-435 {\n    height: auto !important;\n  }\n}\n@media (max-width: 993px) {\n  .aboutbg {\n    padding-bottom: 30px !important;\n  }\n\n  .form {\n    width: 100% !important;\n  }\n\n  .form-panel.one {\n    padding: 15px !important;\n    width: 100% !important;\n  }\n\n  .calc-table {\n    min-width: 767px;\n    font-size: 0.8rem;\n  }\n\n  .tab-content {\n    overflow: auto;\n  }\n}\n@media (max-width: 767px) {\n  .fancypres {\n    padding-left: 0px !important;\n  }\n  .fancypres span.count {\n    position: static !important;\n    font-size: 50px !important;\n  }\n\n  .main-wrapper ul.nav.nav-tabs button {\n    padding: 8px !important;\n  }\n\n  .calc-td .btn {\n    font-size: 13px !important;\n    padding: 5px 10px !important;\n  }\n}\nbody {\n  font-family: \"Libre Franklin\", sans-serif;\n  background: #111930;\n  line-height: 1.5rem;\n}\n.nav-link {\n  font-size: 0.9rem;\n}\ninput,\ntextarea {\n  outline: none !important;\n}\n.curosr-pointer {\n  cursor: pointer;\n}\n.pt-50 {\n  padding-top: 50px;\n}\n.fw-bold {\n  font-weight: 600 !important;\n}\n.smheading {\n  color: #dbef42;\n}\n.text-light-blue {\n  color: #979fb6;\n}\n.bg-blue {\n  background: #223363 !important;\n}\n.text-yellow {\n  color: #dbef42;\n}\n.cloud_mining {\n  background: #223363;\n}\n.text-aqua-green {\n  color: #5ef7e5;\n}\n.section_heading h1 {\n  color: #dbef42;\n  font-weight: bold;\n}\n.roundedbox {\n  background: #111930;\n  border-radius: 15px;\n  height: 100%;\n}\n.btn-yellow {\n  background: #dbef42;\n  border: 0px solid;\n  color: #000;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-weight: 600;\n}\n.btn-round {\n  border: 0px solid;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-weight: 600;\n}\n.bg-yellow {\n  background: #dbef42 !important;\n}\n.calculator {\n  padding: 15px;\n  background: #fff;\n  border-radius: 10px;\n}\n.calculator select.form-control {\n  border: 2px solid;\n  background-image: url('caret.png');\n  background-size: 13px;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 10px) center;\n}\n.calculator .form-control {\n  height: 50px;\n}\n.income-count {\n  font-size: 3rem !important;\n}\n.palybtn {\n  background: #fff;\n  height: 65px;\n  width: 65px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  position: relative;\n  border-color: #111930 #111930 #5ef7e5 #111930;\n  border-style: solid;\n  border-width: 4px;\n  -webkit-animation: mymove 2s infinite;\n          animation: mymove 2s infinite;\n}\n.palybtn_ {\n  background: #fff;\n  height: 65px;\n  width: 65px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  position: relative;\n  box-shadow: 0px 0px 0px 15px rgba(255, 255, 255, 0.2);\n  -webkit-animation: mymove 2s infinite;\n          animation: mymove 2s infinite;\n}\n.videosec {\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.reviewbox {\n  background: #111930;\n}\n.review_sec {\n  padding: 25px;\n  background-image: url('quote_icon.png');\n  background-position: calc(100% - 20px) calc(100% - 20px);\n  background-size: 70px;\n  background-repeat: no-repeat;\n  background-color: #111930;\n}\n.star_rate {\n  display: inline-block;\n  margin-right: 7px;\n}\n.profile_pic {\n  height: 80px;\n  width: 80px;\n  overflow: hidden;\n  border-radius: 100%;\n}\n.profile_pic > img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.worldmap {\n  background: url('world_map.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.section_heading-2 h1 {\n  font-weight: 200;\n  font-size: 2.5rem;\n  color: #fff;\n}\nspan.steps {\n  font-size: 0.8rem;\n  color: #fff;\n  font-weight: 600;\n  padding: 4px 0px 4px 6px;\n  display: inline-block;\n  width: 58px;\n  text-align: center;\n  border-radius: 4px;\n  position: relative;\n  margin-right: 20px;\n}\nspan.steps:after {\n  content: \"\";\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  transform: rotate(45deg);\n  border-radius: 4px;\n  right: -8px;\n  z-index: -1;\n}\nspan.steps.bg-warning:after {\n  background: #ffc107 !important;\n}\nspan.steps.bg-primary:after {\n  background: #0d6efd !important;\n}\nspan.steps.bg-danger:after {\n  background: #dc3545 !important;\n}\n.carousel-indicators {\n  position: relative;\n}\n.carousel-indicators button {\n  width: 10px !important;\n  border-radius: 100%;\n  height: 10px !important;\n}\n.blogHolder {\n  overflow: hidden;\n  border-radius: 20px;\n}\n.blogHolder > img {\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.getstart {\n  background: url('bg.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.social_sec > a {\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n  border: 1px solid #8e919c;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #8e919c;\n  text-decoration: none;\n  font-size: 25px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n.social_sec {\n  display: flex;\n}\nfooter h5 {\n  color: #fff;\n  margin-bottom: 18px;\n  font-weight: 300;\n}\n.footer-link {\n  color: #8f929d;\n  text-decoration: none;\n}\nfooter {\n  padding-top: 30px;\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#111930+0,22283f+100 */\n  background: #111930;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #111930 0%, #22283f 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#111930\", endColorstr=\"#22283f\", GradientType=1);\n  /* IE6-9 */\n}\nul.footerlist {\n  list-style: none;\n  padding-left: 0px;\n}\nul.footerlist a {\n  display: block;\n  text-decoration: none;\n  color: #8f929d;\n  padding: 5px 0px;\n}\n.navbar-light .navbar-toggler-icon {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n}\n.card {\n  background: #223263;\n}\nselect.form-control {\n  background: url('yellow_triangle.png');\n  background-position: calc(100% - 10px) center;\n}\n.card-body {\n  padding: 20px;\n}\n.card-body .text-muted {\n  color: #9c9c9c !important;\n}\n.form-group {\n  margin-bottom: 1.3rem;\n}\n.form-control {\n  border: 2px solid #fff;\n  background: transparent;\n  min-height: 50px;\n}\n.btn-outline-upload {\n  position: relative;\n  color: #fff;\n  border: 1px solid #dbef42;\n  padding: 15px 16px;\n}\n.btn-outline-upload > input {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.cardform .form-control {\n  background: transparent;\n  color: #fff;\n}\n.cardform .form-control:focus {\n  background-color: transparent !important;\n}\n.neg-btm-40 {\n  margin-bottom: -40px;\n}\n.social_btns > a {\n  display: inline-block;\n  margin-bottom: 15px;\n}\n.text-right {\n  text-align: right !important;\n}\n.pointer {\n  cursor: pointer;\n}\n.d-block {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9FOlxccHJvamVjdHNcXExpcXVpZC1taW5pbmctYW5ndWxhclxcaXFtaW5pbmctYW5ndWxhci9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0U6XFxwcm9qZWN0c1xcTGlxdWlkLW1pbmluZy1hbmd1bGFyXFxpcW1pbmluZy1hbmd1bGFyL3NyY1xccmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSwrR0FBQTtBQ0FSLGdCQUFnQjtBQ0FoQjs7Ozs7Q0FBQTtBQWNBO0VBQ0U7SUFDRSx1QkFBQTtFRExGO0FBQ0Y7QUNPQTtFQUNFO0lBQ0UsK0JBQUE7RURMRjs7RUNPQTtJQUNFLHNCQUFBO0VESkY7O0VDT0E7SUFDRSx3QkFBQTtJQUNBLHNCQUFBO0VESkY7O0VDT0E7SUFFRSxnQkFBQTtJQUVBLGlCQUFBO0VETkY7O0VDU0E7SUFDRSxjQUFBO0VETkY7QUFDRjtBQ1NBO0VBQ0U7SUFDRSw0QkFBQTtFRFBGO0VDUUU7SUFDRSwyQkFBQTtJQUNBLDBCQUFBO0VETko7O0VDU0E7SUFDRSx1QkFBQTtFRE5GOztFQ1NBO0lBQ0UsMEJBQUE7SUFDQSw0QkFBQTtFRE5GO0FBQ0Y7QUQ3Q0E7RUFDRSx5Q0FBQTtFQUNBLG1CQVBTO0VBU1QsbUJBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxpQkFBQTtBQytDRjtBRDdDQTs7RUFFRSx3QkFBQTtBQ2dERjtBRDlDQTtFQUNFLGVBQUE7QUNpREY7QUQvQ0E7RUFDRSxpQkFBQTtBQ2tERjtBRC9DQTtFQUNFLDJCQUFBO0FDa0RGO0FEL0NBO0VBQ0UsY0E3QmE7QUMrRWY7QURoREE7RUFDRSxjQUFBO0FDbURGO0FEakRBO0VBQ0UsOEJBQUE7QUNvREY7QURqREE7RUFDRSxjQXZDYTtBQzJGZjtBRGpEQTtFQUNFLG1CQTFDWTtBQzhGZDtBRGpEQTtFQUNFLGNBN0NXO0FDaUdiO0FEaERFO0VBQ0UsY0FwRFc7RUFxRFgsaUJBQUE7QUNtREo7QUQvQ0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2tERjtBRC9DQTtFQUNFLG1CQWhFYTtFQWlFYixpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNrREY7QURoREE7RUFDRSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2tERjtBRGhEQTtFQUNFLDhCQUFBO0FDbURGO0FEaERBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNtREY7QURoREE7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZDQUFBO0FDbURGO0FEaERBO0VBQ0UsWUFBQTtBQ21ERjtBRGhEQTtFQUNFLDBCQUFBO0FDbURGO0FEaERBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDbURGO0FEaERBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNtREY7QUQ3QkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNnQ0Y7QUQ3QkE7RUFDRSxtQkFsS1M7QUNrTVg7QUQ3QkE7RUFDRSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSx3REFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ2dDRjtBRDdCQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNnQ0Y7QUQ3QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNnQ0Y7QUQ3QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNnQ0Y7QUQ3QkE7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ2dDRjtBRDdCQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDZ0NGO0FEN0JBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZ0NGO0FEN0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNnQ0Y7QUQ3QkE7RUFDRSw4QkFBQTtBQ2dDRjtBRDdCQTtFQUNFLDhCQUFBO0FDZ0NGO0FEN0JBO0VBQ0UsOEJBQUE7QUNnQ0Y7QUQ3QkE7RUFDRSxrQkFBQTtBQ2dDRjtBRDdCQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2dDRjtBRDdCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNnQ0Y7QUQ3QkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2dDRjtBRDdCQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ2dDRjtBRDdCQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2dDRjtBRDdCQTtFQUNFLGFBQUE7QUNnQ0Y7QUQ3QkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2dDRjtBRDdCQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ2dDRjtBRDdCQTtFQUNFLGlCQUFBO0VBQ0EsaUhBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUVBLDRCQUFBO0VBQ0EsK0RBQUE7RUFDQSxxREFBQTtFQUNBLGtIQUFBO0VBQ0EsVUFBQTtBQ2dDRjtBRDdCQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNnQ0Y7QUQ3QkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNnQ0Y7QUQ5QkE7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0FDaUNGO0FEL0JBO0VBQ0UsbUJBQUE7QUNrQ0Y7QURoQ0E7RUFDRSxzQ0FBQTtFQUNBLDZDQUFBO0FDbUNGO0FEakNBO0VBQ0UsYUFBQTtBQ29DRjtBRGxDQTtFQUNFLHlCQUFBO0FDcUNGO0FEbkNBO0VBQ0UscUJBQUE7QUNzQ0Y7QURuQ0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNzQ0Y7QURuQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDc0NGO0FEbkNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ3NDRjtBRG5DQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQ3NDRjtBRG5DQTtFQUNFLHdDQUFBO0FDc0NGO0FEbkNBO0VBQ0Usb0JBQUE7QUNzQ0Y7QURwQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDdUNGO0FEcENBO0VBQ0UsNEJBQUE7QUN1Q0Y7QURyQ0E7RUFDRSxlQUFBO0FDd0NGO0FEdENBO0VBQ0UsY0FBQTtBQ3lDRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStGcmFua2xpbjp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcIixcclxuICBcIi4vcmVzcG9uc2l2ZS5zY3NzXCI7XHJcbi8vIEBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwXCI7XHJcbiRiZy1jb2xvcjogIzExMTkzMDtcclxuJHNlY29uZC1jb2xvcjogI2RiZWY0MjtcclxuJHRoaXJkLWNvbG9yOiAjMjIzMzYzO1xyXG4kYXF1YS1ncmVlbjogIzVlZjdlNTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEZyYW5rbGluXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xyXG4gIC8vIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uY3Vyb3NyLXBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHQtNTAge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uZnctYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc21oZWFkaW5nIHtcclxuICBjb2xvcjogJHNlY29uZC1jb2xvcjtcclxufVxyXG4udGV4dC1saWdodC1ibHVlIHtcclxuICBjb2xvcjogIzk3OWZiNjtcclxufVxyXG4uYmctYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogJHRoaXJkLWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXllbGxvdyB7XHJcbiAgY29sb3I6ICRzZWNvbmQtY29sb3I7XHJcbn1cclxuXHJcbi5jbG91ZF9taW5pbmcge1xyXG4gIGJhY2tncm91bmQ6ICR0aGlyZC1jb2xvcjtcclxufVxyXG5cclxuLnRleHQtYXF1YS1ncmVlbiB7XHJcbiAgY29sb3I6ICRhcXVhLWdyZWVuO1xyXG59XHJcblxyXG4uc2VjdGlvbl9oZWFkaW5nIHtcclxuICBoMSB7XHJcbiAgICBjb2xvcjogJHNlY29uZC1jb2xvcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdW5kZWRib3gge1xyXG4gIGJhY2tncm91bmQ6ICMxMTE5MzA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4teWVsbG93IHtcclxuICBiYWNrZ3JvdW5kOiAkc2Vjb25kLWNvbG9yO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJ0bi1yb3VuZCB7XHJcbiAgYm9yZGVyOiAwcHggc29saWQ7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJnLXllbGxvdyB7XHJcbiAgYmFja2dyb3VuZDogJHNlY29uZC1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FsY3VsYXRvciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jYWxjdWxhdG9yIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvaW1hZ2VzL2NhcmV0LnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxM3B4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMTBweCkgY2VudGVyO1xyXG59XHJcblxyXG4uY2FsY3VsYXRvciAuZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmNvbWUtY291bnQge1xyXG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFseWJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1jb2xvcjogIzExMTkzMCAjMTExOTMwICM1ZWY3ZTUgIzExMTkzMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNHB4O1xyXG4gIGFuaW1hdGlvbjogbXltb3ZlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG4ucGFseWJ0bl8ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxNXB4IHJnYigyNTUgMjU1IDI1NSAvIDIwJSk7XHJcbiAgYW5pbWF0aW9uOiBteW1vdmUgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8vIEBrZXlmcmFtZXMgbXltb3ZlIHtcclxuLy8gICAgIGZyb20ge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgdG8ge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLnBhbHlidG4gc3ZnIHtcclxuLy8gICAgIGFuaW1hdGlvbjogbXltb3ZlLXIgMnMgaW5maW5pdGU7XHJcbi8vIH1cclxuLy8gQGtleWZyYW1lcyBteW1vdmVfciB7XHJcbi8vICAgICBmcm9tIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHRvIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi52aWRlb3NlYyB7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXZpZXdib3gge1xyXG4gIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxufVxyXG5cclxuLnJldmlld19zZWMge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9xdW90ZV9pY29uLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDcwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExOTMwO1xyXG59XHJcblxyXG4uc3Rhcl9yYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX3BpYyB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGVfcGljID4gaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi53b3JsZG1hcCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiYXNzZXRzL2ltYWdlcy93b3JsZF9tYXAucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnNlY3Rpb25faGVhZGluZy0yIGgxIHtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5zcGFuLnN0ZXBzIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDRweCAwcHggNHB4IDZweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5zcGFuLnN0ZXBzOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICByaWdodDogLThweDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuc3Bhbi5zdGVwcy5iZy13YXJuaW5nOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNwYW4uc3RlcHMuYmctcHJpbWFyeTphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogIzBkNmVmZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zcGFuLnN0ZXBzLmJnLWRhbmdlcjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBidXR0b24ge1xyXG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJsb2dIb2xkZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmJsb2dIb2xkZXIgPiBpbWcge1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5nZXRzdGFydCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiYXNzZXRzL2ltYWdlcy9iZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc29jaWFsX3NlYyA+IGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlOTE5YztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogIzhlOTE5YztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNvY2lhbF9zZWMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmZvb3RlciBoNSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmsge1xyXG4gIGNvbG9yOiAjOGY5MjlkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cHM6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzExMTkzMCswLDIyMjgzZisxMDAgKi9cclxuICBiYWNrZ3JvdW5kOiAjMTExOTMwO1xyXG4gIC8qIE9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICMxMTE5MzAgMCUsICMyMjI4M2YgMTAwJSk7XHJcbiAgLyogRkYzLjYtMTUgKi9cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMTExOTMwIDAlLCAjMjIyODNmIDEwMCUpO1xyXG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTExOTMwIDAlLCAjMjIyODNmIDEwMCUpO1xyXG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMxMTE5MzAnLCBlbmRDb2xvcnN0cj0nIzIyMjgzZicsIEdyYWRpZW50VHlwZT0xKTtcclxuICAvKiBJRTYtOSAqL1xyXG59XHJcblxyXG51bC5mb290ZXJsaXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG51bC5mb290ZXJsaXN0IGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzhmOTI5ZDtcclxuICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIzMjYzO1xyXG59XHJcbnNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gIGJhY2tncm91bmQ6IHVybChhc3NldHMvaW1hZ2VzL3llbGxvd190cmlhbmdsZS5wbmcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDEwcHgpIGNlbnRlcjtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5jYXJkLWJvZHkgLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiAjOWM5YzljICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuM3JlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtdXBsb2FkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZWY0MjtcclxuICBwYWRkaW5nOiAxNXB4IDE2cHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS11cGxvYWQgPiBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2FyZGZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkZm9ybSAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmVnLWJ0bS00MCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XHJcbn1cclxuLnNvY2lhbF9idG5zID4gYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcbi5wb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmQtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0ZyYW5rbGluOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFwiO1xuLyozMjBweCDigJQgNDgwcHg6IE1vYmlsZSBkZXZpY2VzIDQ4MXB4IOKAlCA3NjhweDogaVBhZHMsXG5UYWJsZXRzIDc2OXB4IOKAlCAxMDI0cHg6IFNtYWxsIHNjcmVlbnMsXG5sYXB0b3BzIDEwMjVweCDigJQgMTIwMHB4OiBEZXNrdG9wcyxcbmxhcmdlIHNjcmVlbnMgMTIwMXB4IGFuZCBtb3JlIOKAlCBFeHRyYSBsYXJnZSBzY3JlZW5zLFxuVFZcbiovXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5taW4taC00MzUge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkzcHgpIHtcbiAgLmFib3V0Ymcge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mb3JtLXBhbmVsLm9uZSB7XG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2FsYy10YWJsZSB7XG4gICAgbWluLXdpZHRoOiA3NjdweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuXG4gIC50YWItY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZmFuY3lwcmVzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5mYW5jeXByZXMgc3Bhbi5jb3VudCB7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW4td3JhcHBlciB1bC5uYXYubmF2LXRhYnMgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYWxjLXRkIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJMaWJyZSBGcmFua2xpblwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjMTExOTMwO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4ubmF2LWxpbmsge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmN1cm9zci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHQtNTAge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmZ3LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi5zbWhlYWRpbmcge1xuICBjb2xvcjogI2RiZWY0Mjtcbn1cblxuLnRleHQtbGlnaHQtYmx1ZSB7XG4gIGNvbG9yOiAjOTc5ZmI2O1xufVxuXG4uYmctYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMyMjMzNjMgIWltcG9ydGFudDtcbn1cblxuLnRleHQteWVsbG93IHtcbiAgY29sb3I6ICNkYmVmNDI7XG59XG5cbi5jbG91ZF9taW5pbmcge1xuICBiYWNrZ3JvdW5kOiAjMjIzMzYzO1xufVxuXG4udGV4dC1hcXVhLWdyZWVuIHtcbiAgY29sb3I6ICM1ZWY3ZTU7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcgaDEge1xuICBjb2xvcjogI2RiZWY0MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yb3VuZGVkYm94IHtcbiAgYmFja2dyb3VuZDogIzExMTkzMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnRuLXllbGxvdyB7XG4gIGJhY2tncm91bmQ6ICNkYmVmNDI7XG4gIGJvcmRlcjogMHB4IHNvbGlkO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYnRuLXJvdW5kIHtcbiAgYm9yZGVyOiAwcHggc29saWQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJnLXllbGxvdyB7XG4gIGJhY2tncm91bmQ6ICNkYmVmNDIgIWltcG9ydGFudDtcbn1cblxuLmNhbGN1bGF0b3Ige1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FsY3VsYXRvciBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvaW1hZ2VzL2NhcmV0LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTNweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMTBweCkgY2VudGVyO1xufVxuXG4uY2FsY3VsYXRvciAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW5jb21lLWNvdW50IHtcbiAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYWx5YnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogNjVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1jb2xvcjogIzExMTkzMCAjMTExOTMwICM1ZWY3ZTUgIzExMTkzMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gIGFuaW1hdGlvbjogbXltb3ZlIDJzIGluZmluaXRlO1xufVxuXG4ucGFseWJ0bl8ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiA2NXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGFuaW1hdGlvbjogbXltb3ZlIDJzIGluZmluaXRlO1xufVxuXG4udmlkZW9zZWMge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJldmlld2JveCB7XG4gIGJhY2tncm91bmQ6ICMxMTE5MzA7XG59XG5cbi5yZXZpZXdfc2VjIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9xdW90ZV9pY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQtc2l6ZTogNzBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTkzMDtcbn1cblxuLnN0YXJfcmF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi5wcm9maWxlX3BpYyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5wcm9maWxlX3BpYyA+IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ud29ybGRtYXAge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJhc3NldHMvaW1hZ2VzL3dvcmxkX21hcC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uc2VjdGlvbl9oZWFkaW5nLTIgaDEge1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnNwYW4uc3RlcHMge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDRweCAwcHggNHB4IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5zcGFuLnN0ZXBzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcmlnaHQ6IC04cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5zcGFuLnN0ZXBzLmJnLXdhcm5pbmc6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4uc3RlcHMuYmctcHJpbWFyeTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMwZDZlZmQgIWltcG9ydGFudDtcbn1cblxuc3Bhbi5zdGVwcy5iZy1kYW5nZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBidXR0b24ge1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmJsb2dIb2xkZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYmxvZ0hvbGRlciA+IGltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uZ2V0c3RhcnQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2JnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNvY2lhbF9zZWMgPiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGU5MTljO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICM4ZTkxOWM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc29jaWFsX3NlYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmZvb3RlciBoNSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZm9vdGVyLWxpbmsge1xuICBjb2xvcjogIzhmOTI5ZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHBzOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyMxMTE5MzArMCwyMjI4M2YrMTAwICovXG4gIGJhY2tncm91bmQ6ICMxMTE5MzA7XG4gIC8qIE9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMTExOTMwIDAlLCAjMjIyODNmIDEwMCUpO1xuICAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMTExOTMwIDAlLCAjMjIyODNmIDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMTE5MzAgMCUsICMyMjI4M2YgMTAwJSk7XG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiIzExMTkzMFwiLCBlbmRDb2xvcnN0cj1cIiMyMjI4M2ZcIiwgR3JhZGllbnRUeXBlPTEpO1xuICAvKiBJRTYtOSAqL1xufVxuXG51bC5mb290ZXJsaXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbnVsLmZvb3Rlcmxpc3QgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOGY5MjlkO1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogIzIyMzI2Mztcbn1cblxuc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQ6IHVybChhc3NldHMvaW1hZ2VzL3llbGxvd190cmlhbmdsZS5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxMHB4KSBjZW50ZXI7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY2FyZC1ib2R5IC50ZXh0LW11dGVkIHtcbiAgY29sb3I6ICM5YzljOWMgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxLjNyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cblxuLmJ0bi1vdXRsaW5lLXVwbG9hZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmVmNDI7XG4gIHBhZGRpbmc6IDE1cHggMTZweDtcbn1cblxuLmJ0bi1vdXRsaW5lLXVwbG9hZCA+IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYXJkZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZGZvcm0gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5uZWctYnRtLTQwIHtcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XG59XG5cbi5zb2NpYWxfYnRucyA+IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59IiwiLyozMjBweCDigJQgNDgwcHg6IE1vYmlsZSBkZXZpY2VzIDQ4MXB4IOKAlCA3NjhweDogaVBhZHMsXHJcblRhYmxldHMgNzY5cHgg4oCUIDEwMjRweDogU21hbGwgc2NyZWVucyxcclxubGFwdG9wcyAxMDI1cHgg4oCUIDEyMDBweDogRGVza3RvcHMsXHJcbmxhcmdlIHNjcmVlbnMgMTIwMXB4IGFuZCBtb3JlIOKAlCBFeHRyYSBsYXJnZSBzY3JlZW5zLFxyXG5UVlxyXG4qL1xyXG5cclxuJGlwaG9uZTU6IDM2MHB4O1xyXG4kdGFibGV0czogNzY3cHg7XHJcbiRpcGFkTGFuZHNjYXA6IDc2OHB4O1xyXG4kYXZlcmFnZXNpemU6IDk5M3B4O1xyXG4kaXBhZFBvcnRyYWl0OiAxMDI0cHg7XHJcbiRkZXNrdG9wOiAxMjAwcHg7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3ApIHtcclxuICAubWluLWgtNDM1IHtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogJGF2ZXJhZ2VzaXplKSB7XHJcbiAgLmFib3V0Ymcge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb3JtLXBhbmVsLm9uZSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhbGMtdGFibGUge1xyXG4gICAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDc2N3B4O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXRzKSB7XHJcbiAgLmZhbmN5cHJlcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgc3Bhbi5jb3VudCB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluLXdyYXBwZXIgdWwubmF2Lm5hdi10YWJzIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYWxjLXRkIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/ngx-toastr/toastr.css":
/*!********************************************!*\
  !*** ./node_modules/ngx-toastr/toastr.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../postcss-loader/src??embedded!./toastr.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-toastr/toastr.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!********************************************************************!*\
  !*** multi ./src/styles.scss ./node_modules/ngx-toastr/toastr.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\projects\Liquid-mining-angular\iqmining-angular\src\styles.scss */"./src/styles.scss");
module.exports = __webpack_require__(/*! E:\projects\Liquid-mining-angular\iqmining-angular\node_modules\ngx-toastr\toastr.css */"./node_modules/ngx-toastr/toastr.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map