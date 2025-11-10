'use client';

export default function MyQueueSummary({tickets, onRemove, onClear}) {
    return (
    <div className="border p-4 rounded shadow bg-gray-50 mt-4">
            <h2> Queued Tickets ({tickets.length})</h2>
            <p className= "text-gray-500">{tickets.length === 0 ? 'No tickets in your queue':''} </p>
            <ul className="mb-2">
                {tickets.map (t => (
                    <li key={t.id}>{t.title}{''} <button onClick={() => onRemove(t.id)}>Remove</button></li>
                ))}
            </ul>
            <button onClick={onClear}>Clear Queue</button>
        </div>
    );
}