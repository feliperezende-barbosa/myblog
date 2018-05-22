using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using forum.Controllers.Resources;
using forum.Database;
using forum.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace forum.Controllers
{
    [Route("/api/comment")]
    public class CommentsController : Controller
    {
        private readonly Db context;
        private readonly IMapper mapper;
        public CommentsController(Db context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Comment comment)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            comment.Created_at = DateTime.Now;
            comment.UserId = 1;

            context.Comments.Add(comment);
            await context.SaveChangesAsync();

            return Ok(comment);

        }

        [HttpGet("{postid}")]
        public async Task<IEnumerable<CommentViewResource>> GetComments(int postid)
        {

            var post = await context.Posts.SingleAsync(p => p.Id == postid);

            var comments = await context.Entry(post).Collection(c => c.Comments).Query().Include(u => u.User).ToListAsync();

            return mapper.Map<List<Comment>, List<CommentViewResource>>(comments);


            //working...

            //var comments = await context.Comments.Where(p => p.PostId == postid).ToListAsync();

            //return mapper.Map<List<Comment>, List<CommentViewResource>>(comments);


        }
    }
}