using System;

namespace forum.Controllers.Resources
{
    public class UserPostResource
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public int PostId { get; set; }

        public string PostTitle { get; set; }

        public string PostBody { get; set; }

        public DateTime PostCreated_at { get; set; }

        
    }
}