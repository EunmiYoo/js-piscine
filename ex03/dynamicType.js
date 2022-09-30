const dynamicType = {
    parametre : undefined,
    put : function(value)
    { 
        if(typeof value == "number")
        {
            this.parametre = value;
        }

    },
	change : function change(value)
    {
		if(value == "String")
		{
		   this.parametre = String(this.parametre);
		}

		else if(value == "Number")
		{
		   this.parametre = Number(this.parametre);
		}
		else if(value == "Object")
		{
		   this.parametre = Object(this.parametre);

		}
		else if(value == "Array")
		{
		   this.parametre = Array.from(String(this.parametre), Number);
		}

   },
    printType : function printType()
	{
		console.log(this.parametre);
	},
}

dynamicType.put(42);
dynamicType.printType();
//결과값 42$
dynamicType.change("String");
dynamicType.printType();
console.log(typeof dynamicType.parametre);
//결과값 42$ string$
dynamicType.change("Number");
dynamicType.printType();
console.log(typeof dynamicType.parametre);
//resulte 42$ number$ 
dynamicType.change("Object");
dynamicType.printType();
console.log(typeof dynamicType.parametre);
//result [number: 42]$ object$ 
dynamicType.change("Array");
dynamicType.printType();
console.log(typeof dynamicType.parametre);
//result [4,2]$ object$ 
