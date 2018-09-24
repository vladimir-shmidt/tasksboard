using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace TasksAPI.Repository
{
    public class TasksRepository : ITasksRepository
    {
        private readonly ConcurrentDictionary<string, Models.Task> _tasks;
        private long _counter;

        public TasksRepository()
        {
             _tasks = new ConcurrentDictionary<string, Models.Task>();
            _counter = 1;
        }

        public IEnumerable<Models.Task> GetTasks(int page, int size)
        {
            return _tasks.Values.Skip(size).Take(page);
        }

        public Models.Task GetTaskById(string id)
        {
            return _tasks.TryGetValue(id, out Models.Task task) ? task : null;
        }

        public Models.Task Create(Models.Task task)
        {
            task.Id = Interlocked.Increment(ref _counter).ToString();
            _tasks.TryAdd(task.Id, task);
            return task;
        }

        public Models.Task Update(Models.Task task)
        {
            while (_tasks.TryGetValue(task.Id, out Models.Task current))
            {
                if (_tasks.TryUpdate(task.Id, task, current))
                    return task;
            }
            throw new CouldNotUpdateException();
        }

        public void Remove(string id)
        {
            _tasks.Remove(id, out Models.Task task);
        }
    }

    public class CouldNotUpdateException : Exception
    {

    }
}
