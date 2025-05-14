import { AxiosError } from "axios";

export async function AllExceptionFilter(operation: any, onError: any, loading: (value: boolean) => void) {
  loading(true)
  let result;
  try {
    result = await operation()
    console.log(result)
    if (result.ok === false) {
      ExceptionHandler(result, onError)
    }
    loading(false)
    return Promise.resolve(result)
  } catch (error) {
    console.log(error)
    ExceptionHandler(error, onError)
    loading(false)
    return Promise.reject(error)
  } finally {
    loading(false)
  }
}

function ExceptionHandler(exception: any, onError: (message: string) => void) {
  if (exception instanceof AxiosError || exception.response) {
    console.log({ exception })
    const status = exception.response.status;
    const data = exception.response.data;

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
  } else if (exception.request) {
    onError('No response from server.');
  } else if (exception.error) {
    onError(exception.error)
  } else {
    onError(`Request setup error: ${exception.message}`);
  }
}
