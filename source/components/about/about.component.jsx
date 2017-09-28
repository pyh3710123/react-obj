import React, {Component} from 'react';
const List = (props)=> {
    const users = props.users;
    const listItems = users.map((user, index)=><li key={index}><h1>hi {user}</h1></li>);
    return (
        <ul>{listItems}</ul>
    );
};




class About extends Component {
    
    render() {
        const users = ["Gates", "Jack", "Bush", "Obama", "Mike"];
        const listItems = users.map((user, index)=><li key={index}><h1>hi {user}</h1></li>);
        const data = {users: ["Gates", "Jack", "Bush", "Obama", "Mike"]};
        const listItem = data.users.map((user, index)=><li key={index}><h2>hi {user}</h2></li>);
        console.log('+++++++++++',);
        console.log('+++++++++++', data.users);
        return (
            <div className="container">
                <ul>{listItems}</ul>
                <hr/>
                <ul>{listItem}</ul>
                <hr/>
                <ul>
                    <List users={users}/>
                    <List users={data.users}/>
                </ul>
            </div>
        );
    }
}


export  default About;
