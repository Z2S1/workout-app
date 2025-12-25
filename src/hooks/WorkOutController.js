import {getAllByDate, getAllData} from "../DB"

export const getTodayData = async (date = new Date()) =>{
    const records = await getAllByDate(date)
    console.log(records)
    return records
}

export const getAll = async () =>{
    const records = await getAllData()
    console.log(records)
    return records
}