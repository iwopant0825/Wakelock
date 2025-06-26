"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { ADSENSE_CONFIG } from "../../config/adsense";

interface AdSenseProps {
  adSlot?: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  adStyle?: React.CSSProperties;
  className?: string;
  label?: boolean;
}

const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    padding: 0.8rem;
  }
`;

const AdLabel = styled.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;

export default function AdSense({
  adSlot = ADSENSE_CONFIG.AD_SLOTS.TOP_BANNER,
  adFormat = "auto",
  adStyle,
  className,
  label = true,
}: AdSenseProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    try {
      // AdSense 광고 로드 (비동기)
      const timer = setTimeout(() => {
        if (typeof window !== "undefined" && (window as any).adsbygoogle) {
          ((window as any).adsbygoogle =
            (window as any).adsbygoogle || []).push({});
        }
      }, 100);

      return () => clearTimeout(timer);
    } catch (error) {
      console.error("AdSense loading error:", error);
    }
  }, [isMounted]);

  // 서버사이드에서는 빈 div 렌더링
  if (!isMounted) {
    return (
      <AdContainer className={className}>
        {label && <AdLabel>Advertisement</AdLabel>}
        <div style={{ minHeight: "90px", ...adStyle }} />
      </AdContainer>
    );
  }

  return (
    <AdContainer className={className}>
      {label && <AdLabel>Advertisement</AdLabel>}
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          ...adStyle,
        }}
        data-ad-client={ADSENSE_CONFIG.PUBLISHER_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </AdContainer>
  );
}

// 특별한 광고 컴포넌트들
export const BannerAd = styled(AdSense)`
  width: 100%;
  max-width: 728px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem auto;
  }
`;

export const SquareAd = styled(AdSense)`
  width: 320px;
  margin: 1.5rem auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const SidebarAd = styled(AdSense)`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 160px;
  z-index: 10;
  margin: 0;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const BottomAd = styled(AdSense)`
  width: 100%;
  max-width: 728px;
  margin: 3rem auto 2rem;

  @media (max-width: 768px) {
    margin: 2rem auto 1rem;
  }
`;
