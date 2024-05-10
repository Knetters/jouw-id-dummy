export default function cx(
    ...classNames: (string | false | undefined | null)[]
): string {
    return classNames.filter(Boolean).join(' ');
}