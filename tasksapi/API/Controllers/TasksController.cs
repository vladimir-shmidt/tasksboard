using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TasksAPI.Models;
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
        public ActionResult<IEnumerable<Task>> Get([FromQuery]int page, [FromQuery]int size)
        {
            var paged = new PagedModel<Task>();
            paged.Data = _repository.GetTasks(page, size);
            paged.Page = page;
            paged.Size = size;
            paged.Total = _repository.Count();
            return Ok(paged);
        }

        [HttpGet("{id}")]
        public ActionResult<Task> Get([FromQuery]string id)
        {
            return _repository.GetTaskById(id);
        }

        [HttpPost]
        public ActionResult<Task> Post([FromBody]Task task)
        {
            return _repository.Create(task);
        }

        public void Put([FromBody]Task task)
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
