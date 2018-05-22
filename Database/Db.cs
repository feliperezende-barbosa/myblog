using forum.Models;
using Microsoft.EntityFrameworkCore;

namespace forum.Database
{
    public class Db : DbContext
    {

        public DbSet<User> Users { get; set; }

        public DbSet<Post> Posts { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public Db(DbContextOptions<Db> options) : base(options) { }

    }
}