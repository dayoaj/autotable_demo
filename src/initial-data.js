const initialData = {
    staffs : {
      'staff-1': { id: 'staff-1', Name: 'Dayo', Department: 'Infrastructure/Staff', PhoneNo: '46456456'},
      'staff-2': { id: 'staff-2', Name: 'Bayo', Department: 'Software/Support', PhoneNo: '557456456'},
      'staff-3': { id: 'staff-3', Name: 'Ali', Department: 'Networking/Staff', PhoneNo: '245410546'},
      'staff-4': { id: 'staff-4', Name: 'Benjamin', Department: 'Networking/Staff', PhoneNo: '304556456'},
      'staff-5': { id: 'staff-5', Name: 'Ruth', Department: 'Networking/Support', PhoneNo: '6666456'},
      'staff-6': { id: 'staff-6', Name: 'Ayo', Department: 'Infrastructure/Staff', PhoneNo: '46455556'},
    },
    schedules: {
      'schedule-1': {
        id: 'schedule-1',
        title: 'Sunday, 14th October, 2018 (Day)',
        staffIds: ['staff-1', 'staff-2'],
      },
      'schedule-2': {
        id: 'schedule-2',
        title: 'Sunday, 14th October, 2018 (Night)',
        staffIds: ['staff-3', 'staff-4'],
      },
      'schedule-3': {
        id: 'schedule-3',
        title: 'Monday, 15th October, 2018 (Night)',
        staffIds: ['staff-5', 'staff-6'],
      },
    },
    // Facilitate reordering of the schedules
    scheduleOrder: ['schedule-1', 'schedule-2', 'schedule-3'],
  };
  
  export default initialData;
  