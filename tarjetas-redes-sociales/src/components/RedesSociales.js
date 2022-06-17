import React from "react";
import { Tarjeta } from "./Tarjeta/Tarjeta"

export function RedesSociales() {
    return (
      <div style={{display: 'flex',
      justifyContent: "space-between", 
      maxWidth: 720, 
      margin: '0 auto'}}>
      <Tarjeta
        titulo="TWITTER"
        descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textButton="READ MORE"
        color="color1"
      />
      <Tarjeta
        titulo="INSTAGRAM"
        descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textButton="READ MORE"
        color="color2"
      />
      <Tarjeta
        titulo="YOUTUBE"
        descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textButton="READ MORE"
        color="color1"
      />
      </div>
    );
  }