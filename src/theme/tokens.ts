/**
 * 중앙화된 디자인 토큰
 * JSON 테마 기반 — 프로젝트 전반에서 import하여 사용
 */

export const theme = {
  colors: {
    palette: {
      primary: '#FFE300',
      green: '#00D080',
      red: '#EC4343',
      blue: '#425EFF',
      swiperDefault: '#007AFF',
    },
    white: {
      white100: '#FFFFFF',
      white40: 'rgba(255, 255, 255, 0.40)',
      white30: 'rgba(255, 255, 255, 0.30)',
      white20: 'rgba(255, 255, 255, 0.20)',
    },
    black: {
      black5: '#FAFAFA',
      black10: '#F9F9F9',
      black15: '#F7F7F7',
      black20: '#F4F4F4',
      black25: '#ECECEC',
      black30: '#E6E6E6',
      black35: '#DDDDDD',
      black40: '#CCCCCC',
      black45: '#BBBBBB',
      black50: '#AAAAAA',
      black55: '#999999',
      black60: '#888888',
      black65: '#777777',
      black70: '#666666',
      black80: '#444444',
      black85: '#333333',
      black90: '#222222',
      black100: '#000000',
    },
    semantic: {
      textPrimary: 'rgb(0, 0, 0)',
      textSecondary: 'rgb(136, 136, 136)',
      textDark: 'rgb(68, 68, 68)',
      borderDivider: 'rgb(230, 230, 230)',
      bgLight: 'rgb(247, 247, 247)',
      footerBg: 'rgb(249, 249, 249)',
      focusOutline: 'rgb(0, 123, 255)',
      overlay: 'rgba(0,0,0,0.5)',
    },
  },
  typography: {
    fontFamily: '"Pretendard Variable", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSizes: {
      display: '90px',
      h2: '32px',
      h3_h5: '26px',
      body_large: '22px',
      body: '20px',
      body_medium: '18px',
      body_default: '16px',
      caption_large: '15px',
      caption: '14px',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    headings: {
      h1: { fontSize: '16px', fontWeight: '400', lineHeight: '24px' },
      h2: { fontSize: '32px', fontWeight: '700', lineHeight: '43.52px', letterSpacing: '-0.64px' },
      h3: { fontSize: '20px', fontWeight: '600', lineHeight: '28.8px', letterSpacing: '-0.4px' },
      h5: { fontSize: '20px', fontWeight: '700', lineHeight: '28.8px', letterSpacing: '-0.4px' },
      h6: { fontSize: '16px', fontWeight: '600', lineHeight: '24px', letterSpacing: '-0.16px' },
    },
  },
  layout: {
    gridColumns: 12,
    gutter: '20px',
    containerPadding: '0 40px',
    containerMaxWidth: '100%',
    headerHeight: '62px',
  },
  radius: {
    small: '6px',
    circle: '50%',
  },
  transitions: {
    fast: 'all 0.2s ease-in-out',
    normal: 'all 0.35s',
    slow: 'all 0.4s ease-in-out',
    top: 'top 0.3s',
  },
  breakpoints: {
    mobile: '767px',
    tablet: '1023px',
    desktop: '1599px',
  },
  zIndex: {
    dropdown: 100,
    sticky: 200,
    overlay: 500,
    modal: 1000,
    toast: 1100,
  },
} as const;

export type Theme = typeof theme;
