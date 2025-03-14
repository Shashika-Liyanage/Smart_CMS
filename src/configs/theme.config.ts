import { ThemeConfig } from 'antd';
import { Theme } from 'antd/es/config-provider/context';

// Define brand colors
export const brandColors = {
  primary: '#CA3C75',
  secondary: '#6A1B9A',
  success: '#1FAA59',
  warning: '#FFC107',
  error: '#E53935',
  info: '#29B6F6'
};

export interface CustomToken extends Theme {
  borderRadius: number;
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  fontFamily: {
    primary: string;
    secondary: string;
  };
}

// Light Theme Config
export const lightTheme: ThemeConfig = {
  token: {
    //Primary Color
    colorPrimary: brandColors.primary, // Main branding color (Pink)

    // Status Colors
    colorSuccess: brandColors.success, // Success Green
    colorWarning: brandColors.warning, // Warning Yellow
    colorError: brandColors.error, // Danger Red
    colorInfo: brandColors.info, // Info Blue

    //Text Colors
    colorTextBase: '#212121', // Default text color
    colorTextHeading: '#1A1A1A', // Heading text
    colorTextSecondary: '#616161', // Secondary text (muted)

    //Background Colors
    colorBgBase: '#F5F5F5', // Page background
    colorBgContainer: '#FFFFFF', // Containers (Cards, Inputs, Modals)
    colorBgElevated: '#FFFFFF', // Popups, Dropdowns
    colorBorder: '#DDDDDD', // Border color

    //Typography
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 14,

    //Border radius
    borderRadius: 7,
  },
  components: {
    Button: {
      borderRadius: 7,
      controlHeight: 36,
      colorText: '#FFFFFF',
      colorPrimary: brandColors.primary,
      colorPrimaryHover: '#B82C66',
      // Use for secondary buttons within component specific overrides
      // This is allowed in component configurations
      colorBgTextHover: brandColors.secondary,
    },
    Card: {
      borderRadius: 8,
      colorBgContainer: '#FFFFFF',
      colorBorder: '#E0E0E0',
    },
    Input: {
      colorText: '#212121',
      colorBgContainer: '#FFFFFF',
      colorBorder: '#CCCCCC',
      colorTextPlaceholder: '#888888',
    },
    Table: {
      colorBgContainer: '#FFFFFF',
      colorBorder: '#E0E0E0',
    },
  },
};

// Dark Theme Config
export const darkTheme: ThemeConfig = {
  token: {
    //Primary Color
    colorPrimary: brandColors.primary, // Keep primary color consistent

    //Status Colors
    colorSuccess: brandColors.success, // Success Green
    colorWarning: brandColors.warning, // Warning Yellow
    colorError: brandColors.error, // Danger Red
    colorInfo: brandColors.info, // Info Blue

    //Text Colors
    colorTextBase: '#FFFFFF', // Default white text
    colorTextHeading: '#FAFAFA', // Heading text
    colorTextSecondary: '#B0B0B0', // Muted text

    //Background Colors
    colorBgBase: '#1E1E1E', // Page background (dark)
    colorBgContainer: '#2A2A2A', // Containers (Cards, Inputs, Modals)
    colorBgElevated: '#2A2A2A', // Popups, Dropdowns
    colorBorder: '#444444', // Darker border color

    //Typography
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 14,

    //Border radius
    borderRadius: 4,
  },
  components: {
    Button: {
      borderRadius: 4,
      controlHeight: 36,
      colorText: '#FFFFFF',
      colorPrimary: brandColors.primary,
      colorPrimaryHover: '#B82C66',
      colorBgTextHover: brandColors.secondary,
    },
    Card: {
      borderRadius: 8,
      colorBgContainer: '#252525',
      colorBorder: '#333333',
    },
    Input: {
      colorText: '#FFFFFF',
      colorBgContainer: '#2A2A2A',
      colorBorder: '#555555',
      colorTextPlaceholder: '#999999',
    },
    Table: {
      colorBgContainer: '#2A2A2A',
      colorBorder: '#444444',
    },
  },
};

//Global Font Sizes
export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
};

// Global Font Families
export const fontFamilies = {
  primary: "'Roboto', sans-serif",
  secondary: "'Open Sans', sans-serif",
};

export const getSecondaryColor = (isDarkMode: boolean = false): string => {
  return brandColors.secondary;
};