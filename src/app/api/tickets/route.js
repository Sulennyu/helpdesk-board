export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing on mobile',
      description: 'Exchange account not syncing for ios Mail.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Patricia',
      updatedAt: '2025-10-28T09:05:00Z'
    },
    {
      id: 't-1003',
      title: 'Laptop battery drains quickly',
      description: 'Battery drops from 100% to 2% in 2 hours',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-07T15:04:00Z'
    },
    {
      id: 't-1004',
      title: 'Okta MFA prompts repeatedly',
      description: 'User recieves MFA prompt every time they open a new tab.',
      priority: 'Critical',
      status: 'On Hold',
      assignee: 'Bob',
      updatedAt: '2025-11-05T10:24:00Z'
    },
    {
      id: 't-1005',
      title: 'Printer not responsing on Floor 5',
      description: 'Queue stuck and jobs timing out.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Unassigned',
      updatedAt: '2025-10-28T17:32:00Z'
    },
    {
      id: 't-1006',
      title: 'Teams screen share fails',
      description: 'Sharing starts and immediately stops.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Natalia',
      updatedAt: '2025-10-31T12:24:00Z'
    },
    {
      id: 't-1007',
      title: 'Wi-Fi drops in Conference Room B',
      description: 'Signal flucuates during large meetings.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Mark',
      updatedAt: '2025-10-27T13:11:00Z'
    },
    {
      id: 't-1008',
      title: 'Locked out of Salesforce',
      description: 'User cannot complete MFA push.',
      priority: 'High',
      status: 'Open',
      assignee: 'Connor',
      updatedAt: '2025-11-08T07:05:00Z'
    },
    {
      id: 't-1009',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-02T08:04:00Z'
    },
    {
      id: 't-1010',
      title: 'Zoom audio echoes',
      description: 'Severe echo reported by multiple attendees.',
      priority: 'Medium',
      status: 'Resolved',
      assignee: 'Unassigned',
      updatedAt: '2025-11-06T11:08:00Z'
    },
    {
      id: 't-1011',
      title: 'Calendar invites not delivered',
      description: 'Invites arrive hours later.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-04T14:09:00Z'
    },
    {
      id: 't-1012',
      title: 'MacOs update failing',
      description: 'Installer quites at 60%.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Jordan',
      updatedAt: '2025-11-03T09:12:00Z'
    }
  ];
  return Response.json(tickets);
}
