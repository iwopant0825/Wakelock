"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import AdSense, { BannerAd, SidebarAd, BottomAd } from "./components/AdSense";
import LanguageSelector from "./components/LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";
import { ADSENSE_CONFIG } from "../config/adsense";

// Styled Components
const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 30% 20%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 500px;
  width: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }
`;

// SEO 친화적 콘텐츠 섹션
const SEOContent = styled(motion.section)`
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: left;
  line-height: 1.8;

  h2 {
    color: #2d3748;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h3 {
    color: #4a5568;
    margin: 2rem 0 1rem 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    color: #718096;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  ul {
    color: #718096;
    margin-left: 1.5rem;

    li {
      margin-bottom: 0.8rem;

      strong {
        color: #4a5568;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 2rem 1rem;
    padding: 1.5rem;

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatusText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #4a5568;
  font-weight: 500;
`;

const ToggleButton = styled(motion.button)<{ $isActive: boolean }>`
  background: ${(props) =>
    props.$isActive
      ? "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)"
      : "linear-gradient(135deg, #4ecdc4 0%, #26a69a 100%)"};
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const Description = styled(motion.div)`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #718096;
  font-size: 0.95rem;
  line-height: 1.6;

  h3 {
    color: #4a5568;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  ul {
    text-align: left;
    margin-top: 1rem;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;

      &::before {
        content: "•";
        color: #667eea;
        font-weight: bold;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const StatusIndicator = styled(motion.div)<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background: ${(props) =>
    props.$isActive ? "rgba(255, 107, 107, 0.1)" : "rgba(78, 205, 196, 0.1)"};
  color: ${(props) => (props.$isActive ? "#ff6b6b" : "#26a69a")};
  font-weight: 500;
  margin-bottom: 1.5rem;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => (props.$isActive ? "#ff6b6b" : "#26a69a")};
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const HiddenVideo = styled.video`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`;

// Wake Lock Hook
function useWakeLock() {
  const [isSupported, setIsSupported] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setIsSupported("wakeLock" in navigator);
  }, []);
  const requestWakeLock = useCallback(async () => {
    try {
      if (isSupported && "wakeLock" in navigator) {
        wakeLockRef.current = await navigator.wakeLock.request("screen");
        setIsActive(true);

        wakeLockRef.current.addEventListener("release", () => {
          setIsActive(false);
        });
      } else {
        // Fallback: video loop method
        if (videoRef.current) {
          await videoRef.current.play();
          setIsActive(true);
        }
      }
    } catch (err) {
      console.error("Wake lock request failed:", err);
      // Fallback on error
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          setIsActive(true);
        } catch (videoErr) {
          console.error("Video fallback failed:", videoErr);
        }
      }
    }
  }, [isSupported]);

  const releaseWakeLock = async () => {
    try {
      if (wakeLockRef.current) {
        await wakeLockRef.current.release();
        wakeLockRef.current = null;
      }

      if (videoRef.current) {
        videoRef.current.pause();
      }

      setIsActive(false);
    } catch (err) {
      console.error("Wake lock release failed:", err);
    }
  };

  const toggleWakeLock = () => {
    if (isActive) {
      releaseWakeLock();
    } else {
      requestWakeLock();
    }
  }; // Handle visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (
        document.visibilityState === "visible" &&
        isActive &&
        !wakeLockRef.current
      ) {
        requestWakeLock();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isActive, requestWakeLock]);

  return {
    isSupported,
    isActive,
    toggleWakeLock,
    videoRef,
  };
}

export default function Home() {
  const { isSupported, isActive, toggleWakeLock, videoRef } = useWakeLock();
  const { t, language } = useLanguage();

  return (
    <Container>
      {/* 언어 선택기 */}
      <LanguageSelector />
      {/* 상단 배너 광고 - 가장 효과적인 위치 */}
      <BannerAd
        adSlot={ADSENSE_CONFIG.AD_SLOTS.TOP_BANNER}
        adFormat="auto"
        adStyle={{ minHeight: "90px" }}
      />
      <Card
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {" "}
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("title")}
        </Title>
        <StatusIndicator
          $isActive={isActive}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          {t("currentStatus")}:{" "}
          {isActive ? t("statusActive") : t("statusInactive")}
        </StatusIndicator>
        <StatusText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {isActive ? t("statusMessageActive") : t("statusMessageInactive")}
        </StatusText>
        <ToggleButton
          $isActive={isActive}
          onClick={toggleWakeLock}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {" "}
            <motion.span
              key={isActive ? "stop" : "start"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {isActive ? t("buttonStop") : t("buttonStart")}
            </motion.span>
          </AnimatePresence>
        </ToggleButton>{" "}
        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3>{t("usageTitle")}</h3>
          <ul>
            <li>{t("usageStep1")}</li>
            <li>{t("usageStep2")}</li>
            <li>{t("usageStep3")}</li>
            <li>
              {isSupported
                ? t("usageStep4Supported")
                : t("usageStep4NotSupported")}
            </li>
          </ul>
        </Description>
      </Card>{" "}
      {/* 중간 광고 - 콘텐츠 아래 */}
      <AdSense
        adSlot={ADSENSE_CONFIG.AD_SLOTS.MIDDLE_CONTENT}
        adFormat="auto"
        adStyle={{ maxWidth: "500px", minHeight: "250px" }}
      />
      {/* 사이드바 광고 - 데스크탑 전용 */}
      <SidebarAd
        adSlot={ADSENSE_CONFIG.AD_SLOTS.SIDEBAR}
        adFormat="vertical"
        adStyle={{ width: "160px", height: "600px" }}
      />
      {/* Fallback video for browsers that don't support Wake Lock API */}
      <HiddenVideo ref={videoRef} loop muted playsInline>
        <source
          src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAuFtZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE2MSAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMjEgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0xIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTIgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MCBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0wIHdlaWdodHA9MCBrZXlpbnQ9MjUwIGtleWludF9taW49MjUgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTUxLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAABWWIhAAj//728P4FPFf//+94QQAAAz9tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAABF3RyYWsAAABcdGtoZAAAAA8AAAAAAAAAAAAAAAABAAAAAAAAZAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAaAAAAZGVkeXQAAABrZHl0cRgAAAAA//79/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f3+/f39/f39/f39/f39/f39AAAABS3RyYWsAAAAA"
          type="video/mp4"
        />
      </HiddenVideo>
      {/* 하단 광고 - 페이지 하단 */}
      <BottomAd
        adSlot={ADSENSE_CONFIG.AD_SLOTS.BOTTOM}
        adFormat="auto"
        adStyle={{ minHeight: "90px" }}
      />{" "}
      {/* SEO 친화적 콘텐츠 섹션 */}
      <SEOContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2>{t("seoMainTitle")}</h2>
        <p>{t("seoMainDescription")}</p> <h3>{t("seoUseCasesTitle")}</h3>
        <ul>
          {t("seoUseCases").map((useCase: string, index: number) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: useCase.replace(/^([^:]+):/, "<strong>$1:</strong>"),
              }}
            />
          ))}
        </ul>{" "}
        <h3>{t("seoFeaturesTitle")}</h3>
        <ul>
          {t("seoFeatures").map((feature: string, index: number) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: feature.replace(/^([^:]+):/, "<strong>$1:</strong>"),
              }}
            />
          ))}
        </ul>{" "}
        <h3>{t("seoHowToTitle")}</h3>
        <ol>
          {t("seoHowToSteps").map((step: string, index: number) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: step.replace(/"([^"]+)"/g, '<strong>"$1"</strong>'),
              }}
            />
          ))}
        </ol>
        <h3>{t("faqTechTitle")}</h3>
        <ul>
          {t("faqTechItems").map((item: string, index: number) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: item.replace(/^([^:]+):/, "<strong>$1:</strong>"),
              }}
            />
          ))}
        </ul>
        <h3>{t("faqDevicesTitle")}</h3>
        <ul>
          {t("faqDevicesItems").map((item: string, index: number) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: item.replace(/^([^:]+):/, "<strong>$1:</strong>"),
              }}
            />
          ))}
        </ul>
        <h3>{t("faqTitle")}</h3>
        <p>
          <strong>{t("faqQ1")}</strong>
        </p>
        <p>{t("faqA1")}</p>
        <p>
          <strong>{t("faqQ2")}</strong>
        </p>
        <p>{t("faqA2")}</p>
        <p>
          <strong>{t("faqQ3")}</strong>
        </p>
        <p>{t("faqA3")}</p>
        <p>
          <strong>{t("faqQ4")}</strong>
        </p>
        <p>{t("faqA4")}</p>
      </SEOContent>
    </Container>
  );
}
