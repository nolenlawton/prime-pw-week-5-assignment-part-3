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
    for (let record of collection) {
        if (record.artist === artist) {
            arrayOfArtist.push(record)  
        }
    }
    console.log(arrayOfArtist)
    return arrayOfArtist
}

addToCollection ('Good Kid, m.A.Ad city', 'Kendrick Lamar', 2012)
addToCollection ('To Pimp a Butterfly.', 'Kendrick Lamar', 2015)
addToCollection ('Beautiful Thugger Girls', 'Young Thug', 2017)
addToCollection ('KOD', 'J. Cole', 2018)
addToCollection ('Blonde', 'Frank Ocean', 2016)
addToCollection ('Cozy Tapes Vol. 1', 'A$AP Mob', 2016)

showCollection(collection)

findByArtist('Kendrick Lamar')
findByArtist('Elton John')