import colours from './colours';

export default function setTheme(
  primary = colours.primary,
  secondary = colours.secondary,
  tertiary = colours.tertiary,
  alert = colours.alert,
  accent= colours.accent,
  baseText = colours.baseText,
  inverseText = colours.inverseText
) {
    return {
        heading: {
        background: secondary,
        title: secondary
        },
        body: {
            background: '',
            text: '',
        }
    }
}
