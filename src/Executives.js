import React from 'react'
import Card from './Card'

const Executives = () => {
    return(<>
        <div className="executives">
            <div className="heading-container">
                    <strong>
                        <span className="catchphrase">
                                <span className="executive-header"
                                    style={{ animationDelay: `${1 * 0.2}s` }} 
                                >
                                    Meet
                                </span>
                                <span> </span>
                                <span className="executive-header"
                                    style={{ animationDelay: `${2 * 0.2}s` }} 
                                >
                                    The
                                </span>
                                <span> </span>
                                <span className="executive-header"
                                    style={{ animationDelay: `${3 * 0.2}s` }} 
                                >
                                    Executives
                                </span>
                        </span>
                    </strong>
                </div>
                <Card />
        </div>
    </>)
}

export default Executives