using System;
using System.Threading.Tasks;
using forum.Database;
using forum.Models;
using Microsoft.AspNetCore.Mvc;

namespace forum.Controllers
{
    [Route("/api/register")]
    public class RegisterController : Controller
    {

        private readonly Db context;

        public RegisterController(Db context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] User user)
        {

            var iUser = new User
            {

                Name = user.Name,
                Email = user.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(user.Password),
                Created_at = DateTime.Now

            };

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            context.Users.Add(iUser);
            await context.SaveChangesAsync();

            return Ok(iUser);

        }

    }
}