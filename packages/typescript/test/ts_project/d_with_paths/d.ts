import { a } from "../a/a"; // SHOULD FAIL HERE per https://github.com/microsoft/TypeScript/issues/36743
import { sayHello } from "../b/b";
import { FOO } from "@company/b/inner";
import { sayHello as otherHello } from "@company/b";

sayHello("world");
console.error(a);
otherHello(FOO);
