export default function mediaQuery(breakpoint , styleString) {

    if (typeof styleString && typeof breakpoint !== 'string' ) {
        return;
    }

    switch (breakpoint) {
        case 'medium':
            return `@media (min-width: 768px) {
                ${styleString}
            }`;

        case 'large':
            return `@media (min-width: 1100px) {
                ${styleString}
            }`;

        default:
            return null;
    }
}
