import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyBottomBar } from "./StickyBottomBar";
import { NavDrawer } from "./NavDrawer";
import { CartDrawer } from "./CartDrawer";
import { useDrawers } from "../hooks/useDrawers";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { 
    isNavOpen, 
    isCartOpen, 
    openNav, 
    closeNav, 
    openCart, 
    closeCart 
  } = useDrawers();

  return (
    <div className="min-h-screen">
      <Header onOpenNav={openNav} onOpenCart={openCart} />
      <NavDrawer isOpen={isNavOpen} onClose={closeNav} />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <main>{children}</main>
      <Footer />
      <StickyBottomBar />
    </div>
  );
}
