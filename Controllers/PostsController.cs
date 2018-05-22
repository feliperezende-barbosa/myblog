using System.Threading.Tasks;
using forum.Database;
using forum.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using AutoMapper;
using forum.Controllers.Resources;

namespace forum.Controllers
{
    
    [Route("/api/post")]
    public class PostsController : Controller
    {
        private readonly Db context;
        private readonly IMapper mapper;

        public PostsController(Db context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<ListPostsResource>> GetPosts()
        {

            var posts = await context.Posts.Include(u => u.User).ToListAsync();

            return mapper.Map<List<Post>, List<ListPostsResource>>(posts);

        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Post post)
        {

            if (!ModelState.IsValid)
                BadRequest(ModelState);

            post.Created_at = DateTime.Now;
            post.UserId = 1;

            context.Posts.Add(post);
            await context.SaveChangesAsync();

            return Ok(post);

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id){

            var post = await context.Posts.Include(u => u.User).SingleOrDefaultAsync(p => p.Id == id);

            if(post == null)
                return NotFound();

            var postResource = mapper.Map<Post, ListPostsResource>(post);

            return Ok(postResource);

            //return Ok(post);
        }

    }
}