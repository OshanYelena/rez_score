import DomainError from './domainError';


class ResumeError extends DomainError{
    constructor(error, message) {
        super(error)
        this.message = message
        this.data = {error, message}
    }

}


export default ResumeError;