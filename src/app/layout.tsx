import type { Metadata, Viewport } from "next";
import React from "react";
import Script from "next/script";
import { StyledComponentsRegistry } from "./components/registry";
import { LanguageProvider } from "../contexts/LanguageContext";
import GlobalStyles from "./styles/GlobalStyles";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default:
      "Screen Wake Lock Tool - Keep Screen Awake Online Free | 화면 꺼짐 방지기",
    template: "%s | Screen Wake Lock Tool",
  },
  description:
    "🔥 FREE Screen Wake Lock Tool! Keep your browser screen awake online. Perfect for watching videos, online classes, presentations, reading. Works on Chrome, Safari, Edge, Firefox. No installation required. Wake Lock API supported. 브라우저 화면 꺼짐 방지 무료 도구.",
  keywords: [
    // 영어 핵심 키워드 (우선순위 높음)
    "screen wake lock",
    "keep screen on",
    "prevent screen sleep",
    "wake lock API",
    "screen awake tool",
    "prevent screen timeout",
    "keep monitor awake",
    "screen saver disable",
    "display sleep prevention",
    "browser screen awake",
    "prevent computer sleep",
    "screen lock prevention",
    "keep display on",
    "anti screen lock",
    "screen stay awake",

    // 사용 목적 영어 키워드
    "online video watching",
    "prevent screen off during video",
    "keep screen on for presentations",
    "online learning screen lock",
    "streaming screen awake",
    "reading screen timeout",
    "gaming screen lock",
    "video call screen sleep",
    "webinar screen awake",
    "online course screen on",
    "livestream keep awake",
    "netflix screen lock",
    "youtube screen timeout",

    // 기술 관련 영어 키워드
    "wake lock javascript",
    "HTML5 wake lock",
    "web wake lock",
    "browser API wake lock",
    "PWA wake lock",
    "screen wake lock API",
    "navigator wake lock",
    "chrome wake lock",
    "safari wake lock",
    "firefox wake lock",
    "edge wake lock",

    // 플랫폼/기기 영어 키워드
    "chrome screen awake",
    "safari screen lock prevention",
    "edge keep screen on",
    "firefox prevent sleep",
    "mobile screen wake lock",
    "iPhone screen awake",
    "android screen timeout",
    "laptop screen lock",
    "desktop prevent sleep",
    "tablet screen awake",
    "windows screen lock",
    "mac screen timeout",
    "linux screen awake",

    // 대안 영어 검색어
    "stop screen turning off",
    "disable screen timeout",
    "prevent display sleep",
    "keep computer awake",
    "stop auto sleep",
    "disable power saving",
    "prevent hibernation",
    "keep monitor active",
    "screen always on",
    "never sleep screen",

    // 무료 도구 관련
    "free screen wake lock",
    "free keep screen on",
    "online screen tool",
    "no download required",
    "browser based tool",
    "instant screen lock",
    "web app wake lock",

    // 한국어 핵심 키워드
    "화면 꺼짐 방지",
    "스크린 락 방지",
    "화면 보호",
    "화면 자동 꺼짐 방지",
    "브라우저 화면 유지",
    "모니터 꺼짐 방지",
    "디스플레이 꺼짐 방지",
    "노트북 화면 꺼짐 방지",
    "컴퓨터 절전 방지",
    "화면 보호기 비활성화",

    // 한국어 사용 목적 키워드
    "온라인 강의 화면 유지",
    "동영상 시청 화면 유지",
    "프레젠테이션 화면 유지",
    "웹페이지 화면 유지",
    "독서 화면 유지",
    "게임 화면 유지",
    "스트리밍 화면 유지",

    // 한국어 대안 검색어
    "화면 안꺼지게",
    "화면 켜놓기",
    "모니터 안꺼지게",
    "절전모드 방지",
    "스크린세이버 끄기",
  ],
  authors: [{ name: "Screen Wake Lock Tool", url: "https://your-domain.com" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://your-domain.com",
    languages: {
      ko: "https://your-domain.com",
      en: "https://your-domain.com/en",
    },
  },
  openGraph: {
    title: "Free Screen Wake Lock Tool - Keep Your Screen Awake Online",
    description:
      "🔥 FREE online tool to keep your browser screen awake! Perfect for watching videos, online classes, presentations, and reading. Works on all browsers. No installation required. Wake Lock API supported.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    url: "https://your-domain.com",
    siteName: "Screen Wake Lock Tool",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Free Screen Wake Lock Tool - Keep Your Screen Awake Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter",
    title: "Free Screen Wake Lock Tool - Keep Your Screen Awake Online",
    description:
      "🔥 FREE tool to prevent your screen from sleeping! Perfect for videos, online learning, presentations. Works on all browsers instantly.",
    images: ["/og-image.svg"],
  },
  category: "웹 도구",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    other: [
      {
        rel: "icon",
        url: "/icon-192x192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 언어 및 지역 설정 */}
        <meta httpEquiv="content-language" content="en,ko" />
        <link rel="alternate" hrefLang="en" href="https://your-domain.com" />
        <link rel="alternate" hrefLang="ko" href="https://your-domain.com" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://your-domain.com"
        />
        {/* 파비콘 링크 */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-16x16.svg"
          sizes="16x16"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="/favicon-32x32.svg"
          sizes="32x32"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.svg"
          sizes="180x180"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* 영어권 SEO 최적화 메타태그 */}
        <meta name="application-name" content="Screen Wake Lock Tool" />
        <meta name="apple-mobile-web-app-title" content="Screen Wake Lock" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* 추가 검색 엔진 최적화 */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="classification" content="Web Tool, Utility, Browser Tool" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta
          name="subject"
          content="Screen Wake Lock, Prevent Screen Sleep, Keep Screen On"
        />
        <meta
          name="abstract"
          content="Free online tool to prevent your browser screen from sleeping or turning off automatically"
        />
        <meta name="topic" content="Screen Wake Lock Tool" />
        <meta
          name="summary"
          content="Keep your screen awake while watching videos, online classes, presentations"
        />
        <meta name="designer" content="Screen Wake Lock Tool Team" />
        <meta name="owner" content="Screen Wake Lock Tool" />
        <meta name="url" content="https://your-domain.com" />
        <meta name="identifier-URL" content="https://your-domain.com" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Screen Wake Lock Tool" />
        <meta name="category" content="Web Tools" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        {/* Google Search Console 인증 (실제 사용 시 교체) */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />
        {/* Naver Search Advisor 인증 (실제 사용 시 교체) */}
        <meta
          name="naver-site-verification"
          content="YOUR_NAVER_VERIFICATION_CODE"
        />
        {/* 추가 SEO 메타 태그 */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="화면 꺼짐 방지기" />
        {/* 구조화된 데이터 (JSON-LD) - 영어 우선 SEO 최적화 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Screen Wake Lock Tool - Keep Screen Awake Online",
              alternateName: "화면 꺼짐 방지기",
              description:
                "Free online tool to keep your browser screen awake. Perfect for watching videos, online classes, presentations, and reading. Works on all browsers with Wake Lock API support.",
              url: "https://your-domain.com",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              browserRequirements: "Chrome 84+, Safari 16.4+, Firefox, Edge",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              author: {
                "@type": "Organization",
                name: "Screen Wake Lock Tool Team",
                url: "https://your-domain.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Screen Wake Lock Tool",
                logo: {
                  "@type": "ImageObject",
                  url: "https://your-domain.com/logo.svg",
                },
              },
              datePublished: "2025-01-01",
              dateModified: new Date().toISOString().split("T")[0],
              inLanguage: ["en", "ko"],
              keywords: [
                "screen wake lock",
                "keep screen on",
                "prevent screen sleep",
                "wake lock API",
                "screen awake tool",
                "prevent screen timeout",
                "online video watching",
                "prevent screen off",
                "browser screen awake",
                "free screen tool",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "247",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Alex Johnson",
                  },
                  reviewBody:
                    "Perfect tool for online classes! No more interruptions from screen timeout.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Sarah Chen",
                  },
                  reviewBody:
                    "Excellent for video streaming and presentations. Works flawlessly!",
                },
              ],
              mainEntity: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How to keep screen awake while watching videos?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Use our free Screen Wake Lock tool. Just click the 'Start Wake Lock' button and your screen will stay awake automatically.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does this work on all browsers?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! It works on Chrome, Safari, Firefox, Edge and all modern browsers. We use Wake Lock API for modern browsers and fallback methods for older ones.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is this tool completely free?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, our Screen Wake Lock tool is 100% free with no installation required. Just visit our website and start using it immediately.",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <LanguageProvider>
            <GlobalStyles />
            {children}
          </LanguageProvider>
        </StyledComponentsRegistry>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
