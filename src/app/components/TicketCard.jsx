'use client';

export default function TicketCard ({ticket, inQueue, onAdd }) {
    const {title, priority, status, assignee, updatedAt} = ticket;
    return (
        <div className= "border p-4 rounded shadow mb-2 flex justify-between items-center">
            <h3>{title}</h3>
            <p>Priority: {priority}</p>
            <p>Status: {status}</p>
            <p>Assignee: {assignee}</p>
            <p>Updated: {new Date(updatedAt).toLocaleString()}</p>
            <button onClick={() => onAdd(ticket.id)} disabled={inQueue}>{inQueue ? 'Already in Queue' : 'Add to my Queue'}</button>
        </div>

    )
}
