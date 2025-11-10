'use client';

export default function StatusMessage ({loading, error, isEmpty}) {
    if (loading) {
        return (
            <div>
            Loading tickets...
            </div>
        );
    }
    if (error) {
        return (
            <div>
                Unable to load tickets.
            </div>
        );
    }
    if (isEmpty) {
        return (
            <div>
                No tickets match your filters. 
            </div>
        );
    }
    return null; 
}
