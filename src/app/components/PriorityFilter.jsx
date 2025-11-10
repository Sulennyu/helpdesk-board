'use client';

export default function PriorityFilter ({value, onChange}) {
    const priorities = ["All","Low","Medium","High","Critical"];
    return (
        <select value={value} onChange= {e => onChange(e.target.value)}>
            {priorities.map(p => (<option key={p} value={p}>{p}</option>))}
        </select>
    );

}
