import React from 'react';
import PillNav from '../ui/PillNav';

const Navbar = () => {
  return (
    <PillNav
      logoText="AT." // Replaced 'logo' with 'logoText'
      items={[
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ]}
      activeHref="/"
      className="custom-nav"
      baseColor="#0f172a"
      pillColor="#1e293b"
      pillTextColor="#94a3b8"
      hoveredPillTextColor="#ffffff"
      initialLoadAnimation={true}
    />
  );
};

export default Navbar;