import { useState, useEffect } from "react";

export const useConnStatus = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    function connEventListener(e) {
      setIsOnline(window.navigator.onLine);
    }

    window.addEventListener("online", connEventListener);
    window.addEventListener("offline", connEventListener);

    return () => {
      window.removeEventListener("online", connEventListener);
      window.removeEventListener("offline", connEventListener);
    };
  }, []);

  return isOnline;
};
