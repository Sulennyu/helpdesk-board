'use client';

import {useState, useEffect} from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import { priorityOrder,statusOrder } from '../lib/severity';

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
            const list = [...prev];
            const t = {...prev[i]};
            t.status = s[i] || s[0];
            t.priority = p[i] || p[0];
            i = i + 1 < prev.length ? i +1: 0;
            return prev.map(e => e.id === t.id ? t : e);
     });
    }, 7000);
    return () => clearInterval(id);
}, [tickets.length])
}