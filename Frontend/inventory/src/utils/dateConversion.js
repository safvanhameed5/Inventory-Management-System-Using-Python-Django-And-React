function convertToDatetimeLocalFormat(dateString) {
    // Create a new Date object from the original string
    const date = new Date(dateString);
  
    // Format each part of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // Combine them into the required format
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  export default convertToDatetimeLocalFormat
