import { AnimatePresence, motion } from "motion/react";
import React, { useMemo, useState } from "react";
import "../styles/nav.css";

function MobileNav(props) {
  const { aboutRef, storyRef, skillsetRef, projectsRefMobile, contactRef } = props;
  const tabs = useMemo(
    () => [
      { name: "about", ref: aboutRef, color: "neon-pink" },
      { name: "story", ref: storyRef, color: "neon-purple" },
      { name: "skillset", ref: skillsetRef, color: "neon-blue" },
      { name: "projects", ref: projectsRefMobile, color: "neon-green" },
      { name: "contact", ref: contactRef, color: "neon-pink" },
    ],
    [aboutRef, storyRef, skillsetRef, projectsRefMobile, contactRef]
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleClick = (ref) => {
    setIsOpen(false);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="nav mobile-nav">
      <button className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
						className="menu-list"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabs.map((tab) => (
              <motion.li
                className={`${tab.color} menu-item`}
                key={`${tab.name}-mobile`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div onClick={() => handleClick(tab.ref)}>{tab.name}</div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default MobileNav;
