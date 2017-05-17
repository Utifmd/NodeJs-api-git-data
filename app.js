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

let request = https.request(options, (response) => {
    //console.log('Mendapatkan respon ' + response.statusCode)
    let body = '' // declare string 
    response.on('data', (data)  => {
        //console.log(data)
        body = body + data // parsing byte ke string
    })
    response.on('end', () => {
        //console.log(body) //hasil isi json
        
        let profile = JSON.parse(body)
        //console.log(profile) //hasil isi json setelah di parse
        //console.log(typeof profile) //check type data 'profile'
        
        //console.log(profile.created_at) // mengambil satu data dari object json
        

    })

})

request.end() //di http/s ada method end() dan on()
request.on('error', (err) =>{
    console.log(err)
})
