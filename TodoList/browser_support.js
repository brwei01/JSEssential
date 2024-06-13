/*
 Browser support is crucial when developing JavaScript applications
 to ensure compatibility across different browsers.
 
 Heres an example illustrating how to detect browser support for a specific 
 feature, in this case, the localStorage API
 */

 function isLocalStorageSupported() {
    try {
        const testKey = '__test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
 }

 if (isLocalStorageSupported()) {
    console.log('local storage is supported in this browser!')
 } else {
    console.log('Sorry, localStorage is not supported in this browser!')
 }