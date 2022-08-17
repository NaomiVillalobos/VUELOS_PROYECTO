using System;
using System.Collections.Generic;

namespace FlightsAPI.Models
{
    public partial class Reservation
    {
        public string BookingId { get; set; } = null!;
        public int? Sequence { get; set; }
        public string? UserName { get; set; }
        public string? Ticket { get; set; }
        public string? Status { get; set; }
        public string? SeqId { get; set; }

        public virtual Sequence? SequenceNavigation { get; set; }
        public virtual Ticket? TicketNavigation { get; set; }
        public virtual User? UserNameNavigation { get; set; }
    }
}
