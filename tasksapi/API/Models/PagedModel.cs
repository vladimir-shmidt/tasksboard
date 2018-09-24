using System.Collections.Generic;

namespace TasksAPI.Models
{
    public class PagedModel<T>
    {
        public IEnumerable<T> Data { get; set; }
        public int Page { get; set; }
        public int Size { get; set; }
        public int Total { get; set; }
    }
}
