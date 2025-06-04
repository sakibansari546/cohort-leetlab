import CreateSheetForm from "../../components/admin/CreateSheetForm";

const CreateSheetPage = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create New Sheet</h1>
          <p className="text-base-content opacity-70">
            Add a new Sheet to the HypeCoding platform.
          </p>
        </div>

        <div className="divider"></div>

        <CreateSheetForm />
      </div>
    </div>
  );
};

export default CreateSheetPage;
