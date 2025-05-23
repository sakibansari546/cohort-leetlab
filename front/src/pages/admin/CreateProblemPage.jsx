import CreateProblemForm from "../../components/admin/CreateProblemForm";

export default function CreateProblemPage() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create New Problem</h1>
          <p className="text-base-content opacity-70">
            Add a new coding problem to the HypeCoding platform.
          </p>
        </div>

        <div className="divider"></div>

        <CreateProblemForm />
      </div>
    </div>
  );
}
