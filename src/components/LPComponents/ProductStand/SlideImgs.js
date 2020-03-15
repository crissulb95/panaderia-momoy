import React from 'react'

export default function SlideImgs({fuente}) {
    const imgStyles={
        width: 100 + '%',
        height: "auto"
    };
    return (
        <img src={fuente} alt="imagenes de carrusel" style={imgStyles} />
    )
}
