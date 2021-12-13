
class HealthCheckResponse {
    status: String = "Any Status"

    constructor(status: String = "UP") {
        this.status = status
    }

}

export default HealthCheckResponse