import React from "react";
import { useParams } from "react-router";
const State = () => {
    let params = useParams()
    console.log(params.state)
    return(
        <div>{}</div>
    )
}
export default State;