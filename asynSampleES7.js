require("babel-core/register");
require("babel-polyfill");

async function f() {
  return await 123;
}

f().then(v => console.log(v))
