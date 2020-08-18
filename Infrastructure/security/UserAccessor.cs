using System.Linq;
using System.Security.Claims;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor _accessor;
        public UserAccessor(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }

        public string GetCurrentName()
        {
            var username = _accessor.HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
            return username;
        }
    }
}