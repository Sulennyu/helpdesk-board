'use client';

import {useState, useEffect} from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

export default function Board() {
const [tickets, setTickets] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [filters, setFilters] = useState({status:'All',priority:'All'});
const [search, setSearch] = useState('');
const [queue, setQueue] = useState({});

// Fetch Tickets 
useEffect (() => {
    async function load() {
    try {
    const res = await fetch ('/api/tickets');
    const data = await res.json();
    setTickets(data);
    setLoading(false);
    }catch {
        setError(true);
    }
  }
load();
}, []);
useEffect(() => {
    if (!tickets.length) return;
    let i=0;
    const s = ['Open','In Progress','on Hold','Resolved'];
    const p = ['Low','Medium','High','Critical'];
    const id = setInterval (() => {
        setTickets(prev => {
            const t = {...prev[i]};
            t.status = i < s.length ? s[i] : s[0];
            t.priority = i < p.length ? p[i] :  p[0];
            i = i + 1 < prev.length ? i +1: 0;
            return prev.map(e => e.id === t.id ? t : e);
        });
    }, 7000);
    return () => clearInterval(id);
}, [tickets.length])

const handleFilter = (k) => (v) => setFilters (f => ({...f,[k]: v }));

const visibleTickets = tickets.filter(t =>
(filters.status === 'All' || t.status === filters.status) &&
(filters.priority === 'All' || t.priority === filters.priority) 
);

const addQueue = id => setQueue(prev => ({...prev, [id]: true}));
const removeQueue = id => setQueue(prev => (({[id]:removed, ...rest})=> rest)(prev));
const clearQueue = () => setQueue({});

return ( 
    <div className="space-y-4">
        <div className="flex gap-4">
        <StatusFilter value={filters.status} onChange={handleFilter('status')}/>
        <PriorityFilter value={filters.priority} onChange={handleFilter('priority')}/>
        <SearchBox value={search} onChange={setSearch}/>
        </div>
        <StatusMessage loading={loading} error={error} isEmpty={!loading && !visibleTickets.length} />
        <TicketList tickets={visibleTickets} queue={queue} onAddToQueue= {addQueue}/>
        <MyQueueSummary queue={queue} tickets={tickets.filter(t=> queue[t.id])} onRemove={removeQueue} onClear={clearQueue}/>

    </div>
);
}

