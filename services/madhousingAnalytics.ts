"use server";

import {BetaAnalyticsDataClient} from '@google-analytics/data';

const propertyId = '312798667';

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  },
});

export async function getTotalUsers() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '2022-04-01',
        endDate: 'today',
      },
    ],
    metrics: [
      {
        name: 'totalUsers',
      },
    ],
  });

  if (!response.rows || !response.rows[0].metricValues) {
    throw new Error('No data found');
  }

  return response.rows[0].metricValues[0].value;
}

export async function getTotalPageViews() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '2022-04-01',
        endDate: 'today',
      },
    ],
    metrics: [
      {
        name: 'screenPageViews',
      },
    ],
  });

  if (!response.rows || !response.rows[0].metricValues) {
    throw new Error('No data found');
  }

  return response.rows[0].metricValues[0].value;
}