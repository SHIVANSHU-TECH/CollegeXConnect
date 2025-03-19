"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Coming Soon</h1>
      <p style={styles.message}>
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <button style={styles.button} onClick={handleRedirect}>
        Go to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color:"white"
    // backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    // color: '#333',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    // color: '#666',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.8rem 1.6rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
};

export default NotFound;