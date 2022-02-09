class HealthCheckResponse {
  status = 'Any Status'

  constructor(status = 'UP') {
    this.status = status
  }
}

export default HealthCheckResponse
