//import profile from './profile.js'
let profile = require('./profile.js')

let profiles = process.argv.slice(2)
//console.log(profiles)
profiles.map(user => profile.get(user)) // run dengan node app.js utifmd rizafahmi delaroy mark

//console.log(process.argv)

/*let profiles = ['utifmd', 'rizafahmi', 'yofri']

profiles.map(user => {
    return profile.get(user)
})*/

// map data 
/*let array = [1,2,3]
let result = array.map(item => {
    return item * 2
})
console.log(result)*/
/*console.log(profile)

profile.get('utifmd')
profile.get('rizafahmi')
profile.get('yofri')*/