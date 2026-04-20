import React from 'react';

const Hero = () => {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#0A0A0A',
        padding: '40px 20px',
      }}
    >
      <img
        src="/logo.png"
        alt="Cumbuca Labs"
        style={{
          width: '100%',
          maxWidth: '280px',
          marginBottom: '1.5rem',
          filter: 'drop-shadow(0 0 10px rgba(0,240,255,0.3))',
        }}
      />
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: '900',
          margin: '0',
          color: '#00F0FF',
          textShadow: '0 0 20px rgba(0,240,255,0.5)',
          letterSpacing: '-1px',
        }}
      >
        CUMBUCA LABS
      </h1>
      <p
        style={{
          color: '#ccc',
          fontSize: '1.2rem',
          marginTop: '1rem',
          maxWidth: '500px',
          lineHeight: '1.6',
        }}
      >
        Estúdio Independente de Games. Criando universos digitais com alma brasileira.
      </p>
      <div style={{ marginTop: '2.5rem', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button
          style={{
            backgroundColor: '#00F0FF',
            color: 'black',
            padding: '15px 35px',
            borderRadius: '50px',
            fontWeight: 'bold',
            border: 'none',
            boxShadow: '0 0 15px rgba(0,240,255,0.4)',
            cursor: 'pointer',
          }}
        >
          Nossos Jogos
        </button>
      </div>
    </section>
  );
};
export default Hero;
