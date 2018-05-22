using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace forum.Controllers.Resources
{
    public class ListPostsResource
    {
        
        public int Id { get; set; }

        public int UserId { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public DateTime Created_at { get; set; }

        public string UserName { get; set; }
    
    }
}