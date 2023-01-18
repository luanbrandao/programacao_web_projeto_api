"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function (name) {
        return "Ol\u00E1 ".concat(name);
    };
    return Person;
}());
var p = new Person();
p.speak("luan");
p.speak("fulano");
