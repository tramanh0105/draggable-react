import React, {Component} from "react";
import {Arrow} from "react-konva";
import ReactDOM from "react-dom";


class Drawable {
    constructor(startx, starty) {
        this.startx = startx;
        this.starty = starty;
    }
}

class ArrowDrawable extends Drawable {
    constructor(startx, starty) {
        super(startx, starty);
        this.x = startx;
        this.y = starty;
    }

    registerMovement(x, y) {
        this.x = x;
        this.y = y;
    }

    render() {
        const points = [this.startx, this.starty, this.x, this.y];
        return <Arrow points={points} fill="black" stroke="black"/>
    }
}
export default ArrowDrawable;


