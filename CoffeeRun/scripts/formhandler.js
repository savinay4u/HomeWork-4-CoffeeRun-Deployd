(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    // Code will go here
    if (!selector) {
      throw new Error('There is not selector, Please check the CODE :) ');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Selector not there--> ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function (event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };
  /*------------------UPDATE OF FORM handler -------------HW-4-----*/
  FormHandler.prototype.addInputHandler = function(fn) {
    console.log('Setting input handler for form');
    console.log('Setting input handler for form');
    this.$formElement.on('input', '[name="emailAddress"]', function(event) {
      var emailAddress = event.target.value;
      var message = '';
      if (fn(emailAddress)) {
        event.target.setCustomValidity('');
      } else {
        message = emailAddress + ' is not an authorized email address!';
        event.target.setCustomValidity(message);
      }
    });
  };
  /*-----------------------------------------------------HW-4-----*/

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
