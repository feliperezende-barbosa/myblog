using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace forum.Controllers.Resources
{
    public class UserResource
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public ICollection<PostResource> Posts { get; set; }

        public UserResource()
        {
            Posts = new Collection<PostResource>();
        }
    }
}