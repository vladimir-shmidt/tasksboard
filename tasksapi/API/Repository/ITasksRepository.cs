using System.Collections.Generic;
using TasksAPI.Models;

namespace TasksAPI.Repository
{
    public interface ITasksRepository
    {
        Task Create(Task task);
        Task GetTaskById(string id);
        IEnumerable<Task> GetTasks(int page, int size);
        Task Update(Task task);
        void Remove(string id);
        int Count();
    }
}