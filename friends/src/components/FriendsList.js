import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {

        this.getData();

    }

    getData = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends/')
            .then(res => {

                const friends = res.data;
                this.setState({ friends });

            })
            .catch(err => console.log(err.response));
    };

    render() {

        return (
            <div>


                {this.state.friends.map(friend =>
                    <p key={friend.name}>{friend.name}</p>)}

            </div>
        );
    }
}

export default FriendsList;
