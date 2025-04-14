import * as motion from "motion/react-client";
import React, { useEffect, useMemo, useState } from "react";
import "../styles/nav.css";

function Nav(props) {
  const { aboutRef, storyRef, skillsetRef, projectsRef, contactRef } = props;
  const tabs = useMemo(() => [
    { name: "about", ref: aboutRef, color: 'neon-pink' },
    { name: "story", ref: storyRef, color: 'neon-purple' },
    { name: "skillset", ref: skillsetRef, color: 'neon-blue' },
    { name: "projects", ref: projectsRef, color: 'neon-green' },
    { name: "contact", ref: contactRef, color: 'neon-pink' },
  ], [aboutRef, storyRef, skillsetRef, projectsRef, contactRef]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  function handleScrollTo(ref) {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchingTab = tabs.find((tab) => tab.ref.current === entry.target);
          if (matchingTab && matchingTab.name !== activeTab.name) {
            setActiveTab(matchingTab);
          }
        }
      });
    }, observerOptions);

    tabs.forEach((tab) => {
      if (tab.ref.current) observer.observe(tab.ref.current);
    });

    return () => {
      tabs.forEach((tab) => {
        if (tab.ref.current) observer.unobserve(tab.ref.current);
      });
    };
  }, [tabs, activeTab]);

  useEffect(() => {
    tabs.forEach((tab) => {
      if (tab.ref.current && tab.ref.current.getBoundingClientRect().top < window.innerHeight * 0.6) {
        setActiveTab(tab);
      }
    });
  }, [tabs]);

  return (
    <nav className="nav">
      <ul>
        {tabs.map((tab) => (
          <motion.li
            className={`${tab.color}`}
            style={{ position: "relative" }}
            key={tab.name}
            onClick={() => {
              setActiveTab(tab);
              handleScrollTo(tab.ref);
            }}
          >
            {tab.name}
            {tab.name === activeTab.name && (
              <motion.div
                className={`underline ${tab.color}`}
                layoutId="underline"
                id="underline"
                transition={{ 
                  type: "spring",
                  stiffness: 250,
                  damping: 20 
                }}
              />
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
