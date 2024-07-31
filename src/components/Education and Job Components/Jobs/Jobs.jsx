import ListItem from "../../List Item/ListItem";
import { TEMP_JOBS } from "../../../rawData/job";

const Jobs = () => {
  return (
    <div className="flex flex-col gap-4">
      {TEMP_JOBS.map((job) => (
        <ListItem key={job.id} item={job} />
      ))}
    </div>
  );
};

export default Jobs;
