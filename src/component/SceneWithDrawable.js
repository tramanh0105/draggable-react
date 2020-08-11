import {Layer, Stage} from "react-konva";
import React, {Component} from "react";
import ArrowDrawable from "./Drawable";

class SceneWithDrawables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawables: [],
            newDrawable: [],
            newDrawableType: "FreePathDrawable"
        };
    }

    getNewDrawableBasedOnType = (x, y, type) => {
        const drawableClasses = {
            ArrowDrawable
        };
        return new drawableClasses[type](x, y);
    };

    handleMouseDown = e => {
        const { newDrawable } = this.state;
        if (newDrawable.length === 0) {
            const { x, y } = e.target.getStage().getPointerPosition();
            const newDrawable = this.getNewDrawableBasedOnType(
                x,
                y,
                this.state.newDrawableType
            );
            this.setState({
                newDrawable: [newDrawable]
            });
        }
    };

    handleMouseUp = e => {
        const { newDrawable, drawables } = this.state;
        if (newDrawable.length === 1) {
            const { x, y } = e.target.getStage().getPointerPosition();
            const drawableToAdd = newDrawable[0];
            drawableToAdd.registerMovement(x, y);
            drawables.push(drawableToAdd);
            this.setState({
                newDrawable: [],
                drawables
            });
        }
    };

    handleMouseMove = e => {
        const { newDrawable } = this.state;
        if (newDrawable.length === 1) {
            const { x, y } = e.target.getStage().getPointerPosition();
            const updatedNewDrawable = newDrawable[0];
            updatedNewDrawable.registerMovement(x, y);
            this.setState({
                newDrawable: [updatedNewDrawable]
            });
        }
    };

    render() {
        const drawables = [...this.state.drawables, ...this.state.newDrawable];
        return (
            <div>
                <button
                    onClick={e => {
                        this.setState({ newDrawableType: "ArrowDrawable" });
                    }}
                >
                    Draw Arrows
                </button>
                <Stage
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleMouseMove}
                    width={900}
                    height={700}
                >
                    <Layer>
                        {drawables.map(drawable => {
                            return drawable.render();
                        })}
                    </Layer>
                </Stage>
            </div>
        );
    }
}
export default SceneWithDrawables;