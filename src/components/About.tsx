import React from 'react';

const About = () => {
  const team = [
    { name: 'Onivaldo Pereira', role: 'Fundador & PM' },
    { name: 'Marlon Silva', role: 'Lead Developer' },
    { name: 'Natan Valladares', role: 'Art & Concept' },
  ];

  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        padding: '60px 20px',
        color: 'white',
        borderTop: '1px solid #222',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#00F0FF', marginBottom: '40px' }}>Nossa Equipe</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {team.map((m, i) => (
          <div
            key={i}
            style={{
              padding: '30px',
              borderRadius: '20px',
              border: '1px solid #333',
              textAlign: 'center',
              background: '#111',
            }}
          >
            <h3 style={{ margin: '0', fontSize: '1.4rem' }}>{m.name}</h3>
            <p style={{ color: '#00F0FF', fontSize: '0.9rem', marginTop: '5px' }}>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default About;
