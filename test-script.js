class TestClass {
  hello = async () => {
    console.log(this, 'hello')
  }
}

new TestClass().__hello__COPY__()