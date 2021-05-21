import React from 'react'

export const TabsList = ({items}) => {
    
    return (
        
        <div>
            {
                items.map( i => <TabListItem selected={i.selected} img={i.url} title={i.title} text ={i.text}/>)
                
            }
        </div>
        
    )
}

export const TabListItem = ({img,title,text,selected}) => {
    
    return (
        <div className="TabListItem">
            <div className="TabListItem_img">
                <img src={"/assets/svgs/"+img} alt={title}/>
            </div>
            <div >
                <div className="TabListItem_title">
                    <h3>{title}</h3>
                    <img src={(!!selected)?"/assets/svgs/seleted.svg":"/assets/svgs/unseleted.svg"} alt={title}/>
                </div>
                <div>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}