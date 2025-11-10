'use client';

export default function SearchBox ({value, onChange}) {
    return (
        <input type="text" placeholder="Search title or description" value={value} onChange= {e => onChange(e.target.value)} />
    );
}
