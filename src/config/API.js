export const API = window.location.href.includes("http://localhost:3000/")
  ? "http://localhost:5000/sasi-appr/us-central1/app"
  : "https://us-central1-sasi-appr.cloudfunctions.net/app";
