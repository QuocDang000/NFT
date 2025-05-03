import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavbar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    setMobileMenuOpen(false);
  };

  const handleNavigate = (path: string) => navigate(path);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const getMenuIcon = () =>
    isMobileMenuOpen ? "/icons/close_navbar.svg" : "/icons/open_navbar.svg";

  return {
    activeIndex,
    isMobileMenuOpen,
    handleNavClick,
    handleNavigate,
    toggleMobileMenu,
    getMenuIcon,
  };
};
