// Return the URL of the current environment
export function getUrl() {
    return import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://mygab.vercel.app";
  }
  