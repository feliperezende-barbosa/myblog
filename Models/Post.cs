using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace forum.Models
{
    [Table("Posts")]
    public class Post
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Title { get; set; }

        [Required]
        [StringLength(255)]
        public string Body { get; set; }
        
        [DataType(DataType.DateTime)]
        public DateTime Created_at { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? Updated_at { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public Post()
        {
            Comments = new Collection<Comment>();
        }

    }
}