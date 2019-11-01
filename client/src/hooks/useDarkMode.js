import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {
    const [storeDarkMode, setStoreDarkMode] = useLocalStorage('darkMode', 'darkMode');
    
    const body = document.querySelector('body');
    if (storeDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    return [storeDarkMode, setStoreDarkMode];
}