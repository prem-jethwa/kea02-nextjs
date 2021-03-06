import { useEffect } from 'react';

/**
 * Hook that call callback method when clicks outside of the passed ref
 */
export function useOutsideClick(ref: any, callback: Function) {
  useEffect(() => {
    /**
     * if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
