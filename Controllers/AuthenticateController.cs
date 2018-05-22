using System.Threading.Tasks;
using AutoMapper;
using forum.Controllers.Resources;
using forum.Database;
using forum.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace forum.Controllers
{
    [Route("/api/auth")]
    public class AuthenticateController : Controller
    {
        private readonly Db context;
        private readonly IMapper mapper;
        public AuthenticateController(Db context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpPost]
        public async Task<IActionResult> Auth([FromBody] User user)
        {
            //var result = await context.Users.Include(p => p.Posts).SingleOrDefaultAsync(u => u.Email == user.Email);
            var result = await context.Users.SingleOrDefaultAsync(u => u.Email == user.Email);

            if (result == null)
                return NotFound();

            if (!BCrypt.Net.BCrypt.Verify(user.Password, result.Password))
                return NotFound();

            //var userResource = mapper.Map<User, UserResource>(result);

            return Ok(result);
        }
    }
}