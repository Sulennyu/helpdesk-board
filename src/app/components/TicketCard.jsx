'use client';

export default function TicketCard ({ticket, inQueue, onAdd }) {
    const {title, priority, status, assignee, updatedAt} = ticket;
    return (
        <div>
            <h3>{title}</h3>
            <p>Priority: {priority}</p>
            <p>Status: {status}</p>
            <p>Assignee: {assignee}</p>
            <p>Updated: {updatedAt}</p>
            <button onClick={() => onAdd(ticket.id)} disabled={inQueue}>{inQueue ? 'Already in Queue' : 'Add to my Queue'}</button>
        </div>

    )
}
