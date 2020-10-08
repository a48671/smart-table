export function capitalize(string: string): string {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.substr(1, string.length);
}
