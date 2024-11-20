import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: T = await axios.get(url);
    return response;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}