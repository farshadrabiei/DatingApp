using System.ComponentModel.DataAnnotations;
using System;
namespace DatingApp.API.Dto
{
    public class UserForRegister
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "پسورد بین 4 تا 8 حرف می تواند باشد")]
        public string Password { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string KnownAs { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public UserForRegister()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }

    }
}