import { useEffect, useState } from 'react';

export const useContentProtection = () => {
  const [isBlurry, setIsBlurry] = useState(false);

  useEffect(() => {
    // 1. Disable Right Click
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable Keyboard Shortcuts (Print, Save, Copy)
    const handleKeyDown = (e) => {
      if (
        e.key === 'PrintScreen' ||
        (e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's' || e.key === 'c')
      ) {
        setIsBlurry(true);
        setTimeout(() => setIsBlurry(false), 1000); // Flash blur
        navigator.clipboard.writeText(''); // Clear clipboard
        return false;
      }
    };

    // 3. AGGRESSIVE: Blur immediately if user switches tabs or clicks outside
    // This often stops screen recording software from capturing clean footage
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsBlurry(true);
      } else {
        setIsBlurry(false);
      }
    };

    // 4. Blur on Window Blur (e.g. Opening Snipping Tool)
    const handleWindowBlur = () => setIsBlurry(true);
    const handleWindowFocus = () => setIsBlurry(false);

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);

  return isBlurry;
};