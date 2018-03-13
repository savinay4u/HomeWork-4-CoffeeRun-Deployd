(function(window) {
  'use strict';
  var PS = '[payment ="form"]';
  var App = window.App;
  var MyPaymentHandlerForPopup = App.MyPaymentHandlerForPopup;
  var MyPaymentHandlerForPopup = new MyPaymentHandlerForPopup(PS);
  MyPaymentHandlerForPopup.addSubmitHandler();
})(window);
