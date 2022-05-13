import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
const DropDownMenu = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="dropdown">
      <button className="transparent p-0" onClick={() => setShowMenu(true)}>
        <BiDotsVerticalRounded size={20} />
      </button>
      {showMenu && (
        <ul className="dropdown-menu list-unstyled">{children}</ul>
      )}
    </div>
  );
};

export default DropDownMenu;
