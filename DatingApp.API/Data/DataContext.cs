 using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace DatingApp.API.Data
{
    public class DataContext :
     IdentityDbContext
       <User, Role, int,
       IdentityUserClaim<int>,
       UserRole,
       IdentityUserLogin<int>,
       IdentityRoleClaim<int>,
       IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserRole>(UserRole =>
            {

                UserRole.HasKey(ur => new { ur.RoleId, ur.UserId });
                UserRole.HasOne(ur => ur.Role)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();
                UserRole.HasOne(ur => ur.User)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();
            });

        }
        public DbSet<Value> Values { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}