"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// 번역 데이터
const translations = {
  ko: {
    // 메인 타이틀
    title: "화면 꺼짐 방지기",
    subtitle: "브라우저 화면이 꺼지지 않도록 도와주는 완전 무료 도구",

    // 상태 관련
    currentStatus: "현재 상태",
    statusActive: "방지 중",
    statusInactive: "꺼짐 가능",
    statusMessageActive: "화면이 꺼지지 않도록 보호하고 있습니다",
    statusMessageInactive: "버튼을 눌러서 화면 꺼짐을 방지하세요",

    // 버튼
    buttonStart: "화면 꺼짐 방지 시작",
    buttonStop: "화면 꺼짐 방지 중지",

    // 사용법
    usageTitle: "사용법",
    usageStep1: "버튼을 눌러서 화면 꺼짐 방지를 활성화하세요",
    usageStep2: "활성화된 상태에서는 화면이 자동으로 꺼지지 않습니다",
    usageStep3: "다시 버튼을 누르면 일반 상태로 돌아갑니다",
    usageStep4Supported: "Wake Lock API를 지원합니다",
    usageStep4NotSupported:
      "Wake Lock API를 지원하지 않아 대체 방식을 사용합니다",

    // SEO 콘텐츠
    seoMainTitle: "🔥 화면 꺼짐 방지기 - 완전 무료 온라인 도구",
    seoMainDescription:
      "브라우저에서 화면이 자동으로 꺼지는 것을 방지하는 최고의 무료 온라인 도구입니다. 동영상 시청, 온라인 강의 수강, 프레젠테이션 진행, 웹페이지 독서 등 다양한 상황에서 화면이 꺼지지 않도록 도와드립니다.",

    seoUseCasesTitle: "🎯 이런 상황에서 꼭 필요해요!",
    seoUseCases: [
      "온라인 강의 수강: 수업 중간에 화면이 꺼져서 놓치는 일이 없어집니다",
      "동영상 시청: YouTube, 넷플릭스 등에서 편안하게 시청할 수 있습니다",
      "프레젠테이션: 발표 중에 화면이 꺼지는 당황스러운 상황을 방지합니다",
      "웹페이지 독서: 긴 글을 읽을 때 화면이 꺼지지 않아 집중할 수 있습니다",
      "온라인 게임: 게임 플레이 중 화면이 꺼지는 것을 막아줍니다",
      "라이브 스트리밍: 실시간 방송 시청 시 끊김 없는 경험을 제공합니다",
    ],

    seoFeaturesTitle: "✨ 주요 기능 및 특징",
    seoFeatures: [
      "100% 무료: 설치나 회원가입 없이 바로 사용 가능",
      "모든 브라우저 지원: Chrome, Safari, Edge, Firefox 등 모든 브라우저에서 작동",
      "Wake Lock API: 최신 웹 기술을 활용한 안정적인 화면 유지",
      "반응형 디자인: PC, 노트북, 태블릿, 스마트폰 모든 기기에서 최적화",
      "빠른 실행: 버튼 한 번 클릭으로 즉시 활성화",
      "배터리 최적화: 시스템 리소스를 최소한으로 사용",
    ],

    seoHowToTitle: "🚀 사용법 (3초만에 완성!)",
    seoHowToSteps: [
      '위의 "화면 꺼짐 방지 시작" 버튼을 클릭하세요',
      '상태가 "방지 중"으로 변경되는 것을 확인하세요',
      "이제 화면이 자동으로 꺼지지 않습니다!",
      '사용이 끝나면 "화면 꺼짐 방지 중지" 버튼을 눌러주세요',
    ],
    // FAQ
    faqTechTitle: "🔧 기술적 우수성",
    faqTechItems: [
      "Wake Lock API: 안전하고 효율적인 동작을 위한 웹 표준 기술 사용",
      "대체 지원: 구형 브라우저에서도 완벽하게 작동",
      "탭 전환 처리: 다른 탭에서 돌아올 때 자동으로 재활성화",
      "메모리 효율성: 최소한의 시스템 리소스 사용",
    ],

    faqDevicesTitle: "📱 모든 기기에서 완벽 지원",
    faqDevicesItems: [
      "Windows PC: 모든 Windows 버전에서 완벽 지원",
      "Mac: macOS Safari, Chrome 등에서 원활한 동작",
      "iPhone/iPad: iOS Safari에 최적화된 터치 인터페이스",
      "Android: 안드로이드 Chrome, 삼성 인터넷 등 지원",
      "Linux: 모든 리눅스 배포판 브라우저에서 사용 가능",
    ],

    faqTitle: "💡 자주 묻는 질문 (FAQ)",
    faqQ1: "Q: 이 도구는 안전한가요?",
    faqA1:
      "A: 네, 100% 안전합니다. 웹 표준 Wake Lock API를 사용하며, 개인정보를 수집하지 않습니다.",
    faqQ2: "Q: 모든 브라우저에서 작동하나요?",
    faqA2:
      "A: 최신 브라우저에서는 Wake Lock API를, 구형 브라우저에서는 대체 방식을 사용하여 모든 브라우저에서 작동합니다.",
    faqQ3: "Q: 배터리 소모가 많나요?",
    faqA3:
      "A: 아니요, 화면 밝기만 유지하므로 추가적인 배터리 소모는 거의 없습니다.",
    faqQ4: "Q: 설치가 필요한가요?",
    faqA4:
      "A: 전혀 필요하지 않습니다. 웹브라우저만 있으면 바로 사용할 수 있습니다.",

    // 언어 선택
    languageSwitch: "언어 선택",
    korean: "한국어",
    english: "English",
  },
  en: {
    // 메인 타이틀
    title: "Screen Wake Lock Tool",
    subtitle:
      "Free online tool to prevent your browser screen from going to sleep",

    // 상태 관련
    currentStatus: "Current Status",
    statusActive: "Active",
    statusInactive: "Inactive",
    statusMessageActive: "Your screen is protected from going to sleep",
    statusMessageInactive: "Click the button to prevent screen sleep",

    // 버튼
    buttonStart: "Start Wake Lock",
    buttonStop: "Stop Wake Lock",

    // 사용법
    usageTitle: "How to Use",
    usageStep1: "Click the button to activate screen wake lock",
    usageStep2: "When active, your screen will not automatically turn off",
    usageStep3: "Click the button again to return to normal state",
    usageStep4Supported: "Wake Lock API is supported",
    usageStep4NotSupported:
      "Wake Lock API not supported, using fallback method",

    // SEO 콘텐츠
    seoMainTitle: "🔥 Screen Wake Lock Tool - Completely Free Online Tool",
    seoMainDescription:
      "The best free online tool to prevent your browser screen from automatically turning off. Perfect for watching videos, online lectures, presentations, reading web pages, and many other situations where you need to keep your screen awake.",

    seoUseCasesTitle: "🎯 Perfect for These Situations!",
    seoUseCases: [
      "Online Learning: Never miss important parts of your lessons due to screen timeout",
      "Video Streaming: Enjoy YouTube, Netflix, and other platforms without interruption",
      "Presentations: Avoid embarrassing moments when your screen turns off during presentations",
      "Web Reading: Stay focused while reading long articles without screen interruptions",
      "Online Gaming: Prevent screen timeout during gameplay",
      "Live Streaming: Enjoy uninterrupted viewing experience for live broadcasts",
    ],

    seoFeaturesTitle: "✨ Key Features & Benefits",
    seoFeatures: [
      "100% Free: No installation or registration required",
      "Universal Browser Support: Works on Chrome, Safari, Edge, Firefox, and all modern browsers",
      "Wake Lock API: Uses cutting-edge web technology for reliable screen control",
      "Responsive Design: Optimized for PC, laptop, tablet, and smartphone",
      "Instant Activation: One-click activation for immediate results",
      "Battery Optimized: Uses minimal system resources",
    ],

    seoHowToTitle: "🚀 How to Use (Takes 3 seconds!)",
    seoHowToSteps: [
      'Click the "Start Wake Lock" button above',
      'Verify that the status changes to "Active"',
      "Your screen will now stay awake automatically!",
      'When finished, click "Stop Wake Lock" to return to normal',
    ],
    // FAQ
    faqTechTitle: "🔧 Technical Excellence",
    faqTechItems: [
      "Wake Lock API: Uses web standard technology for safe and efficient operation",
      "Fallback Support: Works perfectly even on older browsers",
      "Tab Switch Handling: Automatically reactivates when returning from other tabs",
      "Memory Efficient: Uses minimal system resources",
    ],

    faqDevicesTitle: "📱 Perfect Support for All Devices",
    faqDevicesItems: [
      "Windows PC: Perfect support for all Windows versions",
      "Mac: Smooth operation on macOS Safari, Chrome, and more",
      "iPhone/iPad: Touch-optimized for iOS Safari",
      "Android: Support for Android Chrome, Samsung Internet, and more",
      "Linux: Available on all Linux distribution browsers",
    ],

    faqTitle: "💡 Frequently Asked Questions (FAQ)",
    faqQ1: "Q: Is this tool safe to use?",
    faqA1:
      "A: Yes, it's 100% safe. We use the standard Wake Lock API and don't collect any personal information.",
    faqQ2: "Q: Does it work on all browsers?",
    faqA2:
      "A: Yes, we use Wake Lock API on modern browsers and fallback methods on older browsers for universal compatibility.",
    faqQ3: "Q: Does it drain the battery?",
    faqA3:
      "A: No, it only keeps the screen brightness on, so there's minimal additional battery consumption.",
    faqQ4: "Q: Do I need to install anything?",
    faqA4: "A: Not at all. You can use it immediately with just a web browser.",

    // 언어 선택
    languageSwitch: "Language",
    korean: "한국어",
    english: "English",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en"); // 기본값을 영어로 변경

  useEffect(() => {
    // 더 정교한 브라우저 언어 감지
    const detectLanguage = () => {
      const browserLangs = [
        navigator.language,
        ...(navigator.languages || []),
      ].map((lang) => lang.toLowerCase());

      // 한국어 감지 (ko, ko-KR, ko-kr 등)
      const hasKorean = browserLangs.some(
        (lang) => lang.startsWith("ko") || lang.includes("korea")
      );

      // 영어권 국가 감지
      const englishCountries = ["en", "us", "gb", "ca", "au", "nz", "ie", "za"];
      const hasEnglish = browserLangs.some((lang) =>
        englishCountries.some((country) => lang.includes(country))
      );

      // 지역 감지 (시간대 기반)
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isKoreanTimezone =
        timezone.includes("Seoul") || timezone.includes("Asia/Seoul");

      if (hasKorean || isKoreanTimezone) {
        return "ko";
      } else {
        return "en"; // 기본값은 영어
      }
    };

    // 로컬 스토리지에서 언어 설정 불러오기 (우선순위 가장 높음)
    const savedLang = localStorage.getItem("preferred-language") as Language;
    if (savedLang && (savedLang === "ko" || savedLang === "en")) {
      setLanguage(savedLang);
    } else {
      // 저장된 언어가 없으면 브라우저 감지
      const detectedLang = detectLanguage();
      setLanguage(detectedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred-language", lang);

    // 페이지 title 변경 - 영어 우선
    document.title =
      lang === "en"
        ? "Screen Wake Lock Tool - Keep Screen Awake Online Free | 화면 꺼짐 방지기"
        : "화면 꺼짐 방지기 - 무료 온라인 스크린 락 방지 도구 | Screen Wake Lock Tool";
  };
  const t = (key: string): any => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
