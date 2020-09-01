import React, { Component } from 'react'
import {connect} from "react-redux"

class Main extends Component {

    state={}
    render() {
        return (
            <div>
                {this.props.todo.map(elem=>
                <li onClick={
                    ()=>{
                        this.props.remove(elem.id)
                    }
                }
                key={elem.id}>
                    {elem.inputValue}
                </li>)}
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        todo:state.main
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        remove:(id)=>{
            dispatch({
                type:'REMOVE_INPUT', id:id
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Main)