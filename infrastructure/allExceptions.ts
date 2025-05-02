import { AxiosError } from "axios";

export async function AllExceptionFilter(operation: any, onSuccess: any, onError: any, loading: any) {
  loading(true)
  try {
    const result = await operation()
    onSuccess(result)
    loading(false)
    return Promise.resolve(result)
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;

        switch (status) {
          case 400:
            onError(`Bad Request: ${data}`);
            break;
          case 401:
            onError('Unauthorized. Redirecting to login...');
            break;
          case 403:
            onError(`Forbidden: ${data}`);
            break;
          case 404:
            onError(`Not Found: ${data}`);
            break;
          case 500:
            onError(`Server Error: ${data}`);
            break;
          default:
            onError(`Unhandled error [${status}]: ${data}`);
        }
      } else if (error.request) {
        onError('No response from server.');
      } else {
        onError(`Request setup error: ${error.message}`);
      }
    }
    loading(false)
    return Promise.reject(error)
  } finally {
    loading(false)
  }
}