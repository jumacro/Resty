/** Helpers */

import ResponseHelper from '../helpers/ResponseObject';
import ErrorHelper from '../helpers/ErrorHandler';
import statusCodes from '../../constants/codes';

const debug = require('debug')('promised-rest:Pipes/Index');



class Index {

  constructor(serviceType) {
    this.ResponseHelper = ResponseHelper;
    this.ErrorHelper = ErrorHelper;
    this.serviceType = serviceType;
    this.successCodes = statusCodes.http.success;
    this.errorCodes = statusCodes.http.error;
  }
  
  _createResponse(responseHandler, resultObj) {
    return responseHandler.status(resultObj.codeObj.code).json(
      new this.ResponseHelper(
        resultObj.codeObj.code,
        resultObj.codeObj.message,
        resultObj.data
      )
    );
  }

  _throwError(next, errObj) {
    const err = new this.ErrorHelper(errObj);
    return next(err);
  }

}

export default Index;
