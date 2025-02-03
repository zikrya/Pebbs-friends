import { keyframes, css } from "styled-components"

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

export const theme = {
  colors: {
    lilac: "rgba(237, 235, 254, 1)",
    lilacLight: "rgba(246, 245, 255, 0.8)",
    lilacDark: "rgba(124, 122, 235, 1)",
    background: "#FAFBFF",
    surface: "#FFFFFF",
    text: "#1A1825",
    textSecondary: "#6B6B7B",
    border: "rgba(124, 122, 235, 0.1)",
    accent: "#7C7AEB",
  },
  sizes: {
    sm: "400px",
    md: "600px",
    lg: "800px",
    xl: "1000px",
    full: "100%",
  },
  shadows: {
    sm: "0 2px 6px rgba(124, 122, 235, 0.05)",
    md: "0 4px 12px rgba(124, 122, 235, 0.08)",
    lg: "0 8px 20px rgba(124, 122, 235, 0.1)",
  },
  gradients: {
    lilac: "linear-gradient(135deg, rgba(237, 235, 254, 0.4) 0%, rgba(124, 122, 235, 0.2) 100%)",
  },
  transitions: {
    default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    fast: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
    hover: "all 0.2s ease-in-out",
  },
  borderRadius: {
    sm: "6px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
  typography: {
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSizes: {
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
      xxl: "32px",
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  animations: {
    fadeIn: css`${fadeIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
    slideUp: css`${slideUp} 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,
  },
}
