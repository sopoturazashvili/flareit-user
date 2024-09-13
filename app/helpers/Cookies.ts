import { decryptData, encryptData } from './encryptionHelper';

export function setCookie(name: string, value: string, days: number) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

export function deleteCookie(name: string) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}

export function getCookie(name: string): string | undefined {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0)
            return c.substring(nameEQ.length, c.length);
    }
    return undefined;
}

export function setLocalStorageEncrypted(key: string, value: string) {
    const encryptedValue = encryptData(value);
    localStorage.setItem(key, encryptedValue);
}

export function getLocalStorageDecrypted(key: string): string | null {
    const encryptedValue = localStorage.getItem(key);
    if (encryptedValue) {
        return decryptData(encryptedValue);
    }
    return null;
}

export function removeLocalStorage(key: string) {
    localStorage.removeItem(key);
}
