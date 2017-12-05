import React from 'react'
import ReactDOM from 'react-dom'
import {MenuItem} from 'MenuItem'
import {AccountInfo} from 'AccountInfo'
import {scaleRotate as Menu} from 'react-burger-menu'

var savedScrollTop = 0, tmpScrollTop = 0;
$(document).ready(() => {
    $(document).scroll(function() {
      savedScrollTop = $(document).scrollTop();
    });
});

export class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [
                {
                    id: 'sb-wall',
                    className: 'selected',
                    content: 'Tường',
                    icon: 'dashboard',
                    hasSubmenu: false,
                    subMenus: '',
                },
                {
                    id: 'sb-question-area',
                    className: '',
                    content: 'Câu hỏi',
                    icon: 'server',
                    hasSubmenu: true,
                    subMenus: [
                        {
                            id: 'sb-question-add',
                            className: '',
                            content: 'Thêm câu hỏi',
                            icon: 'plus',
                        },
                        {
                            id: 'sb-question-search',
                            className: '',
                            content: 'Tìm kiếm câu hỏi nhanh',
                            icon: 'search',
                        },
                        {
                            id: 'sb-question-ad-search',
                            className: '',
                            content: 'Tìm kiếm câu hỏi thông minh',
                            icon: 'search',
                        }
                    ],
                },
                {
                    id: 'sb-test-area',
                    className: '',
                    content: 'Đề thi',
                    icon: 'file-text',
                    hasSubmenu: true,
                    subMenus: [
                        {
                            id: 'sb-test-add',
                            className: '',
                            content: 'Thêm đề',
                            icon: 'plus',
                        },
                        {
                            id: 'sb-test-search',
                            className: '',
                            content: 'Tìm kiếm đề',
                            icon: 'search',
                        }
                    ],
                }
            ]
        }

        this.refreshSelectedClass = this.refreshSelectedClass.bind(this);
    }

    refreshSelectedClass(id) {
        let itemListCopy = this.state.itemList.map(function(item) {
            item.className = '';
            if (item.hasSubmenu) {
                for (var i = 0; i < item.subMenus.length; i++) {
                    item.subMenus[i].className = '';
                }
            }
            return item;
        });
        for (var i = 0; i < itemListCopy.length; i++) {
            if (itemListCopy[i].id == id) {
                itemListCopy[i].className = 'selected';
            } else {
                if (itemListCopy[i].hasSubmenu) {
                    for (var j = 0; j < itemListCopy[i].subMenus.length; j++) {
                        if (itemListCopy[i].subMenus[j].id == id) {
                            itemListCopy[i].subMenus[j].className = 'selected';
                        }
                    }
                }
            }
        }
        this.setState({itemList: itemListCopy});
    }

    handleClick(id) {
        this.refreshSelectedClass(id);
        this.props.onClick(id);
    }

    render() {
        const listItems = this.state.itemList.map((item) =>
            <MenuItem id={item.id} className={item.className} content={item.content} icon={item.icon} hasSubmenu={item.hasSubmenu} subMenus={item.subMenus} onClick={this.handleClick.bind(this)}/>
        );

        var isMenuOpen = function(state) {
          if (state.isOpen) {
            $("#page-wrap").scrollTop(savedScrollTop);
            tmpScrollTop = savedScrollTop;
          } else {
            setTimeout(function() {$(document).scrollTop(tmpScrollTop); console.log(tmpScrollTop);}, 550);
            $("#page-wrap").scrollTop(tmpScrollTop);
          }
        };

        return (
            <Menu bodyClassName={"limited-height"} id="scaleRotate" className="my-menu" pageWrapId="page-wrap" outerContainerId="outer-container" onStateChange={isMenuOpen}>
                <AccountInfo name='Tạ Quốc Huy' avatar=''/>
                <ul class="vertical menu drilldown" data-drilldown>
                    {listItems}
                </ul>
            </Menu>
        );
    }
}
