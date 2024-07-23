
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formatedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

    return formatedDate;
}