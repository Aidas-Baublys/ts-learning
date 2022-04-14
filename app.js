function foo(param) {
    console.log(param());
}
foo(function () { return "Suka"; });
