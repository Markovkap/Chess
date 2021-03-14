import React, { useEffect, useState } from "react";
import "./styles.css";
export function Chess(props) {
  const [figur, setFigur] = useState({});
  const [field, setField] = useState([
    ["bl", "bc", "bs", "bq", "bk", "bs", "bc", "bl"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wl", "wc", "ws", "wq", "wk", "ws", "wc", "wl"]
  ]);
  const images = {
    bc: "bc.webp",
    bk: "bk.webp",
    bl: "bl.webp",
    bq: "bq.webp",
    bs: "bs.webp",
    em: "em.webp",
    wc: "wc.webp",
    wk: "wk.webp",
    wl: "wl.webp",
    wp: "wp.webp",
    wq: "wq.webp",
    ws: "ws.webp",
    bp: "bp.webp"
  };
  function Field(props) {
    return (
      <div>
        <div>
          <image href={images[props.field[0][0]]}></image>
          <image href={images[props.field[0][1]]}></image>
          <image href={images[props.field[0][2]]}></image>
          <image href={images[props.field[0][3]]}></image>
          <image href={images[props.field[0][4]]}></image>
          <image href={images[props.field[0][5]]}></image>
          <image href={images[props.field[0][6]]}></image>
          <image href={images[props.field[0][7]]}></image>
        </div>
        <div>
          <image href={images[props.field[1][0]]}></image>
          <image href={images[props.field[1][1]]}></image>
          <image href={images[props.field[1][2]]}></image>
          <image href={images[props.field[1][3]]}></image>
          <image href={images[props.field[1][4]]}></image>
          <image href={images[props.field[1][5]]}></image>
          <image href={images[props.field[1][6]]}></image>
          <image href={images[props.field[1][7]]}></image>
        </div>
        <div>
          <image href={images[props.field[2][0]]}></image>
          <image href={images[props.field[2][1]]}></image>
          <image href={images[props.field[2][2]]}></image>
          <image href={images[props.field[2][3]]}></image>
          <image href={images[props.field[2][4]]}></image>
          <image href={images[props.field[2][5]]}></image>
          <image href={images[props.field[2][6]]}></image>
          <image href={images[props.field[2][7]]}></image>
        </div>
        <div>
          <image href={images[props.field[3][0]]}></image>
          <image href={images[props.field[3][1]]}></image>
          <image href={images[props.field[3][2]]}></image>
          <image href={images[props.field[3][3]]}></image>
          <image href={images[props.field[3][4]]}></image>
          <image href={images[props.field[3][5]]}></image>
          <image href={images[props.field[3][6]]}></image>
          <image href={images[props.field[3][7]]}></image>
        </div>
        <div>
          <image href={images[props.field[4][0]]}></image>
          <image href={images[props.field[4][1]]}></image>
          <image href={images[props.field[4][2]]}></image>
          <image href={images[props.field[4][3]]}></image>
          <image href={images[props.field[4][4]]}></image>
          <image href={images[props.field[4][5]]}></image>
          <image href={images[props.field[4][6]]}></image>
          <image href={images[props.field[4][7]]}></image>
        </div>
        <div>
          <image href={images[props.field[5][0]]}></image>
          <image href={images[props.field[5][1]]}></image>
          <image href={images[props.field[5][2]]}></image>
          <image href={images[props.field[5][3]]}></image>
          <image href={images[props.field[5][4]]}></image>
          <image href={images[props.field[5][5]]}></image>
          <image href={images[props.field[5][6]]}></image>
          <image href={images[props.field[5][7]]}></image>
        </div>
        <div>
          <image href={images[props.field[6][0]]}></image>
          <image href={images[props.field[6][1]]}></image>
          <image href={images[props.field[6][2]]}></image>
          <image href={images[props.field[6][3]]}></image>
          <image href={images[props.field[6][4]]}></image>
          <image href={images[props.field[6][5]]}></image>
          <image href={images[props.field[6][6]]}></image>
          <image href={images[props.field[6][7]]}></image>
        </div>
        <div>
          <image href={images[props.field[7][0]]}></image>
          <image href={images[props.field[7][1]]}></image>
          <image href={images[props.field[7][2]]}></image>
          <image href={images[props.field[7][3]]}></image>
          <image href={images[props.field[7][4]]}></image>
          <image href={images[props.field[7][5]]}></image>
          <image href={images[props.field[7][6]]}></image>
          <image href={images[props.field[7][7]]}></image>
        </div>
      </div>
    );
  }
}
