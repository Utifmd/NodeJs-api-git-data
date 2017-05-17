//Problem: kita butuh aplikasi pencari data github profile
//Solution: gunakan NodeJs to connect ke api.gihub.com for get data

// TODO: Connect ke api.github.com
// TODO: Read the data
// TODO: Parse the data
// TODO: Print the data out

/*let CallThis = (setring) => {
    console.log('fungsi ini anon' + ' ' + setring)
}
CallThis('muantab')
*/
let https = require('https')

const options = {
    hostname:'api.github.com',
    port:'443', //http: 8080 http:443
    path:'/users/Utifmd',
    method:'GET',
    headers:{
        'user-agent': 'nodejs'
    }
}

let request = https.request(options, (Response) => {
    console.log('Mendapatkan respon ' + Response.statusCode)
})

request.end() //di http ada method end() dan on()
request.on('error', (err) =>{
    console.log(err)
})
