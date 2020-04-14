using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dto
{
    public class UserForRegister
    {
        [Required]
        public string Username { get; set; }
         [Required]
         [StringLength(8,MinimumLength =4,ErrorMessage ="پسورد بین 4 تا 8 حرف می تواند باشد")]
        public string Password { get; set; }
        
    }
}