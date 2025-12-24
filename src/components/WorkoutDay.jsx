import SeriesItem from "./SeriesItem"

export default function WorkoutDay({obj}) {
    return(
        <div className="div_workoutday">
        {obj.map((record) =>
            <SeriesItem key={record.id} obj={record}/>
        )}
        </div>
    )
}