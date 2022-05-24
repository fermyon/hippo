using System.ComponentModel.DataAnnotations;
using Hippo.Application.Apps.Queries;

namespace Hippo.Application.Channels.Queries;

public class ChannelSummaryDto
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; } = "";

    [Required]
    public string? Domain { get; set; } = "";

    [Required]
    public AppSummaryDto? AppSummary { get; set; }
}
