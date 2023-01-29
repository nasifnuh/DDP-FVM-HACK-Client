import { useState } from "react";
import axios from 'axios';

export const BASE_URL = "http://127.0.0.1:5173";

export function sendHttpRequest(
  method,
  url,
  params = null,
  data = null,
  contentType = "application/json",
  headers = null
) {
  url = params ? url + "?" + constructUrlWithParams(params) : url;

  const request = axios({
    method: method,
    headers: headers ? headers : { "Content-Type": contentType },
    url: url,
    data: data,
  });
  return request;
}

function constructUrlWithParams(params) {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");
  return query;
}

export function useUserData() {
  const getData = () => {
    const rawData = localStorage.getItem("user-data");
    const userData = rawData !== null ? JSON.parse(rawData) : null;
    return userData;
  };

  const [userData, setUserData] = useState(getData());

  const saveData = (userData) => {
    localStorage.setItem("user-data", JSON.stringify(userData));
    setUserData(userData);
  };

  return {
    setUserData: saveData,
    userData,
  };
}

export function navigate(path) {
  window.location.pathname = path;
};