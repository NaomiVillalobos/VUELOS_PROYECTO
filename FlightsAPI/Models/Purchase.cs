using System;
using System.Collections.Generic;

namespace FlightsAPI.Models
{
    public partial class Purchase
    {
        public string Code { get; set; } = null!;
        public int? Sequence { get; set; }
        public string? Card { get; set; }
        public string? Ticket { get; set; }
        public byte[]? Date { get; set; }
        public string? SeqId { get; set; }

        public virtual Card? CardNavigation { get; set; }
        public virtual Sequence? SequenceNavigation { get; set; }
        public virtual Ticket? TicketNavigation { get; set; }
    }
}
