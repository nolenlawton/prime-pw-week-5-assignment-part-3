let collection = [];

function addToCollection (title, artist, yearPublished, name, duration) {
    let record = {
        title,
        artist,
        yearPublished,
    }
    collection.push(record)
    return record
}

function showCollection (array) {
    console.log(array.length + ' Albums in Collection')
     for (let i in array) {
        console.log(array[i].title + ' by ' + array[i].artist + ', ' + array[i].yearPublished)
     }
}

function findByArtist (artist = '') {
    let arrayOfArtist = []
    console.log('Albums by ' + artist + ':')

    for (let record of collection) {
        if (record.artist === artist) {
            arrayOfArtist.push(record)  
        }
    }
    
    console.log(arrayOfArtist)
    return arrayOfArtist
}

// function search (propertyToSearchFor) {
//     let arrayOfSearch = []
//     console.log('Search for ' + propertyToSearchFor + ':')

//     for (let record of collection) {
//         if (record.title === propertyToSearchFor ||record.artist === propertyToSearchFor || record.yearPublished === propertyToSearchFor) {
//             arrayOfSearch.push(record)  
//         }
//         else if(propertyToSearchFor === undefined || propertyToSearchFor === '') {
//             console.log(collection)
//             return collection
//         }
//     }

//     console.log(arrayOfSearch)
//     return arrayOfSearch
// }

let radioSong1 = {
    artist: 'Kendrick Lamar'
}

let radioSong2 = {
    title: 'Beautiful Thugger Girls',
    artist: 'Young Thug',
    yearPublished: 2017
}

let radioSong3 = {
    artist: 'J. Cole',
    yearPublished: 2014
}



function search  (objectSearch) {
    let properties = Object.keys(objectSearch) // object to array of properties
        // console.log(properties) // --- properties that are being searched for
    
    let propertiesFound = 0

    let i = 0

    let arrayOfSearch = []

        for (let property of properties) {
            // console.log(property + ' is ' + objectSearch[property]) // --- loops through properties of objectSearch

                if (propertiesFound === 0) { 
            
                    for (let object in collection) { 
                        // console.log(property + ' is ' + collection[object][property]) // --- loops through properties of collection

                    if (objectSearch[property] === collection[object][property]) {
                            propertiesFound++ 
                            break // if first objectSearch property is found in collection loop stops
                        }
                        else {
                            i++ // if property is not found, go to the next index of collection
                        }
                    }

                }

                else if (objectSearch[property] === collection[i][property]) { // using i to deal with specific index previously found
                    propertiesFound++
                }
        }

    // console.log(propertiesFound) // --- how many properties were found
    // console.log(i) // index of collection being dealt with

    if (propertiesFound === properties.length) {
        console.log('Match Found!')
        arrayOfSearch.push(collection[i])
        console.log(arrayOfSearch)
    }
    else {
        console.log('No Match Found.')
    }
}

addToCollection ('good kid, m.A.A.d city', 'Kendrick Lamar', 2012, 'Song 1', 120 , 'Song 2', 240)
addToCollection ('To Pimp a Butterfly.', 'Kendrick Lamar', 2015)
addToCollection ('Beautiful Thugger Girls', 'Young Thug', 2017)
addToCollection ('KOD', 'J. Cole', 2018)
addToCollection ('Blonde', 'Frank Ocean', 2016)
addToCollection ('Cozy Tapes Vol. 1', 'A$AP Mob', 2016)

showCollection(collection)

findByArtist('Kendrick Lamar') // in collection
findByArtist('Elton John') // not in collection

search(radioSong1)
search(radioSong2)
search(radioSong3)
