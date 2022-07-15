using System.ComponentModel.DataAnnotations;
namespace web_api.Models.DTO;

public class AllSets
{
    public int? GUID { get; set; }
    public string? SetTerm { get; set; }
    public string? SetType { get; set; }
    public string? Creator { get; set; }
    public string? Reviewer { get; set; }
    public string? SME { get; set; }
    public string? Organization { get; set; }
    public string? Description { get; set; }
    public string? Status { get; set; }
    public string? Domain { get; set; }
    public bool? Favorite  { get; set; }
}