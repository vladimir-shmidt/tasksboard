using System;
using System.Collections.Generic;

namespace TasksAPI.Models
{
    public class Task : IEqualityComparer<Task>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public Status Status { get; set; }
        public DateTime Timespan { get; set; }
        public DateTime Created { get; set; }

        public bool Equals(Task x, Task y)
        {
            return x.Id == y.Id && x.Name == y.Name && x.Description == y.Description && x.Priority == y.Priority && x.Status == y.Status && x.Timespan == y.Timespan && x.Created == y.Created;
        }

        public int GetHashCode(Task obj)
        {
            return 347 ^ obj.Id.GetHashCode();
        }
    }
}
