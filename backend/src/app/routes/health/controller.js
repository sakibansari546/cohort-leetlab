class HealthController {
  healthCheckHandler(req, res) {
    return res.status(200).json({
      message: "Healthy",
    });
  }
}

export default HealthController;
