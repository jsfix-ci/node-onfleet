module.exports = {
  apiKey: 'a98b7123a973e8c903612e63c8c31a64',
  encodedApiKey: 'YTk4YjcxMjNhOTczZThjOTAzNjEyZTYzYzhjMzFhNjQ=',
  baseUrl: 'https://onfleet.com/api/v2/admins',
  url: 'https://onfleet.com/api/v2/admins/:adminId',
  id: '7p5Xl5HD1yG~xFqtIselXJjT',
  phone: '234564839',
  pathById: 'https://onfleet.com/api/v2/admins/7p5Xl5HD1yG~xFqtIselXJjT',
  pathWithEndpoint: 'https://onfleet.com/api/v2/admins/phone/234564839',
  parameters: {
    phone: '4055157789',
    state: '0',
  },
  pathWithQuery: 'https://onfleet.com/api/v2/admins?phone=4055157789&state=0',
  auth: {
    message: "Hello organization 'BxvqsKQBEeKGMeAsN09ScrVt' hitting Onfleet from 104.248.209.194",
    status: 200,
  },
  list: [
    {
      id: '4d86V7CHSsHzjCbXeakj6gXp',
      organization: 'BxvqsKQBEeKGMeAsN09ScrVt',
      email: 'james@onfleet.com',
      type: 'super',
      name: 'Onfleet Admin',
      isActive: true,
      phone: '+18881881788',
    },
    {
      id: 'hLedWP10pCKvDu7RIe2TfX~Q',
      organization: 'BxvqsKQBEeKGMeAsN09ScrVt',
      email: 'wrapper@onfleet.com',
      type: 'standard',
      name: 'Onfleet wrapper',
      isActive: false,
      phone: '+18881881789',
    },
  ],
  get: {
    id: 'SxD9Ran6pOfnUDgfTecTsgXd',
    organization: 'BxvqsKQBEeKGMeAsN09ScrVt',
    shortId: '44a56188',
    trackingURL: 'https://onf.lt/44a56188',
    worker: 'Mdfs*NDZ1*lMU0abFXAT82lM',
    merchant: 'BxvqsKQBEeKGMeAsN09ScrVt',
    executor: 'BxvqsKQBEeKGMeAsN09ScrVt',
    pickupTask: false,
    notes: 'Onfleet API Wrappers!',
    completionDetails: {
      events: [
        {
          name: 'start',
          time: 1555093046456,
        },
      ],
      failureReason: 'NONE',
      success: true,
    },
    destination: {
      id: '9qcJpfoqLwDppaZO8wYPFfsT',
      timeCreated: 1552586211000,
      timeLastModified: 1552586211499,
      location: [
        -121.79274459999999,
        37.7020352,
      ],
      address: {
        apartment: '',
        state: 'California',
        postalCode: '94103',
        country: 'United States',
        city: 'San Francisco',
        street: 'Market St',
        number: '929',
      },
    },
  },
  getRecipients: {
    id: '9SY28MU8PYaPP9Iq10bcpBdL',
    organization: 'BxvqsKQBEeKGMeAsN09ScrVt',
    name: 'Onfleet Rocks',
    phone: '+18881787788',
    skipSMSNotifications: false,
  },
  createTeams: {
    id: 'FFqPs1KHayxorfA~~xIj0us4',
    name: 'Onfleet Team',
    workers: [
      '1LjhGUWdxFbvdsTAAXs0TFos',
      'F8WPCqGmQYWpCkQ2c8zJTCpW',
    ],
    managers: [
      'Mrq7aKqzPFKX22pmjdLx*ohM',
    ],
    hub: 'tKxSfU7psqDQEBVn5e2VQ~*O',
  },
  getWorkerEta: {
    workerId: '56BsmZRWAKgGGG9g0xDczl6u',
    vehicle: 'CAR',
    steps: [
      {
        location: [101.5929671, 3.1484824],
        travelTime: 1738,
        distance: 21333,
        serviceTime: 120,
        arrivalTime: 1621339297,
        completionTime: 1621341129,
      },
      {
        location: [101.627378, 3.1403995],
        travelTime: 645,
        distance: 6348,
        serviceTime: 120,
        arrivalTime: 1621341774,
        completionTime: 1621341894,
      },
    ],
  },
  forceComplete: {
    status: 200,
    completionDetails: {
      notes: 'Forced complete by Onfleet Wrapper',
    },
  },
  updateWorkers: {
    id: 'Mdfs*NDZ1*lMU0abFXAT82lM',
    organization: 'BxvqsKQBEeKGMeAsN09ScrVt',
    name: 'Stephen Curry',
    displayName: 'SC30',
    phone: '+18883033030',
    activeTask: null,
    tasks: [
      'ybB97MGXhGoAAKrUAlyywmBN',
    ],
    onDuty: false,
    accountStatus: 'ACCEPTED',
    teams: [
      'W*8bF5jY11Rk05E0bXBHiGg2',
    ],
    vehicle: {
      id: 'fMuHImeUFAk3uv1O*GaXX5Zl',
      type: 'CAR',
      description: null,
      licensePlate: null,
      color: null,
    },
    addresses: {
      routing: null,
    },
  },
  deleteTask: 200,
  getTeamUnassignedTasks: {
    tasks: [
      {
        id: '3VtEMGudjwjjM60j7deSI123',
        timeCreated: 1643317843000,
        timeLastModified: 1643413337768,
        organization: 'nYrkNP6jZMSKgBwG9qG7ci3J',
        shortId: 'c77ff123',
        trackingURL: 'https://onf.lt/c77ff123',
        container: {
          type: 'TEAM',
          team: 'K3FXFtJj2FtaO2~H60evRrDc',
        },
      },
    ],
  },
  getWorkerAssignedTasks: {
    tasks: [
      {
        id: '3VtEMGudjwjjM60j7deSI987',
        timeCreated: 1643317843000,
        timeLastModified: 1643319602671,
        organization: 'nYrkNP6jZMSKgBwG9qG7ci3J',
        shortId: 'c77ff987',
        trackingURL: 'https://onf.lt/c77ff987',
        worker: 'ZxcnkJi~79nonYaMTQ960Mg2',
      },
    ],
  },
};
