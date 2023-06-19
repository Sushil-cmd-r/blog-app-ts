import { useCallback } from "react";

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    const body = document.body;
    body.style.overflowY = 'hidden'
  }, [])

  const unlockScroll = useCallback(() => {
    const body = document.body;
    body.style.overflowY = 'auto';
  }, []);

  return {
    lockScroll,
    unlockScroll
  };
}