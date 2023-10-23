import React from 'react';
import { Category, ListItems } from '../types';

interface SidebarProps {
    status: Category | 'categories';
    items: ListItems;
    handleChangeCategory: (category: Category, index: number | undefined) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ status, items, handleChangeCategory } ) => {
    return (
        <nav className='sidebar'>
            <div className='sidebar__list'>
                {status !== "categories" && <div onClick={() => handleChangeCategory('categories', undefined)} className='sidebar__list-item'>Назад</div>}
                {items.map((item, index) => (
                    <div onClick={() => handleChangeCategory(item.link as Category, index)} className='sidebar__list-item' key={item.name}>
                        {item.name}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Sidebar;
