import DomainError from './domainError.js';

class JobPostError extends DomainError {
  constructor(error) {
    super(error);
    this.error = error;
  }
}


export default JobPostError;




