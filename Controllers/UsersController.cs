using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using forum.Controllers.Resources;
using forum.Database;
using forum.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace forum.Controllers
{
    [Route("/api/user")]
    public class UsersController : Controller
    {
        private readonly Db context;
        private readonly IMapper mapper;
        public UsersController(Db context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet("{email}")]
        public async Task<IActionResult> GetUser(string email)
        {
            var user = await context.Users.Include(p => p.Posts).SingleOrDefaultAsync(u => u.Email == email);

            if (user == null)
                return NotFound();

            var userResource = mapper.Map<User, UserResource>(user);

            return Ok(userResource);

        }
    }
}