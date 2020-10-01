using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Persistence;

namespace Infrastructure.security
{
    public class IsHostRequirment : IAuthorizationRequirement
    {
    }

    public class IsHostRequirmentHandler : AuthorizationHandler<IsHostRequirment>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly DataContext _context;
        public IsHostRequirmentHandler(IHttpContextAccessor httpContextAccessor, DataContext context)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsHostRequirment requirement)
        {
            var mvcContext = context.Resource as AuthorizationFilterContext;
            if (mvcContext != null)
            {
                var currentUserName = _httpContextAccessor.HttpContext.User?.Claims?
                .SingleOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
                var authContext = (AuthorizationFilterContext)context.Resource;
                var activityId = Guid.Parse(authContext.RouteData.Values["id"].ToString());

                var activity = _context.Activities.FindAsync(activityId).Result;
                var host = _context.UserActivities.FirstOrDefault(x => x.IsHost);
                if (host?.AppUser?.UserName == currentUserName)
                    context.Succeed(requirement);
            }
            else
            {
                context.Fail();
            }

            return Task.CompletedTask;
        }
    }
}