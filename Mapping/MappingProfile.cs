using System.Linq;
using AutoMapper;
using forum.Controllers.Resources;
using forum.Models;

namespace forum.Mapping
{
    public class MappingProfile : Profile
    {
        
        public MappingProfile()
        {
            CreateMap<User, UserResource>();
                //.ForMember(ud => ud.Posts, opt => opt.MapFrom(src => src.Posts));
            CreateMap<Post, PostResource>();
            CreateMap<Post, ListPostsResource>()
                .ForMember(pd => pd.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(pd => pd.Title, opt => opt.MapFrom(src => src.Title))
                .ForMember(pd => pd.Body, opt => opt.MapFrom(src => src.Body))
                .ForMember(pd => pd.Created_at, opt => opt.MapFrom(src => src.Created_at))
                .ForMember(pd => pd.UserId, opt => opt.MapFrom(src => src.UserId))
                .ForMember(pd => pd.UserName, opt => opt.MapFrom(src => src.User.Name));

            CreateMap<Comment, CommentViewResource>()
                .ForMember(cd => cd.UserName, opt => opt.MapFrom(src => src.User.Name));
        }

    }
}