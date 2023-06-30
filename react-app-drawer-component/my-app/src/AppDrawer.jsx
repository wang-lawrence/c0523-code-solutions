import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

/**
 *
 * @param {Array} items The list of items to display in the menu bar, each item is a string
 * @returns {Object}
 */
export default function AppDrawer({ items, onClickPage }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }

  function handleMenuSelect(text) {
    setToggleMenu(!toggleMenu);
    onClickPage(text);
  }

  return (
    <div>
      <HamburgerMenu onOpenMenu={handleToggleMenu} />
      {toggleMenu && <Overlay onCloseMenu={handleToggleMenu} />}
      <FullMenu
        items={items}
        translateX={toggleMenu ? 'translateX(0)' : 'translateX(-14.5rem)'}
        onCloseMenu={handleMenuSelect}
      />
    </div>
  );
}


function HamburgerMenu({onOpenMenu}) {
  return (
    <div className ='menu-icon' onClick={onOpenMenu}>
      <FaBars  />
    </div>
  );
}


function Overlay({onCloseMenu}) {
  return <div className="overlay" onClick={onCloseMenu}></div>;
}

function FullMenu({ items, translateX, onCloseMenu }) {
  const menuItems = items.map((item) => (
    <p key={item}>
      <span onClick={() => onCloseMenu(item)}>{item}</span>
    </p>
  ))

  return (
    <div className="fullMenu" style={{ transform: translateX }}>
      {menuItems}
    </div>
  );
}
