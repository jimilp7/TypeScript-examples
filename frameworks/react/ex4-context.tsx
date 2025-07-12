import * as React from 'react';

interface Theme {
  primaryColor: string;
  backgroundColor: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const lightTheme: Theme = {
  primaryColor: '#000000',
  backgroundColor: '#ffffff'
};

const darkTheme: Theme = {
  primaryColor: '#ffffff',
  backgroundColor: '#000000'
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = (): void => {
    setIsDark(prev => !prev);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.primaryColor,
        border: `1px solid ${theme.primaryColor}`,
        padding: '10px 20px'
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemedButton;