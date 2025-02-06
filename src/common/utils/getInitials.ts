/**
 * Get Initial for the name
 * @param name String for which Initials need to be generated for.
 * @returns maximum 2 character(s) string
 */
export default function getInitials(name: string) {
  try {
    const fullName: any = name?.split(' ');
    if (!fullName?.length) return '';
    if (fullName?.length === 1)
      return fullName?.shift()?.charAt(0)?.toUpperCase();
    if (fullName?.length > 1)
      return (
        fullName?.shift()?.charAt(0)?.toUpperCase() +
        fullName?.pop()?.charAt(0)?.toUpperCase()
      );
  } catch (err) {
    console.error(err);
    return '';
  }
}
