'use client';

export default function StatusFilter ({value, onChange}) {
    const stats = ['All','Open','In Progress','On Hold','Resolved' ];
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            {stats.map(s => (<option key={s} value={s}>{s}</option>))}
        </select>
    );
}
