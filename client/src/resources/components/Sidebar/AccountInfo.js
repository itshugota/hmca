import React from 'react'
import ReactDOM from 'react-dom'
import Foundation from 'react-foundation'
import AccountInfoCSS from 'AccountInfo.scss'

export class AccountInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Unknown',
            avatar: 'defaultAvatar.jpg',
            defaultAvatar: 'defaultAvatar.jpg'
        };
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            avatar: this.props.avatar
        });
    }

    render() {
        let avatar = (this.state.avatar) ? this.state.avatar : this.state.defaultAvatar;

        return (
            <div className="account-info">
                <h5>{this.state.name}</h5>
                <img src={"images/avatar/" + avatar} />
                <table>
                    <tr>
                        <td><button class="button"><i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;Tài khoản</button></td>
                        <td><button class="button"><i className="fa fa-cog" aria-hidden="true"></i>&nbsp;Thiết lập</button></td>
                    </tr>
                </table>
            </div>
        );
    }
}
