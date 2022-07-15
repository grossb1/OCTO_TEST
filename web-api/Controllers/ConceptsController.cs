using Microsoft.AspNetCore.Mvc;
using web_api.Models.DTO;

namespace web_api.Controllers;

[ApiController]
[Route("[controller]")]
public class ConceptsController : ControllerBase
{
    private static readonly Models.DTO.AllSets[] Concepts = new[]
    {
        new AllSets 
        {
            GUID = 2001,
            SetTerm = "Concept7",
            SetType = "Value Set",
            Creator = "Amy",
            Reviewer = "Cora",
            SME = "John",
            Organization = "PRC",
            Description = "CLC",
            Status = "Working",
            Domain = "Tx_Inpat",
            Favorite = true,
        },
        new AllSets
        {
            GUID = 2002,
            SetTerm = "Concept2",
            SetType = "Value Set",
            Creator = "Amy",
            Reviewer = "Jodie",
            SME = "John",
            Organization = "SMITREC",
            Description = "Codes for depression per elix hauser",
            Status = "Development",
            Domain = "Diagnosis",
            Favorite = null,
        },
        new AllSets
          {
            GUID = 2003,
            SetTerm = "Concept9",
            SetType = "Concept",
            Creator = "Susana",
            Reviewer = "Rebecca",
            SME = "John",
            Organization = "NEPEC",
            Description = "Codes for depression per elix hauser",
            Status = "Validated",
            Domain = "Medication",
            Favorite = null,
        },
        new AllSets
        {
            GUID = 2004,
            SetTerm = "Concept4",
            SetType = "Value Set",
            Creator = "David",
            Reviewer = "Shalini",
            SME = "Cora",
            Organization = "PERC",
            Description = "Possible something from the Ira files",
            Status = "Validated",
            Domain = "Tx_Outpat",
            Favorite = null,
        },
        new AllSets
        {
            GUID = 2005,
            SetTerm = "Concept16",
            SetType = "Value Set",
            Creator = "Shalini",
            Reviewer = "David",
            SME = "Rebecca",
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