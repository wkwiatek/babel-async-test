function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class TestClass {
  constructor() {
    var _this = this;

    this.hello = _asyncToGenerator(function* () {
      return _asyncToGenerator(function* () {
        console.log(_this, 'hello');
      })();
    });
  }

  __hello__COPY__() {
    return _asyncToGenerator(function* () {
      console.log(_this, 'hello');
    })();
  }

}

new TestClass().__hello__COPY__();
