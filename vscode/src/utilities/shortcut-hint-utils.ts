import * as os from 'os';

export function shortcutInlineCodeGeneration(minified: boolean = false): string{
    const platform = os.platform();
    let stringRepresentation;

    if (platform === 'win32' || platform === 'linux') {
        stringRepresentation = minified? 'ctrl+→' : '(ctrl) + (→)';
    } else  {
        stringRepresentation = minified? '⌘+→' : '(⌘) + (→)';
    }
    return stringRepresentation;
}

export function shortcutInlineCodeRefactor(minified: boolean = false): string{
    const platform = os.platform();
    let stringRepresentation;

    if (platform === 'win32' || platform === 'linux') {
        stringRepresentation = minified? 'ctrl+r' : '(ctrl) + (R)';
    } else  {
        stringRepresentation = minified? '⌘+r' : '(⌘) + (R)';
    }
    return stringRepresentation;
}
