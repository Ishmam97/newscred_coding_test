const movies = [
    {
        name:'movie1',
        category:'action',
        cast:'someone famous',
        release : '2020',
        budget:'30 mil',
    },
    {
        name:'movie2',
        category:'action',
        cast:'someone famous',
        release : '2020',
        budget:'30 mil',
    },
    {
        name:'movie3',
        category:'action',
        cast:'someone famous',
        release : '2020',
        budget:'30 mil',
    },
]
var users = []

//create user
const createUser = (userName , email)=>{
    let userId = users.push({
        userName,
        email,
        favourites: []
    })
    return userId-1
}
// Select name from Movies where name=movieName
const searchMovie=(movieName)=>{
    for(let i =0 ; i<movies.length;++i){
        if(movies[i].name === movieName){
            return movies[i]
        }
    }
    return "movie not found"
}
const addToFavourite=(userId,movieName)=>{
    for(let i =0 ; i<movies.length;++i){
        if(movies[i].name === movieName){
            // i is the movie index
            users[userId].favourites.push(i)
        }
    }
}
const removeFromFavourite=(userId , movieName)=>{
    for(let i =0 ; i<movies.length;++i){
        if(movies[i].name === movieName){
            
            // i is the movie index
            for(let j = 0 ; j<users[userId].favourites.length ; ++j){
                
                if(users[userId].favourites[j] == i){
                    users[userId].favourites.splice(j , 1)
                }
            }
            
        }
    }
    console.log('removed movie from favourites')
}
const listMyFaves = (userId)=>{
    for(let i = 0 ; i < users[userId].favourites.length ; ++i){
        console.log(movies[users[userId].favourites[i]])
    }
}
const searchFavesByName =(userId , movieName)=>{
    for(let i = 0 ; i < users[userId].favourites.length ; ++i){
        if(movies[users[userId].favourites[i]].name === movieName){
            console.log(movies[users[userId].favourites[i]])
            return
        }
    }
    console.log("movie not found in faves")
}
                          //0 categor , 1 cast , 2 genre
const searchFavesByAux =( userId , movieCat)=>{
    found = []
    for(let i = 0 ; i < users[userId].favourites.length ; ++i){
        if(movies[users[userId].favourites[i]].category === movieCat){
            found.push(movies[users[userId].favourites[i]].name)            
        }
    }
    return found
}
const searchFavesByCast =(userId , movieCast)=>{
    found = []
    for(let i = 0 ; i < users[userId].favourites.length ; ++i){
        if(movies[users[userId].favourites[i]].cast === movieCast){
            found.push(movies[users[userId].favourites[i]].name)            
        }
    }
    return found
}
function main(){
    //creating user (could have implemented user input if i had time)
    createUser('Ishmam' , 'ishmam@gmail.com')
    //adding movies to favourites by name first parameter is the user id.
    //create user returns userId which can be used as first parameter for searches
    // in this case 0 is the user id
    addToFavourite(0, 'movie3')
    addToFavourite(0, 'movie2')
    addToFavourite(0, 'movie1')
    console.log(users)
    //removing favourite from a user by name
    removeFromFavourite(0 , 'movie2')
    console.log(users)
    console.log('my faves are ' )
    //listing all details of favourites
    listMyFaves(0)
    //searches favourites by names
    searchFavesByName(0 , 'movie3')
    //searches favourites by categories and returns in ascending order
    console.log('found : ' ,searchFavesByCat(0 , 'action').sort())
}

// const notPresent = (arr)=>{
//     let x;
//     let aux = arr.sort()
//     for(let i = 0 ; i<aux.length ; ++i ){
//        if( aux[i]+1 === aux[i+1]){
//            console.log(aux[i] , aux[i+1])
//            continue
//        }else{
//          x = aux[i]+1
//        }
//     }
// // o(2n)
//     return x
// }
// []
// [1 , 2 ,5,1 , 2 ,5 , 1 , 2 ,5,1 , 2 ,5 , 1 , 2 ,5,1 , 2 ,5 ].length(50000)
// [1 , 2 ,"Sds" , 2] //specific ignore strings 
// [1 , 2, -3 , -5
// ]