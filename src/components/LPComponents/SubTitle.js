import React from 'react';

export default function SubTitle({name,title,side}) {
    return (
            <div className={"col-10 mx-4 text-title text-" + side}>
                <h1 className="font-weight-bold subtitleZindex display-5">
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



