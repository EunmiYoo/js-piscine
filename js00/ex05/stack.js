const stackCreate = () => ({
  arr: []
	
});

function stackEmpty(stack)
{
	if (!stack.arr);
		return	true;
	return false;
}

function stackPush(stack, data)
{
	stack.arr[stack.arr.length] = data;
}

function stackPeek(stack)
{
	return (stack.arr[stack.arr.length - 1]);
}

function stackPop(stack)
{
	if(stack == "")
	{
		console.log("Error");
		return 0;
	}
	stack.arr.length -= 1;
}

let a = stackCreate();
console.log(stackEmpty(a));
stackPush(a, "1");
stackPush(a, "2");
console.log(a);
stackPush(a, "222");
console.log(a);
stackPop(a);
console.log(a);
console.log(stackEmpty(a));
console.log(a.arr);
console.log(stackPeek(a));
console.log(a.arr.length);
stackPop(a);
stackPop(a);

console.log(a.arr.length);
console.log(a);


