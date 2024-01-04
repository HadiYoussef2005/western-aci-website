import React from 'react'
import Progress from './Progress'

const Executives = () => {
    return(<>
        <Progress />
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
        
        <div className="scroll-tester">
            <div className="text-at-bottom">Test</div>
        </div>
    </>)
}

export default Executives