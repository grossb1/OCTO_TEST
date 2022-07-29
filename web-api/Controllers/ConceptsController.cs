using Microsoft.AspNetCore.Mvc;
using web_api.Models.DTO;

namespace web_api.Controllers;

[ApiController]
[Route("[controller]")]
public class ConceptsController : ControllerBase
{
    private static readonly Models.DTO.Set[] Concepts = new[]
    {
        new Set
        {
            GUID = 2001,
            Name = "Concept7",
            SetType = "Concept",
            Organization = "PRC",
            Description = "CLC",
            Status = "Working",
            Domain = "Tx_Inpat",
            Favorite = true,
        },
        new Set
        {
            GUID = 2002,
            Name = "Concept2",
            SetType = "Concept",
            Organization = "SMITREC",
            Description = "Codes for depression per elix hauser",
            Status = "Development",
            Domain = "Diagnosis",
            Favorite = null,
        },
        new Set
          {
            GUID = 2003,
            Name = "Concept9",
            SetType = "Concept",
            Organization = "NEPEC",
            Description = "Codes for depression per elix hauser",
            Status = "Validated",
            Domain = "Medication",
            Favorite = null,
        },
        new Set
        {
            GUID = 2004,
            Name = "Concept4",
            SetType = "Concept",
            Organization = "PERC",
            Description = "Possible something from the Ira files",
            Status = "Validated",
            Domain = "Tx_Outpat",
            Favorite = null,
        },
        new Set
        {
            GUID = 2005,
            Name = "Concept16",
            SetType = "Concept",
            Organization = "PERC",
            Description = "Possible something from the Ira files",
            Status = "Validated",
            Domain = "Tx_Outpat",
            Favorite = null,
        },
    };

    private readonly ILogger<ConceptsController> _logger;

    public ConceptsController(ILogger<ConceptsController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetConcepts")]
    public IActionResult Get()
    {
        return Ok(Concepts);
    }
}