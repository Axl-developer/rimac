import React, { useState } from 'react'
import { TabsList } from './TabsList'

export const Tabs = () => {

    const [state, setstate] = useState(1)

    
    return (
        <div className="Tabs_content">
            
            <div className="Tabs_heads">
                <div 
                    className={(state===1) ?'active' : ''}
                    onClick={() => setstate(1)}
                >
                    Protege a tu auto
                </div>

                <div
                    className={(state===2)?'active' : ''}
                    onClick={() => setstate(2)}
                >
                    Protege a los que te rodean
                </div>

                <div
                    className={(state===3)?'active' : ''}
                    onClick={() => setstate(3)}
                >
                    mejora tu plan
                </div>
            </div>
            <ElementTab state={state} />

        </div>
    )
}

const ElementTab = ({state}) => {
    const items = [
        {url:'llanta.svg',title:'Llanta robada',text:'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',selected:true},
        {url:'red.svg',title:'Choque y/o pasarte la luz roja',text:'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',selected:false},
        {url:'via.svg',title:'Atropello en la vía Evitamiento',text:'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',selected:false},
    ]
    const [data, setData] = useState(items)
    switch (state) {
        case 1:
            return <TabsList items={data}/>;
        
        case 2:
            return <TabsList items={data}/>;

        case 3:
            return <TabsList items={data}/>;
        
        default:
            return <TabsList items={data}/>;
    }
}