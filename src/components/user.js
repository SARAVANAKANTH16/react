import React from"react";

class User extends React.Component {
constructor(props){
    super(props);
    this.state={
        planet:"earth"

    };
    console.log("Hey I am from constructor");
}
componentDidMount(){
    this.setState({planet: "Jupiter"});//it tell that is entire state and value wnt to update to
    console.log("Hey ia m from ComponentDIdmount")
}

shouldComponentUpdate(nextProp,nextState){
    console.log("I am from shouldComponentUpdate");
    //chat
    if(nextState.planet !== this.state.planet){
    console.log({
        nextProp,
        nextState
    });
    return true;
}
return false;
}

getSnapshotBeforeUpdate(prevProp,prevState){
    console.log("Iam from  getSnapshotBeforeUpdate");
    console.log({
        prevProp,
        prevState
    });
     return true;
}

componentDidUpdate(){
    console.log(this.state);
}
render(){
    console.log("I am from rendered");
    return(
        <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.description}</p>
            <h4>{this.props.planet}</h4>
        </div>
    );
}

}

export default User;

//Life cycle methids
/*
MOUNT ->the component is initially rendered in  dOM
1a. constructor->
RENDER->LOGICAL PART
component DidMount->sideeffects
Update->component is being updated
2.a.Constructor
2.b.shouldComponentUpdate(nextProp,nextState)>true or falsse
2.c.getSnapshotBeforeUpdate(PrevProp,prevState) it will check after update and before update aree same or not
2.d.componentDidUpdate()
UNMOUNT->component is removed from the dom
*/