<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# 화면 꺼짐 방지기 프로젝트 - Copilot 지침

이 프로젝트는 Next.js App Router, TypeScript, styled-components, Framer Motion을 사용한 Wake Lock API 기반 웹 애플리케이션입니다.

## 기술 스택 및 패턴

### 프레임워크 및 라이브러리

- Next.js 15 (App Router 사용)
- TypeScript (엄격한 타입 검사)
- styled-components (CSS-in-JS)
- Framer Motion (애니메이션)

### 코딩 스타일 가이드라인

- 모든 컴포넌트는 TypeScript로 작성
- styled-components 사용 시 `$` prefix로 transient props 명명
- Framer Motion 애니메이션은 성능을 고려하여 구현
- 반응형 디자인 필수 (`@media` 쿼리 활용)
- 접근성 고려 (ARIA 속성, 키보드 내비게이션)

### 프로젝트 구조

```
src/
  app/
    components/     # 재사용 가능한 컴포넌트
    styles/        # 글로벌 스타일
    layout.tsx     # 루트 레이아웃
    page.tsx       # 메인 페이지
```

### Wake Lock API 사용법

- `navigator.wakeLock.request('screen')` 사용
- 지원하지 않는 브라우저를 위한 video loop 대체 방식 제공
- visibility change 이벤트 처리 필수

### SEO 최적화

- 메타 태그 완전 구성
- Open Graph 태그 포함
- 구조화된 데이터 마크업
- Google AdSense 준비를 위한 성능 최적화

### 성능 고려사항

- 정적 사이트 생성 (`output: 'export'`)
- 이미지 최적화 비활성화 (정적 배포용)
- 코드 분할 및 lazy loading
- 접근성 및 사용성 최우선

코드 제안 시 위 가이드라인을 따르고, 특히 타입 안정성과 성능 최적화에 중점을 두어 주세요.
