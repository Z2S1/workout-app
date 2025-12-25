const DBName = "workoutDB"
const version = 1
const indexedDB = 
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB

const request = indexedDB.open(DBName,version);
let db = null
let dbResolve

const dbReady = new Promise((resolve) => {
    dbResolve = resolve
})

request.onerror = function(event) {
    console.error("An error occurred with IndexedDB")
    console.error(event)
}

request.onupgradeneeded = function () {
    db = request.result
    const store = db.createObjectStore("workoutSeries", {keyPath: "id"})
    store.createIndex("date", "date",{unique:false})
    store.createIndex("exercise_and_date", ["exercise","date"],{unique:false})
}

//executed only the first time or when changing the version
request.onsuccess = function () {
    db = request.result
    dbResolve(db)
}

export async function addNewSeries(series) {
    const database = await dbReady
    const transaction = database.transaction("workoutSeries","readwrite")
    const store = transaction.objectStore("workoutSeries")
    store.add(series)
}

//export function editSeries() {
//    const transaction = db.transaction("workoutSeries","readwrite")
//    const store = transaction.objectStore("workoutSeries")
//}

export async function deleteSeries(seriesID) {
    const database = await dbReady
    const transaction = database.transaction("workoutSeries","readwrite")
    const store = transaction.objectStore("workoutSeries")
    store.delete(seriesID)
}

// Queries

export async function getAllByDate(date){
    const database = await dbReady
    const transaction = database.transaction("workoutSeries","readonly")
    const store = transaction.objectStore("workoutSeries")
    const index = store.index("date")
    
    return (new Promise((resolve,reject) =>{
        const request = index.getAll(date)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    }))
}

export async function getAllData(){
    const database = await dbReady
    const transaction = database.transaction("workoutSeries","readonly")
    const store = transaction.objectStore("workoutSeries")

    return (new Promise((resolve,reject) =>{
        const request = store.getAll()
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    }))
}