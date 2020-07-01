using System;
using System.Net;

namespace Application.Errors
{
    public class RestException : Exception
    {
        public HttpStatusCode _Code { get; }
        public object _Error { get; }
        public RestException(HttpStatusCode code, object error = null)
        {
            _Error = error;
            _Code = code;
        }
    }
}