using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TasksAPI.Repository;

namespace TasksAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly ITasksRepository _repository;

        public TasksController(ITasksRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Models.Task>> Get([FromQuery]int page, [FromQuery]int size)
        {
            return Ok(_repository.GetTasks(page, size));
        }

        [HttpGet("{id}")]
        public ActionResult<Models.Task> Get([FromQuery]string id)
        {
            return _repository.GetTaskById(id);
        }

        [HttpPost]
        public void Post([FromBody]Models.Task task)
        {
            _repository.Create(task);
        }

        public void Put([FromBody]Models.Task task)
        {
            _repository.Update(task);
        }

        [HttpDelete("{id}")]
        public void Delete([FromQuery]string id)
        {
            _repository.Remove(id);
        }
    }
}
