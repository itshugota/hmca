import React from 'react'
import ReactDOM from 'react-dom'
import MenuItemCSS from 'MenuItem.scss'

export class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.onClick(id);
    }

    render() {
        let item =
                <a id={this.props.id} onClick={() => this.handleClick(this.props.id)} className={"menu-item " + this.props.className} href="javascript:void(0)">
                    <table>
                        <tr>
                            <td><i className={"fa fa-" + this.props.icon} aria-hidden="true"></i></td>
                            <td><span>{this.props.content}</span></td>
                        </tr>
                    </table>
                </a>;
        if (this.props.hasSubmenu) {

            const listSubmenus = this.props.subMenus.map((submenu) =>
                <li key={submenu.id}>
                    <a id={submenu.id} onClick={() => this.handleClick(submenu.id)} className={"menu-item " + submenu.className} href="javascript:void(0)">
                        <table>
                            <tr>
                                <td><i className={"fa fa-" + submenu.icon} aria-hidden="true"></i></td>
                                <td><span>{submenu.content}</span></td>
                            </tr>
                        </table>
                    </a>
                </li>
            );

            return (
                <li key={this.props.id}>{item}
                    <ul className="menu vertical nested">
                        {listSubmenus}
                    </ul>
                </li>
            );
        }
        return (
            <li key={this.props.id}>{item}</li>
        );
    }
}
