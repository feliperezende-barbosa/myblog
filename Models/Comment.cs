using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace forum.Models
{
    [Table("Comments")]
    public class Comment
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Content { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime Created_at { get; set; }

        public Post Post { get; set; }

        public int PostId { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }
    }
    
}