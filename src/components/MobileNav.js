import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useMemo, useState } from "react";
import "../styles/nav.css";

function Nav(props) {
  const { aboutRef, storyRef, skillsetRef, projectsRef, contactRef } = props;
  const tabs = useMemo(
    () => [
      { name: "about", ref: aboutRef, color: "neon-pink" },
      { name: "story", ref: storyRef, color: "neon-purple" },
      { name: "skillset", ref: skillsetRef, color: "neon-blue" },
      { name: "projects", ref: projectsRef, color: "neon-green" },
      { name: "contact", ref: contactRef, color: "neon-pink" },
    ],
    [aboutRef, storyRef, skillsetRef, projectsRef, contactRef]
  );
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isOpen, setIsOpen] = useState(false);

  function handleScrollTo(ref) {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="nav">
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
      {/* <ul>
        {tabs.map((tab) => (
          <motion.li
            className={`${tab.color}`}
            key={tab.name}
            onClick={() => {
              setActiveTab(tab);
              handleScrollTo(tab.ref);
            }}
          >
            {tab.name}
          </motion.li>
        ))}
      </ul> */}

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
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div onClick={() => setIsOpen(false)}>{tab.name}</div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
