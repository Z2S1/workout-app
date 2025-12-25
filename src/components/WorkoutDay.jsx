import SeriesItem from "./SeriesItem"
import {getTodayData, getAll} from "../hooks/WorkOutController"
import { useEffect,useState } from "react"

export default function WorkoutDay() {
    const [records, setRecords] = useState([])

    useEffect(() =>{
        getAll().then(data =>
            setRecords(data)
        )
    },[])

    return(
        <div className="div_workoutday">
        {records.map((record) =>
            <SeriesItem key={record.id} obj={record}/>
        )}
        </div>
    )
}