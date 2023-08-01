//arrow functions con arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
// const nuevoArray1 = tecnologias.map(function(tech){
//     if(tech === 'HTML'){
//         return 'GraphQL'
//     } else {
//         return tech
//     }

// })

const nuevoArray1 = tecnologias.map (tech => {
    if(tech === 'HTML'){
        return 'GraphQL'
    } else {
        return tech
    }

})

// const nuevoArray2 = tecnologias.filter(function(tech){
//     // return tech === 'React'
//     return tech !== 'React'
// })

const nuevoArray2 = tecnologias.filter (tech => tech !== 'React')
    // return tech === 'React' 

// console.log(nuevoArray1)
console.log(nuevoArray2)