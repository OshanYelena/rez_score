import DomainError from "./domainError";

class PointsError extends DomainError {
  constructor(error) {
    super(error);
  }
}

export default PointsError;