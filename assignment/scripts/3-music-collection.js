let collection = [];

function addToCollection (title, artist, yearPublished) {
    let record = {
        title,
        artist,
        yearPublished
    }
    collection.push(record)
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

function search (propertyToSearchFor) {
    let arrayOfSearch = []
    console.log('Search for ' + propertyToSearchFor + ':')

    for (let record of collection) {
        if (record.title === propertyToSearchFor ||record.artist === propertyToSearchFor || record.yearPublished === propertyToSearchFor) {
            arrayOfSearch.push(record)  
        }
        else if(propertyToSearchFor === undefined || propertyToSearchFor === '') {
            console.log(collection)
            return collection
        }
    }

    console.log(arrayOfSearch)
    return arrayOfSearch
}

addToCollection ('Good Kid, m.A.Ad city', 'Kendrick Lamar', 2012)
addToCollection ('To Pimp a Butterfly.', 'Kendrick Lamar', 2015)
addToCollection ('Beautiful Thugger Girls', 'Young Thug', 2017)
addToCollection ('KOD', 'J. Cole', 2018)
addToCollection ('Blonde', 'Frank Ocean', 2016)
addToCollection ('Cozy Tapes Vol. 1', 'A$AP Mob', 2016)

showCollection(collection)

findByArtist('Kendrick Lamar') // in collection
findByArtist('Elton John') // not in collection

search('KOD') // title in collection
search('Young Thug') // artist in collection
search(2016) // year in collection
search('Elton John') // not in collection
search('')