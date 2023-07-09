import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

/**
 *
 * @param {Array} items The list of items to display in the menu bar, each item is a string
 * @returns {Object}
 */
export default function AppDrawer({ items, onClickPage }) {
  const [menuIsOpen, setmenuIsOpen] = useState(false);

  function handlemenuIsOpen() {
    setmenuIsOpen(!menuIsOpen);
  }

  function handleMenuSelect(text) {
    setmenuIsOpen(!menuIsOpen);
    onClickPage(text);
  }

  return (
    <div>
      <HamburgerMenu onOpenMenu={handlemenuIsOpen} />
      {menuIsOpen && <Overlay onCloseMenu={handlemenuIsOpen} />}
      <FullMenu
        items={items}
        menuIsOpen={menuIsOpen}
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

function FullMenu({ items, menuIsOpen, onCloseMenu }) {
  const menuItems = items.map((item) => (
    <p key={item}>
      <span onClick={() => onCloseMenu(item)}>{item}</span>
    </p>
  ))

  return (
    <div className="fullMenu" style={{ transform: menuIsOpen ? 'translateX(0)' : 'translateX(-14.5rem)' }}>
      {menuItems}
    </div>
  );
}
