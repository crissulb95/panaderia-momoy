import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="font-weight-bold">
                    <strong className="text-uppercase">
                        {title}
                    </strong><br />
                    <span className="text-lowercase">
                        {name}
                    </span>
                </h1>
            </div>
        </div>
    )
}
