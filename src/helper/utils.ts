//Utility function to replace - with space and capitalize
export function capitalizedWord(str: string) {
  return str.replace(/-|\b\w/g, (match) => {
    if (match === '-') {
      return ' ';
    }
    return match.toUpperCase();
  });
}

// Simple ID generator to replace heavy generateId library
let idCounter = 0;
export const generateId = () => `id_${++idCounter}_${Date.now()}`;
