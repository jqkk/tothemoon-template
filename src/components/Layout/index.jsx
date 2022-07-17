import React from 'react';

function Layout({ children, id }) {
  return (
    <section
      className="resume-section"
      style={{ display: 'block', alignItems: 'stretch', padding: '2rem' }}
      id={id}
    >
      <div className="resume-section-content" style={{ height: '100vh' }}>
        {children}
      </div>
    </section>
  );
}

export default Layout;
