import { useState, useEffect } from "react";
function getValue(key, settings, initialValue) {
    switch (settings.type) {
        case 'local':
            if (localStorage[key]) {
                return JSON.parse(localStorage[key]);
            }
            break;
        case 'session':
            if (sessionStorage[key]) {
                return JSON.parse(sessionStorage[key]);
            }
            break;
    }
    return initialValue;
}
export default function useStorage(key, initialValue, settings = { type: 'local' }) {
    const [value, setValue] = useState(() => getValue(key, settings, initialValue));
    useEffect(() => {
        switch (settings.type) {
            case 'local':
                localStorage[key] = JSON.stringify(value);
                break;
            case 'session':
                sessionStorage[key] = JSON.stringify(value);
                break;
        }
    }, [value]);
    return [value, setValue];
}