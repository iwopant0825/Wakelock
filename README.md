# 화면 꺼짐 방지기 - Screen Wake Lock Tool

[한국어](#korean) | [English](#english)

---

## Korean

### 📖 프로젝트 소개

브라우저에서 화면이 자동으로 꺼지지 않도록 도와주는 간단한 웹 도구입니다. Wake Lock API를 사용하여 화면을 계속 켜둘 수 있으며, 지원하지 않는 브라우저에서는 대체 방식을 제공합니다.

### 🚀 주요 기능

- **Wake Lock API 지원**: 최신 브라우저에서 네이티브 Wake Lock API 사용
- **대체 방식 제공**: Wake Lock을 지원하지 않는 브라우저에서는 비디오 루프 방식 사용
- **다국어 지원**: 한국어/영어 자동 감지 및 언어 전환 기능
- **반응형 디자인**: 모바일과 데스크탑 모든 환경에서 최적화된 UI
- **부드러운 애니메이션**: Framer Motion을 활용한 자연스러운 인터랙션
- **깔끔한 디자인**: styled-components로 구현된 모던한 UI
- **SEO 최적화**: Google AdSense 준비 완료, 풍부한 메타데이터

### 🛠 기술 스택

- **Next.js 15**: App Router 사용
- **TypeScript**: 타입 안전성 보장
- **styled-components**: CSS-in-JS 스타일링
- **Framer Motion**: 부드러운 애니메이션
- **Wake Lock API**: 네이티브 화면 꺼짐 방지
- **React Context**: 다국어 상태 관리

### 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 🌐 배포

이 프로젝트는 정적 사이트로 빌드되어 GitHub Pages, Vercel, Netlify 등 다양한 플랫폼에 배포할 수 있습니다.

### 🎯 사용법

1. 웹사이트에 접속
2. 우상단에서 언어 선택 (한국어/English)
3. "화면 꺼짐 방지 시작" 버튼 클릭
4. 화면이 자동으로 꺼지지 않음
5. "화면 꺼짐 방지 중지" 버튼으로 해제

### 🌟 브라우저 지원

- **Wake Lock API 지원**: Chrome 84+, Edge 84+, Safari 16.4+
- **대체 방식**: 모든 모던 브라우저

---

## English

### 📖 Project Overview

A simple web tool that prevents your browser screen from automatically turning off. It uses the Wake Lock API to keep the screen awake, with fallback methods for browsers that don't support it.

### 🚀 Key Features

- **Wake Lock API Support**: Uses native Wake Lock API in modern browsers
- **Fallback Method**: Video loop method for browsers without Wake Lock support
- **Multilingual Support**: Automatic Korean/English detection with language switching
- **Responsive Design**: Optimized UI for both mobile and desktop environments
- **Smooth Animations**: Natural interactions using Framer Motion
- **Clean Design**: Modern UI implemented with styled-components
- **SEO Optimized**: Google AdSense ready with rich metadata

### 🛠 Tech Stack

- **Next.js 15**: Using App Router
- **TypeScript**: Type safety guaranteed
- **styled-components**: CSS-in-JS styling
- **Framer Motion**: Smooth animations
- **Wake Lock API**: Native screen sleep prevention
- **React Context**: Multilingual state management

### 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build

# Run production server
npm start
```

### 🌐 Deployment

This project builds as a static site and can be deployed to various platforms like GitHub Pages, Vercel, Netlify, etc.

### 🎯 How to Use

1. Visit the website
2. Select language from top-right corner (한국어/English)
3. Click "Start Wake Lock" button
4. Your screen will stay awake automatically
5. Click "Stop Wake Lock" button to disable

### 🌟 Browser Support

- **Wake Lock API Support**: Chrome 84+, Edge 84+, Safari 16.4+
- **Fallback Method**: All modern browsers

---

## 📱 Mobile Support

- Complete support for iOS Safari and Android Chrome
- Touch interaction optimization
- Responsive layout

## 🔧 Customization

You can modify the following in `src/app/page.tsx`:

- Color themes
- Animation settings
- Text content
- Layout structure

## 📄 License

MIT License

## 🤝 Contributing

Pull requests and issue reports are welcome!

## 📞 Contact

If you have any questions or suggestions about the project, please create an issue.
"# Wakelock" 
