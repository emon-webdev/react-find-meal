import React from 'react';

const Header = () => {
    return (
        <div className='p-4 flex items-center justify-evenly bg-blue-300'>
            <h1 className="text-3xl text-center font-bold">
                This is Header
            </h1>
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Cart</label>
        </div>
    );
};

export default Header;