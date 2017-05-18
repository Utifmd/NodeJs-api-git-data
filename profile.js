let https = require('https')
/*let CallThis = (setring) => {
    console.log('fungsi ini anon' + ' ' + setring)
}
CallThis('muantab')
*/

let get = (username) => {
    //const username = 'utifmd'
    const options = {
        hostname:'api.github.com',
        port:'443', //http: 8080 http:443
        path:`/users/${username}`,
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
            //console.log(body) ~> hasil isi json
            let profile = JSON.parse(body)
            if(response.statusCode === 200){ //jika hasil response seperti seharusnya maka data dapat dicomot

                //console.log(profile.login +' memiliki '+ profile.public_repos +' repo(s), jumlah pengikut '+profile.followers +' follower(s)')
                //console.log(profile) ~> hasil isi json setelah di parse
                //console.log(typeof profile) ~> check type data profile
                //console.log(profile.created_at) ~> mengambil satu data dari object json

                console.log(`${profile.login} owns ${profile.public_repos} repo(s), and has ${profile.followers} follower(s)`)
            } else {
                console.log(`Profil dengan uname '${username}' tidak terdefenisi.`)
            }
        })

    })

    request.end() //di http/s ada method end() dan on()
    request.on('error', (err) =>{
        console.log(err)
    })

}

module.exports = { //export all to app.js
    get
    /*get ,
    search,
    add, 
    etc*/
}