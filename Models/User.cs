using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace forum.Models
{
    [Table("Users")]
    public class User
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [StringLength(100)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [StringLength(150)]
        public string Email { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime Created_at { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? Updated_at { get; set; }

        public ICollection<Post> Posts { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public User()
        {
            Posts = new Collection<Post>();

            Comments = new Collection<Comment>();
        }
    }
}