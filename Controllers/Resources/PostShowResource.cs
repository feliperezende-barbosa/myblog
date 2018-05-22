using System;
using forum.Models;

namespace forum.Controllers.Resources
{
    public class PostShowResource
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public DateTime Created_at { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }
    }
}