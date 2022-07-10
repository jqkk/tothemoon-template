import React from 'react';

function Layout({ children }) {
  return (
    <section
      className="resume-section"
      style={{ display: 'block', alignItems: 'stretch', padding: '2rem' }}
    >
      <div className="resume-section-content" style={{ height: '100vh' }}>
        {children}
      </div>
    </section>
  );
}

export default Layout;
