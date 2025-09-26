'use client';
//import node modules libraries
import { Card, CardHeader, CardFooter, Button } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

//import custom components
// import TanstackTable from "components/table/TanstackTable";
// import { ActiveProjectColumns } from "components/dashboard/ColumnDefination";

//import required data files
import { activeProject } from 'data/DashboardData';
import { ActiveProjectsType } from 'types/DashboardTypes';

const getStatusAndProgress = (data: ActiveProjectsType[]) => {
  // Example: expects data to have [{ status: 'Open', progress: 30 }, ...]
  const statusMap: Record<string, number> = {};
  data.forEach((item) => {
    if (item.status && typeof item.progress === 'number') {
      statusMap[item.status] = (statusMap[item.status] || 0) + item.progress;
    }
  });
  return {
    labels: Object.keys(statusMap),
    values: Object.values(statusMap),
  };
};

const ActiveProject = () => {
  const { labels, values } = getStatusAndProgress(activeProject);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Progress',
        data: values,
        backgroundColor: [
          '#0d6efd', // blue
          '#198754', // green
          '#ffc107', // yellow
          '#dc3545', // red
          '#6f42c1', // purple
          '#20c997', // teal
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card className="card-lg mb-6">
      <CardHeader className="border-bottom-0">
        <h5 className="mb-0">Active Leads</h5>
      </CardHeader>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: 180 }}
      >
        <div style={{ width: 180, height: 180 }}>
          <Doughnut
            data={chartData}
            options={{
              cutout: '70%',
              plugins: {
                legend: {
                  display: true,
                  position: 'right',
                  labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    padding: 16,
                    font: { size: 13 },
                  },
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
      <CardFooter className=" border-dashed border-top text-center">
        <Button href="#!" variant="link">
          View All Projects
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActiveProject;
