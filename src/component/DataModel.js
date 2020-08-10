import React, {Component} from 'react';
import Draggable from "react-draggable";
import Attribute from "./Attribute";


class DataModel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableName: "Person",
            attributeList: [
                {
                    attributeName: "firstName",
                    dataType: "String"
                },
                {
                    attributeName: "lastName",
                    dataType: "String"
                },
                {
                    attributeName: "birthday",
                    dataType: "Date"
                }, {
                    attributeName: "tel",
                    dataType: "String"
                }
            ],
            attributeName: "name",
            dataType: "String"
        }
    }

    render() {
        const attributeList = this.state.attributeList.map((a) =>
            <Attribute key={a.attributeName} attributeNameFromParent={a.attributeName} dataTypeFromParent={a.dataType}/>
        );
        return (
            <Draggable
              >
                <div className="drag-box">
                    <div><strong>{this.state.tableName}</strong></div>
                    <br/>
                    <div>
                        {attributeList}
                    </div>

                </div>
            </Draggable>
        );

    }
}

export default DataModel;