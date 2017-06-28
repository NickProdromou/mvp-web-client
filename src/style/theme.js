import colours from './colours';


export default function setTheme(
    {
        primary = colours.primary,
        secondary = colours.secondary,
        tertiary = colours.tertiary,
        alert = colours.alert,
        accent = colours.accent,
        baseText = colours.baseText,
        inverseText = colours.inverseText
    } = {}
    ) {
    return {
        heading: {
            title: secondary,
            background: secondary
        },
        MobileMenuWrapper: {
            background: secondary,
            text: inverseText,
            hoverUnderline: accent
        },
        menuToggle: {
          color: inverseText
        },
        NavigationLinks : {
            colour: inverseText,
            hoverUnderline: accent
        },
        callout: {
            heading: primary,
            bottomUnderline: accent,
            subHeading: baseText
        },
        programsList : {
            headingBackground: tertiary,
            headingText: inverseText
        },
        programCard: {
            title: primary,
            background: '#eee',
            border: secondary,
            text: baseText,
        },
        button: {
            text: inverseText,
            background: secondary
        },
        footer: {
            background: secondary
        },
        copyright: {
            background: baseText,
            color: '#eee'
        }
    }
}
