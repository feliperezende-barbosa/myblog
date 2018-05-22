using System;

namespace forum.Controllers.Resources
{
    public class CommentViewResource
    {
        public int Id { get; set; }

        public string Content { get; set; }

        public DateTime Created_at { get; set; }

        public int PostId { get; set; }

        public int UserId { get; set; }

        public string UserName { get; set; }

    }
}