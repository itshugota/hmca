import React from 'react'
import ReactDOM from 'react-dom'
import {MenuItem} from 'MenuItem'
import {AccountInfo} from 'AccountInfo'
import {scaleRotate as Menu} from 'react-burger-menu'

export class SidebarMenu extends React.Component {
    render() {
        const itemList = [
            {
                id: 'sb-wall',
                className: 'selected',
                content: 'Tường',
                icon: 'dashboard',
                hasSubmenu: false,
                subMenus: '',
                onClick: ''
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
                        onClick: ''
                    },
                    {
                        id: 'sb-question-search',
                        className: '',
                        content: 'Tìm kiếm câu hỏi',
                        icon: 'search',
                        onClick: ''
                    }
                ],
                onClick: ''
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
                        onClick: ''
                    },
                    {
                        id: 'sb-test-search',
                        className: '',
                        content: 'Tìm kiếm đề',
                        icon: 'search',
                        onClick: ''
                    }
                ],
                onClick: ''
            }
        ];
        const listItems = itemList.map((item) =>
            <MenuItem id={item.id} className={item.className} content={item.content} icon={item.icon} hasSubmenu={item.hasSubmenu} subMenus={item.subMenus}/>
        );

        return (
            <Menu id="scaleRotate" className="my-menu" pageWrapId="page-wrap" outerContainerId="outer-container">
                <AccountInfo name='Tạ Quốc Huy' avatar=''/>
                <ul class="vertical menu drilldown" data-drilldown>
                    {listItems}
                </ul>
            </Menu>
        );
    }
}
