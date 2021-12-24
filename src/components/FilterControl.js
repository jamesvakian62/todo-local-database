import React from 'react'


function FilterControl({filterStatus, setFilterStatus}) {
    const handleStatus = (status) => {
        setFilterStatus(status)
    }

    return (
        <div className='item-statuses'>
            
            <div className="items-statuses">
                <span className={filterStatus === 'all' ? "active" : ""}  onClick={()=>handleStatus("all")}>All</span>
                <span className={filterStatus === 'active' ? "active" : ""}  onClick={()=>handleStatus("active")}>Active</span>               
                <span className={filterStatus === 'completed' ? "active" : ""}  onClick={()=>handleStatus("completed")}>Done</span>
            </div>
        </div>
        
    )
}

export default FilterControl
