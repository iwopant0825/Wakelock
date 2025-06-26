// Google AdSense 설정 파일
export const ADSENSE_CONFIG = {
  // 실제 사용시에는 본인의 AdSense Publisher ID로 교체하세요
  PUBLISHER_ID: 'ca-pub-YOUR_PUBLISHER_ID',
  
  // 광고 슬롯 ID들 (AdSense 계정에서 생성한 광고 단위 ID로 교체)
  AD_SLOTS: {
    TOP_BANNER: '1234567890',        // 상단 배너 광고
    MIDDLE_CONTENT: '0987654321',    // 콘텐츠 중간 광고
    SIDEBAR: '1122334455',           // 사이드바 광고
    BOTTOM: '5566778899',            // 하단 광고
  },
  
  // 광고 포맷 설정
  AD_FORMATS: {
    BANNER: 'auto',
    SQUARE: 'rectangle',
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal',
  },
  
  // 반응형 광고 크기
  RESPONSIVE_SIZES: {
    MOBILE: {
      width: '100%',
      minHeight: '250px',
    },
    TABLET: {
      width: '468px',
      height: '60px',
    },
    DESKTOP: {
      width: '728px',
      height: '90px',
    },
  },
}

// AdSense 성능 최적화 팁
export const ADSENSE_OPTIMIZATION_TIPS = `
🎯 AdSense 최적화 가이드:

1. 광고 위치 최적화
   - 상단 배너: 첫 화면에서 보이는 위치 (Above the fold)
   - 콘텐츠 중간: 사용자가 콘텐츠를 읽다가 자연스럽게 보는 위치
   - 사이드바: 데스크탑에서만 표시되는 수직 광고

2. 반응형 광고 사용
   - data-full-width-responsive="true" 속성 사용
   - 다양한 화면 크기에 자동 적응

3. 성능 고려사항
   - 광고 로딩으로 인한 페이지 속도 저하 최소화
   - Lazy loading 구현
   - CLS(Cumulative Layout Shift) 최소화

4. 광고 정책 준수
   - 광고와 콘텐츠 구분 명확히
   - "Advertisement" 라벨 표시
   - 클릭 유도 금지

5. A/B 테스트
   - 다양한 광고 위치와 크기 테스트
   - 수익과 사용자 경험의 균형 찾기
`;

export default ADSENSE_CONFIG
