Implementation of a Default Arguments Function
This function is quite similar to a curry function. First Argument is a function to return later the other arguments is Params arg.
Params Arg - is an object which should have same key as arguments of the first arguments. 
if Param Arg is set fully then the invocation of this function whithout any args will return a value 
i.e. defaultArguments(add, {a: 3, b: 5})() -> 8
if Param Arg isn't set fuly and there is not enough values to work with it will return NaN in the case of add function 
i.e. defaultArguments(add, {a: 3,})() -> NaN
i.e. defaultArguments(add, {a: 3})(5) -> 8
Default arguments are ignored if there enough second invocation arguments
i.e. defaultArguments(add, {a: 3, b: 5})(4, 5) -> 9
i.e. defaultArguments(add, {a: 3, b: 5})(10) -> 13
i.e.defaultArguments(add, {b: 5})(75) -> 80
