type Param = "Suka" | "Kurwa" | "Bybys";

function foo(param: () => string): void {
  console.log(param());
}

foo(() => "Suka");
