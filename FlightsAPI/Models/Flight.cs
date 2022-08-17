using System;
using System.Collections.Generic;

namespace FlightsAPI.Models
{
    public partial class Flight
    {
        public string Code { get; set; } = null!;
        public int? Sequence { get; set; }
        public string? Origin { get; set; }
        public string? To { get; set; }
        public string? Airline { get; set; }
        public byte[]? DateDep { get; set; }
        public DateTime? DateArrive { get; set; }
        public TimeSpan? TimeArrive { get; set; }
        public string? Status { get; set; }
        public string? SeqId { get; set; }

        public virtual Airline? AirlineNavigation { get; set; }
        public virtual Sequence? SequenceNavigation { get; set; }
    }
}
