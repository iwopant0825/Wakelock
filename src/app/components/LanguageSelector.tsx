"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const LanguageSwitcher = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 0.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    scale: 0.9;
  }
`;

const LanguageButton = styled(motion.button)<{ $isActive: boolean }>`
  background: ${(props) =>
    props.$isActive
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "transparent"};
  color: ${(props) => (props.$isActive ? "white" : "#4a5568")};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 60px;

  &:hover {
    background: ${(props) =>
      props.$isActive
        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        : "rgba(102, 126, 234, 0.1)"};
    transform: translateY(-1px);
  }
`;

const LanguageIcon = styled.span`
  margin-right: 0.3rem;
  font-size: 1rem;
`;

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <LanguageSwitcher
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <LanguageButton
        $isActive={language === "ko"}
        onClick={() => setLanguage("ko")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <LanguageIcon>🇰🇷</LanguageIcon>
        KO
      </LanguageButton>

      <LanguageButton
        $isActive={language === "en"}
        onClick={() => setLanguage("en")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <LanguageIcon>🇺🇸</LanguageIcon>
        EN
      </LanguageButton>
    </LanguageSwitcher>
  );
}
