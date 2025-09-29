import { useState, useEffect } from 'react';

export function useDrawers() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflow = '';
  };

  const openCart = () => {
    setIsCartOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCart = () => {
    setIsCartOpen(false);
    document.body.style.overflow = '';
  };

  const closeAll = () => {
    closeNav();
    closeCart();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAll();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return {
    isNavOpen,
    isCartOpen,
    openNav,
    closeNav,
    openCart,
    closeCart,
    closeAll,
  };
}
