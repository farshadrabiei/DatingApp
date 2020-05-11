using System;
using System.Linq;
using AutoMapper;
using DatingApp.API.Dto;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
            .ForMember(des => des.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
            .ForMember(des => des.Age, opt => opt.MapFrom(src => src.DateOfBirth.CaluclateAge()));

            CreateMap<User, UserForDetailedDto>()
            .ForMember(des => des.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
              .ForMember(des => des.Age, opt => opt.MapFrom(src => src.DateOfBirth.CaluclateAge()));

            CreateMap<Photo, PhotoForDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();

            CreateMap<UserForRegister, User>();
        }

    }
}