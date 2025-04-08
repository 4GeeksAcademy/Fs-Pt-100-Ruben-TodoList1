import React, { useEffect, useState } from "react";


export const List = () => {

    const [works, setWorks] = useState('')
    const [workList, setWorkList] = useState([])
    

    useEffect(() => {
        if (workList.length == 0) setWorkList(['No tasks, add tasks!!!'] )
    }, [workList])

    const handleWorkChange = (e) => {
        setWorks(e.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (workList.includes("No tasks, add tasks!!!")) {
            setWorkList([works])
        } else {
            setWorkList([...workList, works])
        }
        setWorks('')
    }

    const handleKeyDown = (e) => {
        if (e.code == 'enter') {
            if (workList.includes("No tasks, add tasks!!!")) {
                setWorkList([works])
            } else {
                setWorkList([...workList, works])
            }
        }
    }

    const handleClick = (index) => {
        let delet = workList.filter((el, i) => i != index)
        setWorkList(delet)
    }


    return (
        <>
            <div className="tareas">
                <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                    <input type="text" placeholder="What needs to do?" value={works} onChange={handleWorkChange}/>
                </form>

                <ul>
                    {workList.map((el, i) => <li key={i}>{el}<span onClick={() => handleClick(i)} className="text-danger p-1">X</span></li>)}
                </ul>
            </div>
        </>
    )
}