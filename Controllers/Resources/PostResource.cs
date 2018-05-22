using System;
using forum.Models;

namespace forum.Controllers.Resources
{
    public class PostResource
    {
        
        public int Id { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

    }
}