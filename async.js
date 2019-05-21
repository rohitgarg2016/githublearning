function my()
{
new Promise(function(resolve,reject){

	setTimeout(()=>
		resolve("56"),5000)


});
}

async function f()
{
console.log("adja");
	const abc=await my()	;
	console.log(abc);
	return 5;

}

f().then(function(a){
console.log(a);

});
