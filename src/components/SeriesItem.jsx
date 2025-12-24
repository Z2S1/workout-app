import DumbbellIcon from "../assets/icons/gym-svgrepo-com.svg"
import "./SeriesItem.css"

export default function SeriesItem({obj}){
    const isCardio = obj.category === "cardio"
    return(
        <div className="divSeriesItem">
            <div className="divCategory">
                <div className="div_icon">
                    <img src={DumbbellIcon} className="serie-icon"/>
                </div>
                <div className="subdiv_category">
                    <p>{obj.category}</p>
                </div>
            </div>
            <div className="divDetails">
                <p>{obj.exercise}</p>
                {isCardio ? <p>-</p> : <p>{obj.repetitions}</p>}
                {isCardio ? <p>{obj.time}</p> : <p>{obj.weight}</p>}
            </div>
        </div>
    )
}