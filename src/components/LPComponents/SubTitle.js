import React from 'react';

export default function SubTitle({name,title,side,id}) {
    return (
            <div className={"col-10 mx-4 text-title text-" + side} id={id}>
                <h1 className="font-weight-bold subtitleZindex display-4">
                    <strong className="text-uppercase forTitles">
                        {title}
                    </strong>
                    <br />
                    <span className="text-uppercase font-weight-bold">
                        {name}
                    </span>
                </h1>
            </div>
    )
}



