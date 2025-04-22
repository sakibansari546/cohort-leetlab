class ApiResponse {
  constructor(statusCode, success = true, message = "Success", data = {}) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = success;
  }
}

export default ApiResponse;
