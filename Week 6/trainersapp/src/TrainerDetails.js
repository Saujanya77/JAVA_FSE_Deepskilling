import { useParams } from "react-router-dom";
import trainers from "./TrainersMock";

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.trainerId === id);

  if (!trainer) return <p>No trainer found with ID: {id}</p>;

  return (
    <div>
      <h2>Trainer Details</h2>
      <p><strong>ID:</strong> {trainer.trainerId}</p>
      <p><strong>Name:</strong> {trainer.name}</p>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>
      <p><strong>Technology:</strong> {trainer.technology}</p>
      <p><strong>Skills:</strong> {trainer.skills.join(", ")}</p>
    </div>
  );
}
export default TrainerDetails;
