/**
 * @description Inject a script to the page.
 * @param srr // The script src.
 * @param callback  
 */
export const injectScript = (src: string, callback?: () => void) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        callback?.();
    };
    document.body.appendChild(script);
}