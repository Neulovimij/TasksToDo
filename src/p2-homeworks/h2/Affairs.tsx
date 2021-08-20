import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id:number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    const onAll = s.button + " " + (props.filter === "all" ? s.active : "")
    const onHigh = s.button + " " + (props.filter === "high" ? s.active : "")
    const onMiddle = s.button + " " + (props.filter === "middle" ? s.active : "")
    const onLow = s.button + " " + (props.filter === "low" ? s.active : "")
    const setClass = (filter: FilterType) =>{
        return s.button + (props.filter === filter ? " " + s.active : "")
    }


    return (
        <div>

            {mappedAffairs}

            <button onClick={set} className={setClass("all")} value={"all"}>All</button>
            <button onClick={set} className={setClass("high")} value={"high"}>High</button>
            <button onClick={set} className={setClass("middle")} value={"middle"}>Middle</button>
            <button onClick={set} className={setClass("low")} value={"low"}>Low</button>

        </div>
    )
}

export default Affairs
