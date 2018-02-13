// let getJSON = (url:string) => {
//   let promise:any = new Promise((resolve, reject)=>{
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET',url);

//     xhr.onreadystatechange = () => {
//       if ( xhr.readyState === 4)
//         if ( xhr.status === 200 )
//           resolve(xhr.responseText)
//         else
//           reject(xhr.status)
//     }

//     xhr.send(null);
//   })
//   return promise;
// }

// let url = "https://anyshare.eisoo.com:9999/v1/auth1?method=getconfig&account=1231&password=q12dajuemhiij";


// getJSON(url).then(function(json:any){
//   console.log(json);
// },(err:any) => {
//   console.log(err);
// })



let url = "https://anyshare.eisoo.com:9999/v1/auth1?method=getconfig&account=1231&password=q12dajuemhiij";

async function ajaxWithAsync(operations:any) {
	function getJSON (operations:any) {
    let promise:any = new Promise((resolve, reject)=>{
      var xhr = new XMLHttpRequest();
      xhr.open('GET',url);
  
      xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4)
          if ( xhr.status === 200 )
            resolve(xhr.responseText)
          else
            reject(xhr.status)
      }
  
      xhr.send(null);
    })
    return promise;
    }
	
	let oP = await getJSON(operations);

	return oP.then((d:any) => {
    	/* data some handler */
		return d;
	})
	.catch((e:any) => {
		console.error(e);
		throw new Error(e);
    })
}


ajaxWithAsync(url);