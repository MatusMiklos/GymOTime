using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace GymOTime.Controllers;

public class Exercise {

    public Exercise(string name, string imgUrl){
        this.name = name;
        this.imgUrl = imgUrl;
    }

    private string name { get; set; }
    private string imgUrl { get; set; }
}

[ApiController]
[Route("[controller]")]
public class ExercisesController : ControllerBase
{
    private List<Exercise> exercises = new List<Exercise>{
        new Exercise("1", "test"),
        new Exercise("2", "test"),
        new Exercise("3", "test"),
    };

     private readonly ILogger<ExercisesController> _logger;

    public ExercisesController(ILogger<ExercisesController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public List<Exercise> Get()
    {
        return this.exercises;
    }
}