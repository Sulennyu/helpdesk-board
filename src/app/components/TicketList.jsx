'use client';
import TicketCard from "./TicketCard";

export default function TicketList ({tickets, queue, onAddToQueue}) {
    return (
        <div>
            {tickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} inQueue={!!queue[ticket.id]} onAdd={onAddToQueue}/>
            ))}
        </div>

    )
}