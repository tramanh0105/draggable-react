import React,{Component} from "react";


class Attribute extends Component{


    render() {
        return(
            <div>{this.props.attributeNameFromParent}: {this.props.dataTypeFromParent}</div>
        );

    }
}

export default Attribute;